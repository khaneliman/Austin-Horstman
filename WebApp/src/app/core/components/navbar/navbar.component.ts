import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  readonly isPersonalDropdownOpen = signal(false);
  readonly isProjectsDropdownOpen = signal(false);
  readonly isMobileMenuOpen = signal(false);

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly currentUrl = signal('');

  ngOnInit(): void {
    this.currentUrl.set(this.router.url);

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event) => {
        this.currentUrl.set(event.urlAfterRedirects);
        this.closeDropdowns();
        this.closeMobileMenu();
      });
  }

  togglePersonalDropdown(): void {
    this.isPersonalDropdownOpen.update((open) => !open);
    this.isProjectsDropdownOpen.set(false);
  }

  toggleProjectsDropdown(): void {
    this.isProjectsDropdownOpen.update((open) => !open);
    this.isPersonalDropdownOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
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
    const base = 'px-3 py-2 text-sm font-semibold tracking-tight transition-colors duration-200 rounded-lg';
    const active = 'text-teal-900 dark:text-teal-200 bg-teal-100/70 dark:bg-teal-950/60';
    const inactive = 'text-slate-700 dark:text-slate-300 hover:text-teal-900 dark:hover:text-teal-200';
    return `${base} ${this.isRouteActive(route, exact) ? active : inactive}`;
  }

  getDesktopDropdownButtonClasses(route: string): string {
    const base =
      'px-3 py-2 text-sm font-semibold tracking-tight flex items-center space-x-1 transition-colors duration-200 rounded-lg';
    const active = 'text-teal-900 dark:text-teal-200 bg-teal-100/70 dark:bg-teal-950/60';
    const inactive = 'text-slate-700 dark:text-slate-300 hover:text-teal-900 dark:hover:text-teal-200';
    return `${base} ${this.isRouteActive(route) ? active : inactive}`;
  }

  getDropdownLinkClasses(route: string, exact = false, emphasized = false): string {
    const base = `block px-4 py-2 transition-colors duration-150 ${emphasized ? 'font-medium' : ''}`;
    const active = 'bg-teal-50 text-teal-900 dark:bg-teal-950/60 dark:text-teal-200';
    const inactive =
      'text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-900 dark:hover:text-teal-200';
    return `${base} ${this.isRouteActive(route, exact) ? active : inactive}`;
  }

  getMobileLinkClasses(route: string, exact = false, nested = false, emphasized = false): string {
    const base = `block py-2 transition-colors duration-150 ${nested ? 'px-8' : 'px-4'} ${emphasized ? 'font-medium' : ''}`;
    const active = 'bg-teal-50 text-teal-900 dark:bg-teal-950/60 dark:text-teal-200';
    const inactive =
      'text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-900 dark:hover:text-teal-200';
    return `${base} ${this.isRouteActive(route, exact) ? active : inactive}`;
  }

  getMobileSectionLabelClasses(route: string): string {
    const base = 'px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]';
    const active = 'text-teal-900 dark:text-teal-200';
    const inactive = 'text-slate-500 dark:text-slate-400';
    return `${base} ${this.isRouteActive(route) ? active : inactive}`;
  }
}
