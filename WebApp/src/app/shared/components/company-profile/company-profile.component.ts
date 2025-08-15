import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { LogoStylingService } from '../../services/logo-styling.service';
import type { CompanyInfo } from '../../data/companies';
import {
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
} from '@ng-icons/heroicons/outline';

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
  imports: [CommonModule, RouterModule, NgIconComponent],
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
    }),
  ],
})
export class CompanyProfileComponent {
  @Input() company!: CompanyInfo;
  @Input() projects!: ProjectInfo[];

  private readonly logoStylingService = inject(LogoStylingService);

  getLogoBackgroundStyle(
    logoBackground: 'white' | 'black' | 'dark' | undefined
  ): string {
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
    return badgeClasses[index % badgeClasses.length];
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
}
