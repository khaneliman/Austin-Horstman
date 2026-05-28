import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  effect,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  CommandAction,
  CommandEntry,
  CommandKind,
  CommandPaletteService,
} from '../../../shared/services/command-palette.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { fuzzyMatch, highlightMatch } from '../../../shared/utils/fuzzy-match';
import { SOCIAL_PROFILES } from '../../services/social-links.service';

interface RankedEntry {
  entry: CommandEntry;
  labelSegments: { text: string; matched: boolean }[];
}

const KIND_LABEL: Record<CommandKind, string> = {
  page: 'Page',
  company: 'Company',
  project: 'Case Study',
  personal: 'Open Source',
  tech: 'Tech',
  action: 'Action',
};

const KIND_GLYPH: Record<CommandKind, string> = {
  page: '→',
  company: '◆',
  project: '§',
  personal: '✦',
  tech: '#',
  action: '⚡',
};

// Side-effecting and outbound commands. Declared here (not in the service)
// because they reach core-layer concerns: the theme service, the clipboard,
// and SOCIAL_PROFILES — importing those into shared/ would invert the layering.
const ACTION_ENTRIES: CommandEntry[] = [
  {
    id: 'action:theme',
    kind: 'action',
    label: 'Toggle theme',
    hint: 'Switch between light and dark',
    action: 'toggle-theme',
    keywords: 'dark light mode appearance color scheme',
  },
  {
    id: 'action:copy-link',
    kind: 'action',
    label: 'Copy link to this page',
    hint: 'Copy the current URL to your clipboard',
    action: 'copy-link',
    keywords: 'share url clipboard',
  },
  {
    id: 'action:github',
    kind: 'action',
    label: 'GitHub',
    hint: 'github.com/khaneliman',
    external: SOCIAL_PROFILES.links.github,
    keywords: 'open source code repositories nix',
  },
  {
    id: 'action:linkedin',
    kind: 'action',
    label: 'LinkedIn',
    hint: 'Connect professionally',
    external: SOCIAL_PROFILES.links.linkedin,
    keywords: 'connect network hire',
  },
  {
    id: 'action:hire',
    kind: 'action',
    label: 'sudo hire-me',
    hint: 'Jump to the contact page',
    route: '/personal/contact',
    keywords: 'hire job contact work opportunity recruit',
  },
];

@Component({
  selector: 'app-command-palette',
  standalone: true,
  templateUrl: './command-palette.component.html',
  styleUrl: './command-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandPaletteComponent {
  private readonly service = inject(CommandPaletteService);
  private readonly router = inject(Router);
  private readonly theme = inject(ThemeService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  readonly isOpen = this.service.isOpen;
  readonly query = signal('');
  readonly activeIndex = signal(0);
  readonly kindLabel = KIND_LABEL;
  readonly kindGlyph = KIND_GLYPH;

  private readonly index = signal<CommandEntry[]>([]);
  readonly results = computed<RankedEntry[]>(() => {
    const q = this.query().trim();
    const items = this.index();
    if (!q) {
      return items.slice(0, 8).map((entry) => ({
        entry,
        labelSegments: [{ text: entry.label, matched: false }],
      }));
    }

    const ranked: { entry: CommandEntry; score: number; indices: readonly number[] }[] = [];
    for (const entry of items) {
      const labelMatch = fuzzyMatch(q, entry.label);
      const keywordMatch = entry.keywords ? fuzzyMatch(q, entry.keywords) : null;
      const hintMatch = fuzzyMatch(q, entry.hint);
      const candidates = [
        labelMatch && { score: labelMatch.score * 3, indices: labelMatch.indices },
        keywordMatch && { score: keywordMatch.score, indices: [] as number[] },
        hintMatch && { score: hintMatch.score * 0.6, indices: [] as number[] },
      ].filter((m): m is { score: number; indices: readonly number[] } => m !== null);
      if (!candidates.length) continue;
      const best = candidates.reduce((a, b) => (a.score >= b.score ? a : b));
      const labelIndices = labelMatch?.indices ?? [];
      ranked.push({ entry, score: best.score, indices: labelIndices });
    }

    ranked.sort((a, b) => b.score - a.score);
    return ranked.slice(0, 12).map(({ entry, indices }) => ({
      entry,
      labelSegments: highlightMatch(entry.label, indices),
    }));
  });

  constructor() {
    this.index.set([...this.service.buildIndex(), ...ACTION_ENTRIES]);

    effect(() => {
      if (this.isOpen()) {
        this.activeIndex.set(0);
        queueMicrotask(() => this.searchInput()?.nativeElement.focus());
      } else {
        this.query.set('');
      }
    });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.service.close());
  }

  @HostListener('document:keydown', ['$event'])
  handleShortcut(event: KeyboardEvent): void {
    const isCommandKey = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
    if (isCommandKey) {
      event.preventDefault();
      this.service.toggle();
      return;
    }

    if (!this.isOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.service.close();
      return;
    }

    const max = this.results().length;
    if (!max) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeIndex.update((i) => (i + 1) % max);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeIndex.update((i) => (i - 1 + max) % max);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const target = this.results()[this.activeIndex()];
      if (target) this.executeEntry(target.entry);
    }
  }

  onQueryChange(value: string): void {
    this.query.set(value);
    this.activeIndex.set(0);
  }

  executeEntry(entry: CommandEntry): void {
    if (entry.action) {
      this.runAction(entry.action);
      this.service.close();
      return;
    }
    if (entry.external) {
      window.open(entry.external, '_blank', 'noopener,noreferrer');
      this.service.close();
      return;
    }
    if (entry.route) {
      void this.router.navigateByUrl(entry.route);
    }
    this.service.close();
  }

  private runAction(action: CommandAction): void {
    switch (action) {
      case 'toggle-theme':
        this.theme.toggleTheme();
        break;
      case 'copy-link':
        void navigator.clipboard?.writeText(window.location.href);
        break;
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.service.close();
    }
  }

  trackEntry(_index: number, item: RankedEntry): string {
    return item.entry.id;
  }
}
