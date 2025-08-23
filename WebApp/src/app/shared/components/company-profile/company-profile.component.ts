import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, inject, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCap,
  heroArchiveBox,
  heroArrowPathRoundedSquare,
  heroArrowRight,
  heroArrowTopRightOnSquare,
  heroBeaker,
  heroBookOpen,
  heroBriefcase,
  heroBuildingOffice,
  heroCalendarDays,
  heroChartBarSquare,
  heroChartPie,
  heroCircleStack,
  heroCodeBracket,
  heroCog6Tooth,
  heroDevicePhoneMobile,
  heroDocumentText,
  heroGlobeAlt,
  heroMapPin,
  heroMusicalNote,
  heroRectangleStack,
  heroRocketLaunch,
  heroShieldCheck,
  heroShoppingBag,
} from '@ng-icons/heroicons/outline';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import type { CompanyInfo } from '../../data/companies';
import { LogoStylingService } from '../../services/logo-styling.service';
import { BulletListComponent, BulletListItem } from '../bullet-list/bullet-list.component';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';

// CompanyInfo is imported above and re-exported for other components
export type { CompanyInfo };

export interface ProjectInfo {
  name: string;
  description: string;
  route: string;
  icon: string;
  color: string;
  status: string;
  technologies: string[];
}

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
  imports: [CommonModule, RouterModule, NgIconComponent, BulletListComponent, DecorativeBackgroundComponent],
  providers: [
    provideIcons({
      heroArrowTopRightOnSquare,
      heroMapPin,
      heroBriefcase,
      heroCalendarDays,
      heroAcademicCap,
      heroCodeBracket,
      heroBuildingOffice,
      heroCog6Tooth,
      heroArrowRight,
      heroRectangleStack,
      heroShoppingBag,
      heroBookOpen,
      heroMusicalNote,
      heroDevicePhoneMobile,
      heroBeaker,
      heroArchiveBox,
      heroChartBarSquare,
      heroCircleStack,
      heroChartPie,
      heroGlobeAlt,
      heroRocketLaunch,
      heroShieldCheck,
      heroDocumentText,
      heroArrowPathRoundedSquare,
    }),
  ],
})
export class CompanyProfileComponent implements AfterViewInit, OnDestroy {
  @Input() company!: CompanyInfo;
  @Input() projects!: ProjectInfo[];
  @ViewChild('projectDetailsSection') projectDetailsSection!: ElementRef;

  private readonly logoStylingService = inject(LogoStylingService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private destroy$ = new Subject<void>();
  private lastNavigationWasToProjectRoute = false;

  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-4 right-4',
      color: 'white', // Will be dynamically replaced
      opacity: 10,
      blur: 'xl',
    },
    {
      size: 'md',
      position: 'bottom-4 left-4',
      color: 'white', // Will be dynamically replaced
      opacity: 10,
      blur: 'lg',
    },
  ];

  projectBackgroundElements: BackgroundElement[] = [
    {
      size: 'sm',
      position: 'top-3 right-3',
      color: 'white',
      opacity: 10,
      blur: 'lg',
    },
  ];

  getLogoBackgroundStyle(logoBackground: 'white' | 'black' | 'dark' | undefined): string {
    return this.logoStylingService.getLogoBackgroundStyle(logoBackground);
  }

  getTechBadgeClass(index: number): string {
    const badgeClasses = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-indigo-100 text-indigo-800',
      'bg-pink-100 text-pink-800',
      'bg-yellow-100 text-yellow-800',
      'bg-red-100 text-red-800',
      'bg-teal-100 text-teal-800',
      'bg-orange-100 text-orange-800',
      'bg-gray-100 text-gray-800',
    ];
    return badgeClasses[index % badgeClasses.length] || 'bg-blue-100 text-blue-800';
  }

  getProjectLinkClass(theme: string): string {
    const linkClasses = {
      green: 'text-green-600 hover:text-green-800',
      blue: 'text-blue-600 hover:text-blue-800',
      red: 'text-red-600 hover:text-red-800',
      orange: 'text-orange-600 hover:text-orange-800',
    };
    return linkClasses[theme as keyof typeof linkClasses] || linkClasses.green;
  }

  getIconClass(theme: string): string {
    const iconClasses = {
      green: 'text-green-500',
      blue: 'text-blue-500',
      red: 'text-red-500',
      orange: 'text-orange-500',
    };
    return iconClasses[theme as keyof typeof iconClasses] || iconClasses.green;
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        // Check if current route has auto-scroll data
        this.checkAndScrollToProjectDetails();
      });

    // Also check on initial load
    this.checkAndScrollToProjectDetails();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private scrollToProjectDetails(): void {
    if (this.projectDetailsSection) {
      this.projectDetailsSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  private checkAndScrollToProjectDetails(): void {
    // Check if any active child route has autoScroll data set to true
    let currentRoute = this.route.firstChild;
    let hasProjectRoute = false;

    while (currentRoute) {
      if (currentRoute.snapshot.data['autoScroll'] === true && this.projectDetailsSection) {
        hasProjectRoute = true;

        // Only auto-scroll if the last navigation was NOT to a project route
        // (i.e., user is coming from project cards, not from another project)
        if (!this.lastNavigationWasToProjectRoute) {
          setTimeout(() => {
            this.scrollToProjectDetails();
          }, 150);
        }
        break;
      }
      currentRoute = currentRoute.firstChild;
    }

    // Update the flag for next navigation
    this.lastNavigationWasToProjectRoute = hasProjectRoute;
  }

  getAchievementItems(): BulletListItem[] {
    if (!this.company.achievements) return [];
    return this.company.achievements.map((achievement) => ({
      text: achievement,
    }));
  }
}
