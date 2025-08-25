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

  ngOnInit(): void {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      this.isCollapsed.set(true);
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl) this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
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
}
