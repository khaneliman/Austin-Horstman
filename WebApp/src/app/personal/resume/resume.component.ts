import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../core/components/card/card.component';
import { WaveSeparatorComponent } from '../../shared/components/wave-separator/wave-separator.component';
import { FloatingCardComponent } from '../../core/components/floating-card/floating-card.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../../shared/components/decorative-background/decorative-background.component';
import {
  heroTrophy,
  heroCodeBracket,
  heroStar,
  heroAcademicCap,
  heroLightBulb,
  heroPencil,
  heroBuildingOffice,
  heroRectangleStack,
  heroCheck,
  heroGlobeAlt,
  heroCog6Tooth,
  heroFolder,
  heroInformationCircle,
} from '@ng-icons/heroicons/outline';
import {
  CompanyInfo,
  getCompanyWithCalculatedStats,
  getAllCompanies,
} from '../../shared/data/companies';
import {
  TechnologySkill,
  getProficientTechnologies,
  getLearnedTechnologies,
  getInterestedTechnologies,
  getAllTechnologyNames,
} from '../../shared/data/technologies';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  imports: [
    CommonModule,
    CardComponent,
    WaveSeparatorComponent,
    RouterLink,
    FloatingCardComponent,
    NgIconComponent,
    DecorativeBackgroundComponent,
  ],
  providers: [
    provideIcons({
      heroTrophy,
      heroCodeBracket,
      heroStar,
      heroAcademicCap,
      heroLightBulb,
      heroPencil,
      heroBuildingOffice,
      heroRectangleStack,
      heroCheck,
      heroGlobeAlt,
      heroCog6Tooth,
      heroFolder,
      heroInformationCircle,
    }),
  ],
})
export class ResumeComponent {
  educationBackgroundElements: BackgroundElement[] = [
    {
      size: 'w-32-h-32',
      position: 'top-20 left-10',
      color: 'white',
      opacity: 5,
      blur: 'xl',
      animate: true,
    },
    {
      size: 'xl',
      position: 'bottom-20 right-20',
      color: 'white',
      opacity: 10,
      blur: 'xl',
      animate: true,
      delay: 700,
    },
  ];

  employmentBackgroundElements: BackgroundElement[] = [
    {
      size: 'w-40-h-40',
      position: 'top-32 right-10',
      color: 'white',
      opacity: 5,
      blur: '2xl',
      animate: true,
      delay: 300,
    },
    {
      size: 'w-32-h-32',
      position: 'bottom-32 left-20',
      color: 'white',
      opacity: 10,
      blur: 'xl',
      animate: true,
      delay: 1000,
    },
  ];

  projectsBackgroundElements: BackgroundElement[] = [
    {
      size: 'w-40-h-40',
      position: 'top-20 right-32',
      color: 'purple-200',
      opacity: 30,
      blur: '2xl',
      animate: true,
      delay: 500,
    },
    {
      size: 'w-32-h-32',
      position: 'bottom-20 left-32',
      color: 'blue-200',
      opacity: 40,
      blur: 'xl',
      animate: true,
      delay: 1200,
    },
  ];

  technologyBackgroundElements: BackgroundElement[] = [
    {
      size: 'w-40-h-40',
      position: 'top-20 left-20',
      color: 'blue-500',
      opacity: 10,
      blur: '2xl',
      animate: true,
    },
    {
      size: 'w-32-h-32',
      position: 'bottom-20 right-20',
      color: 'green-500',
      opacity: 10,
      blur: 'xl',
      animate: true,
      delay: 700,
    },
    {
      size: 'w-48-h-48',
      position: 'top-1/2 left-1/2',
      color: 'purple-500',
      opacity: 5,
      blur: '3xl',
      animate: true,
      delay: 1000,
    },
  ];

  // Company data with calculated stats
  currentCompany: CompanyInfo = getCompanyWithCalculatedStats('nri-na');
  previousCompanies: CompanyInfo[] = [
    getCompanyWithCalculatedStats('corebts'),
    getCompanyWithCalculatedStats('skyline'),
    getCompanyWithCalculatedStats('west'),
    getCompanyWithCalculatedStats('bestbuy'),
  ];

  // Technology skill data
  proficientTechnologies: TechnologySkill[] = getProficientTechnologies().sort(
    (a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0)
  );
  learnedTechnologies: TechnologySkill[] = getLearnedTechnologies().sort(
    (a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0)
  );
  interestedTechnologies: TechnologySkill[] = getInterestedTechnologies();

  trackByCompanyId(index: number, company: CompanyInfo): string {
    return company.id;
  }

  trackByIndex(index: number): number {
    return index;
  }

  getCompanyColor(colorClass: string): string {
    // Map Tailwind color classes to actual CSS colors
    const colorMap: Record<string, string> = {
      'blue-500': '#3b82f6',
      'blue-600': '#2563eb',
      'blue-800': '#1e40af',
      'emerald-600': '#059669',
      'green-500': '#22c55e',
      'red-600': '#dc2626',
      'orange-500': '#f97316',
      'orange-600': '#ea580c',
      'orange-800': '#9a3412',
      'indigo-600': '#4f46e5',
      'sky-400': '#38bdf8',
      'teal-500': '#14b8a6',
      'gray-900': '#111827',
    };
    return colorMap[colorClass] || '#3b82f6';
  }

  // Calculated portfolio statistics
  get portfolioStats() {
    const allCompanies = getAllCompanies();
    const totalProjects = allCompanies.reduce((sum, company) => {
      return sum + company.projects.length;
    }, 0);

    // Use the centralized technology skills data for total count
    const totalTechnologies = getAllTechnologyNames().length;

    return {
      totalProjects,
      totalCompanies: allCompanies.length,
      totalTechnologies,
    };
  }
}
