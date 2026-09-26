import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';
import { filter, map } from 'rxjs/operators';
import { ProjectNavigationService } from '../../services/project-navigation.service';

export interface ProjectNavItem {
  name: string;
  route: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-project-nav-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  providers: [provideIcons({ heroChevronLeft })],
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
    return `px-3 py-2 ${palette} rounded-lg text-sm font-medium whitespace-nowrap snap-start focus:outline-none focus:ring-2`;
  }

  readonly inactiveTabClasses =
    'px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium whitespace-nowrap snap-start transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400';

  get backLinkClasses(): string {
    const palette =
      ProjectNavHeaderComponent.BACK_LINK_HOVER_CLASSES[this.hoverColor()] ??
      ProjectNavHeaderComponent.BACK_LINK_HOVER_CLASSES['blue'];
    return `inline-flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 ${palette} transition-colors duration-200`;
  }
}
