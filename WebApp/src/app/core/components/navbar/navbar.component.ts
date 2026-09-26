import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemePickerComponent } from '../../../shared/components/theme-picker/theme-picker.component';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';
import { CommandPaletteService } from '../../../shared/services/command-palette.service';
import { ShortcutsHelpService } from '../../../shared/services/shortcuts-help.service';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { isActiveRoute } from './navbar.helpers';

@Component({
  standalone: true,
  imports: [RouterModule, SocialLinksComponent, ThemePickerComponent, ThemeToggleComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class NavbarComponent implements OnInit {
  readonly isPersonalDropdownOpen = signal(false);
  readonly isProjectsDropdownOpen = signal(false);
  readonly isMobileMenuOpen = signal(false);

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly commandPalette = inject(CommandPaletteService);
  private readonly shortcutsHelp = inject(ShortcutsHelpService);
  private readonly currentUrl = signal('');
  private readonly personalMenu = viewChild.required<ElementRef<HTMLElement>>('personalMenu');
  private readonly projectsMenu = viewChild.required<ElementRef<HTMLElement>>('projectsMenu');
  private readonly personalToggle = viewChild.required<ElementRef<HTMLButtonElement>>('personalToggle');
  private readonly projectsToggle = viewChild.required<ElementRef<HTMLButtonElement>>('projectsToggle');
  private readonly mobileToggle = viewChild.required<ElementRef<HTMLButtonElement>>('mobileToggle');

  openCommandPalette(): void {
    this.commandPalette.open();
  }

  openShortcutsHelp(): void {
    this.shortcutsHelp.open();
  }

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

  protected onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node | null;
    if (this.isPersonalDropdownOpen() && !this.personalMenu().nativeElement.contains(target)) {
      this.isPersonalDropdownOpen.set(false);
    }
    if (this.isProjectsDropdownOpen() && !this.projectsMenu().nativeElement.contains(target)) {
      this.isProjectsDropdownOpen.set(false);
    }
  }

  protected onEscape(): void {
    if (this.isPersonalDropdownOpen()) {
      this.isPersonalDropdownOpen.set(false);
      this.personalToggle().nativeElement.focus();
    } else if (this.isProjectsDropdownOpen()) {
      this.isProjectsDropdownOpen.set(false);
      this.projectsToggle().nativeElement.focus();
    } else if (this.isMobileMenuOpen()) {
      this.isMobileMenuOpen.set(false);
      this.mobileToggle().nativeElement.focus();
    }
  }

  isRouteActive(route: string, exact = false): boolean {
    return isActiveRoute(this.currentUrl(), route, exact);
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
