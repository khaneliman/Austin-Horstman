import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft, heroChevronRight } from '@ng-icons/heroicons/outline';
import { filter, map } from 'rxjs/operators';
import { ProjectNavigationService } from '../../services/project-navigation.service';

export interface ProjectNavItem {
  name: string;
  route: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-project-nav-header',
  imports: [RouterLink, NgIconComponent],
  providers: [provideIcons({ heroChevronLeft, heroChevronRight })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-nav-header.component.html',
  styleUrl: './project-nav-header.component.scss',
})
export class ProjectNavHeaderComponent {
  backRoute = input<string>('/projects/professional');
  backLabel = input<string>('Back to Professional Projects');
  hoverColor = input<string>('blue'); // blue, green, red, purple
  companyKey = input<string>('');

  private readonly router = inject(Router);
  private readonly navService = inject(ProjectNavigationService);
  private readonly quickNavigation = viewChild<ElementRef<HTMLElement>>('quickNavigation');
  private edgeScrollFrame = 0;
  private edgeScrollTime = 0;

  protected readonly hasOverflow = signal(false);
  protected readonly canScrollLeft = signal(false);
  protected readonly canScrollRight = signal(false);

  constructor() {
    afterRenderEffect((onCleanup) => {
      this.projects();
      const navigation = this.quickNavigation()?.nativeElement;
      if (!navigation) return;

      this.revealActiveProject();
      const observer = new ResizeObserver(() => {
        this.revealActiveProject();
        this.updateScrollState();
      });
      observer.observe(navigation);
      for (const tab of navigation.children) observer.observe(tab);
      this.updateScrollState();
      onCleanup(() => {
        observer.disconnect();
        this.stopEdgeScroll();
      });
    });
  }

  private revealActiveProject(): void {
    const navigation = this.quickNavigation()?.nativeElement;
    const active = navigation?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!navigation || !active) return;
    const bounds = navigation.getBoundingClientRect();
    const tab = active.getBoundingClientRect();
    if (tab.left < bounds.left || tab.right > bounds.right) {
      navigation.scrollLeft += tab.left - bounds.left - (navigation.clientWidth - tab.width) / 2;
    }
  }

  protected updateScrollState(): void {
    const navigation = this.quickNavigation()?.nativeElement;
    if (!navigation) return;
    this.hasOverflow.set(
      navigation.scrollWidth > (navigation.parentElement?.clientWidth ?? navigation.clientWidth) + 1
    );
    this.canScrollLeft.set(navigation.scrollLeft > 1);
    this.canScrollRight.set(navigation.scrollWidth - navigation.clientWidth - navigation.scrollLeft > 1);
  }

  protected scrollProjects(direction: -1 | 1): void {
    const navigation = this.quickNavigation()?.nativeElement;
    if (!navigation) return;
    navigation.scrollLeft += direction * navigation.clientWidth * 0.75;
    this.updateScrollState();
  }

  protected startEdgeScroll(direction: -1 | 1, event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    this.stopEdgeScroll();
    const scroll = (time: number) => {
      const navigation = this.quickNavigation()?.nativeElement;
      if (!navigation) {
        this.stopEdgeScroll();
        return;
      }
      const elapsed = this.edgeScrollTime ? Math.min(time - this.edgeScrollTime, 50) : 0;
      this.edgeScrollTime = time;
      navigation.scrollLeft += direction * elapsed * 0.4;
      this.updateScrollState();
      if ((direction === -1 && !this.canScrollLeft()) || (direction === 1 && !this.canScrollRight())) {
        this.stopEdgeScroll();
        return;
      }
      this.edgeScrollFrame = requestAnimationFrame(scroll);
    };
    this.edgeScrollFrame = requestAnimationFrame(scroll);
  }

  protected stopEdgeScroll(): void {
    cancelAnimationFrame(this.edgeScrollFrame);
    this.edgeScrollFrame = 0;
    this.edgeScrollTime = 0;
  }

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  readonly projects = computed<ProjectNavItem[]>(() => {
    const companyKey = this.companyKey();
    return companyKey ? this.navService.getNavigationItems(companyKey, this.currentUrl()) : [];
  });

  // Literal class maps so Tailwind v4 JIT can detect every variant.
  // Dynamic string concatenation (e.g. `'bg-' + color + '-100'`) is invisible to the scanner.
  private static readonly ACTIVE_TAB_CLASSES: Record<string, string> = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 focus:ring-blue-500',
    green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 focus:ring-green-500',
    red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 focus:ring-red-500',
  };

  private static readonly BACK_LINK_HOVER_CLASSES: Record<string, string> = {
    blue: 'hover:text-blue-600 dark:hover:text-blue-400',
    green: 'hover:text-green-600 dark:hover:text-green-400',
    red: 'hover:text-red-600 dark:hover:text-red-400',
  };

  get activeTabClasses(): string {
    const palette =
      ProjectNavHeaderComponent.ACTIVE_TAB_CLASSES[this.hoverColor()] ??
      ProjectNavHeaderComponent.ACTIVE_TAB_CLASSES['blue'];
    return `border-b-2 border-current px-3 py-3 ${palette} rounded-t-md text-sm font-semibold whitespace-nowrap focus-visible:outline-none focus-visible:ring-2`;
  }

  readonly inactiveTabClasses =
    'border-b-2 border-transparent px-3 py-3 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 rounded-t-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400';

  get backLinkClasses(): string {
    const palette =
      ProjectNavHeaderComponent.BACK_LINK_HOVER_CLASSES[this.hoverColor()] ??
      ProjectNavHeaderComponent.BACK_LINK_HOVER_CLASSES['blue'];
    return `inline-flex items-center gap-2 rounded-sm text-sm font-medium text-slate-600 dark:text-slate-300 ${palette} transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400`;
  }
}
