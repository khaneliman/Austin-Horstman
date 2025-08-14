import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  RouterModule,
} from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SocialLinksComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  public isPersonalDropdownOpen = false;
  public isProjectsDropdownOpen = false;
  public isMobileMenuOpen = false;
  private lastPoppedUrl: string | undefined;
  private yScrollStack: number[] = [];
  private destroy$ = new Subject<void>();

  public location = inject(Location);
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
    this.isPersonalDropdownOpen = !this.isPersonalDropdownOpen;
    this.isProjectsDropdownOpen = false;
  }

  toggleProjectsDropdown(): void {
    this.isProjectsDropdownOpen = !this.isProjectsDropdownOpen;
    this.isPersonalDropdownOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeDropdowns(): void {
    this.isPersonalDropdownOpen = false;
    this.isProjectsDropdownOpen = false;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
