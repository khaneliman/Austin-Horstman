import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
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
import type { COMPANIES, CompanyInfo } from '../../data/companies';
import { getCompanyById } from '../../data/companies';
import { LogoStylingService } from '../../services/logo-styling.service';
import { formatDateRange } from '../../utils/date.utils';
import { BulletListComponent, BulletListItem } from '../bullet-list/bullet-list.component';

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
  standalone: true,
  templateUrl: './company-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIconComponent, BulletListComponent],
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
export class CompanyProfileComponent {
  readonly company = input.required<CompanyInfo>();
  readonly projects = input.required<ProjectInfo[]>();

  private readonly logoStylingService = inject(LogoStylingService);

  getLogoBackgroundStyle(logoBackground: 'white' | 'black' | 'dark' | undefined): string {
    return this.logoStylingService.getLogoBackgroundStyle(logoBackground);
  }

  getAchievementItems(): BulletListItem[] {
    const companyValue = this.company();
    if (!companyValue.achievements) return [];
    return companyValue.achievements.map((achievement) => ({
      text: achievement,
    }));
  }

  getDateRange(): string {
    const companyValue = this.company();
    return formatDateRange(companyValue.dateStart, companyValue.dateEnd);
  }

  getAcquisitionDateRange(dateStart: string, dateEnd?: string): string {
    return formatDateRange(dateStart, dateEnd);
  }

  formatAcquisitionMonth(date: string): string {
    // Parse YYYY-MM format to readable month/year
    const [year, month] = date.split('-');
    if (!month || !year) return date; // Fallback to original date if parsing fails
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const monthIndex = parseInt(month, 10) - 1;
    return `${monthNames[monthIndex]} ${year}`;
  }

  getCompanyName(companyId: string): string {
    try {
      return getCompanyById(companyId as keyof typeof COMPANIES).displayName;
    } catch {
      return companyId; // Fallback to ID if company not found
    }
  }

  getCompanyRoute(companyId: string): string {
    try {
      return getCompanyById(companyId as keyof typeof COMPANIES).experienceRoute;
    } catch {
      return '#'; // Fallback to # if company not found
    }
  }
}
