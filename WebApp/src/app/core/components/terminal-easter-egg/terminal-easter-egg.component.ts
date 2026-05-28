import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { isEditableTarget } from '../../../shared/services/keyboard-shortcuts.helpers';
import { ThemeService } from '../../../shared/services/theme.service';
import { matchesSequence, pushKey } from './konami';
import { runTerminalCommand } from './terminal-commands';

interface TerminalLine {
  kind: 'in' | 'out';
  text: string;
}

/**
 * Hidden shell revealed by the Konami code (↑↑↓↓←→←→ B A). A global keydown
 * listener accumulates a rolling buffer while closed; once open, the input
 * owns keys. Escape or the close button dismisses it. The boot/cursor motion
 * is disabled under prefers-reduced-motion in the stylesheet.
 */
@Component({
  selector: 'app-terminal-easter-egg',
  standalone: true,
  templateUrl: './terminal-easter-egg.component.html',
  styleUrl: './terminal-easter-egg.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalEasterEggComponent {
  private readonly router = inject(Router);
  private readonly theme = inject(ThemeService);
  private readonly commandInput = viewChild<ElementRef<HTMLInputElement>>('cmdInput');
  private readonly scrollRegion = viewChild<ElementRef<HTMLElement>>('scrollRegion');

  readonly isOpen = signal(false);
  readonly lines = signal<TerminalLine[]>([]);
  readonly command = signal('');

  private buffer: string[] = [];

  constructor() {
    effect(() => {
      this.lines();
      if (!this.isOpen()) return;
      queueMicrotask(() => {
        this.commandInput()?.nativeElement.focus();
        const region = this.scrollRegion()?.nativeElement;
        if (region) region.scrollTop = region.scrollHeight;
      });
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.isOpen()) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (isEditableTarget(event.target)) return;

    this.buffer = pushKey(this.buffer, event.key);
    if (matchesSequence(this.buffer)) {
      this.buffer = [];
      this.boot();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) this.close();
  }

  submit(): void {
    const raw = this.command();
    this.lines.update((lines) => [...lines, { kind: 'in', text: raw }]);

    const result = runTerminalCommand(raw);
    if (result.clear) {
      this.lines.set([]);
    } else if (result.output.length) {
      this.lines.update((lines) => [...lines, ...result.output.map((text): TerminalLine => ({ kind: 'out', text }))]);
    }
    if (result.toggleTheme) this.theme.toggleTheme();
    if (result.navigate) void this.router.navigateByUrl(result.navigate);
    if (result.close) this.close();

    this.command.set('');
  }

  close(): void {
    this.isOpen.set(false);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }

  private boot(): void {
    this.lines.set([
      { kind: 'out', text: 'khanelinix tty — you found the secret shell.' },
      { kind: 'out', text: "type 'help' for commands, 'exit' to leave." },
    ]);
    this.command.set('');
    this.isOpen.set(true);
  }
}
