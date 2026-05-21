import { Location, PopStateEvent } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  standalone: true,
  imports: [RouterModule, SocialLinksComponent, ThemeToggleComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  public isCollapsed = signal(true);
  public isPersonalDropdownOpen = signal(false);
  public isProjectsDropdownOpen = signal(false);
  public isMobileMenuOpen = signal(false);
  private lastPoppedUrl: string | undefined;
  private yScrollStack: number[] = [];
  public location = inject(Location);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private currentUrl = signal('');

  ngOnInit(): void {
    this.currentUrl.set(this.router.url);

    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      this.isCollapsed.set(true);
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl) this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        this.currentUrl.set(event.urlAfterRedirects);
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop() as number);
        } else window.scrollTo(0, 0);
      }
    });

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
  }

  isHome(): boolean {
    const titlee = this.location.prepareExternalUrl(this.location.path());

    if (titlee === '#/home') {
      return true;
    } else {
      return false;
    }
  }
  isDocumentation(): boolean {
    const titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '#/documentation') {
      return true;
    } else {
      return false;
    }
  }

  togglePersonalDropdown(): void {
    this.isPersonalDropdownOpen.set(!this.isPersonalDropdownOpen());
    this.isProjectsDropdownOpen.set(false);
  }

  toggleProjectsDropdown(): void {
    this.isProjectsDropdownOpen.set(!this.isProjectsDropdownOpen());
    this.isPersonalDropdownOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeDropdowns(): void {
    this.isPersonalDropdownOpen.set(false);
    this.isProjectsDropdownOpen.set(false);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  isRouteActive(route: string, exact = false): boolean {
    const path = this.currentUrl().split(/[?#]/)[0] || '/home';
    return exact ? path === route : path === route || path.startsWith(`${route}/`);
  }

  getDesktopLinkClasses(route: string, exact = false): string {
    const base = 'px-3 py-2 text-lg font-medium transition-colors duration-200 rounded-lg';
    const active = 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800';
    const inactive = 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';

    return `${base} ${this.isRouteActive(route, exact) ? active : inactive}`;
  }

  getDesktopDropdownButtonClasses(route: string): string {
    const base = 'px-3 py-2 text-lg font-medium flex items-center space-x-1 transition-colors duration-200 rounded-lg';
    const active = 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800';
    const inactive = 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';

    return `${base} ${this.isRouteActive(route) ? active : inactive}`;
  }

  getDropdownLinkClasses(route: string, exact = false, emphasized = false): string {
    const base = `block px-4 py-2 transition-colors duration-150 ${emphasized ? 'font-medium' : ''}`;
    const active = 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400';
    const inactive =
      'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400';

    return `${base} ${this.isRouteActive(route, exact) ? active : inactive}`;
  }

  getMobileLinkClasses(route: string, exact = false, nested = false, emphasized = false): string {
    const base = `block py-2 transition-colors duration-150 ${nested ? 'px-8' : 'px-4'} ${emphasized ? 'font-medium' : ''}`;
    const active = 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400';
    const inactive =
      'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400';

    return `${base} ${this.isRouteActive(route, exact) ? active : inactive}`;
  }

  getMobileSectionLabelClasses(route: string): string {
    const base = 'px-4 py-2 text-sm font-medium';
    const active = 'text-blue-600 dark:text-blue-400';
    const inactive = 'text-gray-500 dark:text-gray-400';

    return `${base} ${this.isRouteActive(route) ? active : inactive}`;
  }
}
