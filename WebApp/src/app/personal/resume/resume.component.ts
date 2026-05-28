import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCap,
  heroArrowPathRoundedSquare,
  heroBeaker,
  heroBookOpen,
  heroBriefcase,
  heroBuildingOffice,
  heroChartBarSquare,
  heroCheck,
  heroCircleStack,
  heroCodeBracket,
  heroCog6Tooth,
  heroDevicePhoneMobile,
  heroDocumentText,
  heroFolder,
  heroGlobeAlt,
  heroInformationCircle,
  heroLightBulb,
  heroMusicalNote,
  heroPencil,
  heroRectangleStack,
  heroRocketLaunch,
  heroShieldCheck,
  heroShoppingBag,
  heroStar,
  heroTrophy,
} from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { CardComponent } from '../../core/components/card/card.component';
import { FloatingCardComponent } from '../../core/components/floating-card/floating-card.component';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../../shared/components/decorative-background/decorative-background.component';
import { WaveSeparatorComponent } from '../../shared/components/wave-separator/wave-separator.component';
import { CompanyInfo, getAllCompanies, getCompanyWithCalculatedStats } from '../../shared/data/companies';
import { GITHUB_METRICS } from '../../shared/data/github-metrics';
import { getResumeProjectCards } from '../../shared/data/projects';
import {
  getAllTechnologyNames,
  getInterestedTechnologies,
  getLearnedTechnologies,
  getProficientTechnologies,
  TechnologySkill,
} from '../../shared/data/technologies';
import { formatDateRange } from '../../shared/utils/date.utils';

const TAILWIND_HEX_COLORS: Record<string, string> = {
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

const getRepoMergedPrs = (repoName: string): number =>
  GITHUB_METRICS.repoMetrics.find((metric) => metric.repo === repoName)?.mergedPrs ?? 0;

const nixpkgsMergedPrs = getRepoMergedPrs('Nixpkgs');
const nixpkgsUpdatedAt = new Date(`${GITHUB_METRICS.asOf}T00:00:00Z`).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  imports: [
    NgClass,
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
      heroStarSolid,
      heroAcademicCap,
      heroLightBulb,
      heroPencil,
      heroBriefcase,
      heroBuildingOffice,
      heroRectangleStack,
      heroCheck,
      heroGlobeAlt,
      heroCog6Tooth,
      heroFolder,
      heroInformationCircle,
      heroArrowPathRoundedSquare,
      heroBeaker,
      heroBookOpen,
      heroChartBarSquare,
      heroCircleStack,
      heroDevicePhoneMobile,
      heroDocumentText,
      heroMusicalNote,
      heroRocketLaunch,
      heroShieldCheck,
      heroShoppingBag,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  private readonly projectAccentPattern = ['primary', 'warning', 'info'];

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
  previousCompanies: CompanyInfo[] = [getCompanyWithCalculatedStats('west'), getCompanyWithCalculatedStats('bestbuy')];

  // Get acquisition chain companies for the current company
  getAcquisitionChainCompanies(): CompanyInfo[] {
    if (!this.currentCompany.acquisitionChain) return [];
    return this.currentCompany.acquisitionChain.map((acquisition) =>
      getCompanyWithCalculatedStats(
        acquisition.companyId as keyof typeof import('../../shared/data/companies').COMPANIES
      )
    );
  }

  // Technology skill data
  proficientTechnologies: TechnologySkill[] = getProficientTechnologies().sort(
    (a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0)
  );
  learnedTechnologies: TechnologySkill[] = getLearnedTechnologies().sort(
    (a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0)
  );
  interestedTechnologies: TechnologySkill[] = getInterestedTechnologies();

  // Dynamic project data — dedupe by title so projects shared across
  // companies (e.g. Do It Best, Kroger) only appear once in the featured grid
  featuredProjects = getResumeProjectCards()
    .filter((project, index, all) => all.findIndex((other) => other.title === project.title) === index)
    .slice(0, 6); // Top 6 distinct projects for featured section
  personalProjects = this.getPersonalProjects();

  trackByCompanyId(index: number, company: CompanyInfo): string {
    return company.id;
  }

  trackByIndex(index: number): number {
    return index;
  }

  getProjectAccent(index: number): string {
    return this.projectAccentPattern[index % this.projectAccentPattern.length] ?? 'primary';
  }

  getCompanyColor(colorClass: string): string {
    return TAILWIND_HEX_COLORS[colorClass] ?? '#3b82f6';
  }

  getDateRange(company: CompanyInfo): string {
    return formatDateRange(company.dateStart, company.dateEnd);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    const targetTop = section.getBoundingClientRect().top + window.scrollY - 128;
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'auto' });

    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });
  }

  // Get personal/open source projects
  private getPersonalProjects() {
    return [
      {
        name: 'Home Manager',
        description:
          'Maintainer-level contributor to Home Manager with merged PRs around SSH, Hyprland, and module reliability (stable release and CI maintenance included).',
        icon: 'heroCodeBracket',
        status: 'success' as const,
        technologies: ['Nix', 'Open Source', 'Configuration Management'],
        route: '/projects/personal/home-manager',
        superText: 'Open Source',
      },
      {
        name: 'NixVim',
        description:
          'Contributor to Nixvim adding AI/LSP-focused plugin modules and runtime fixes like event-safe LSP attach handling and VIMINIT output loading.',
        icon: 'heroCodeBracket',
        status: 'primary' as const,
        technologies: ['Nix', 'Neovim', 'Lua'],
        route: '/projects/personal/nixvim',
        superText: 'Open Source',
      },
      {
        name: 'Nixpkgs',
        description: `High-volume package maintainer in Nixpkgs (${nixpkgsMergedPrs} merged PRs) as of ${nixpkgsUpdatedAt}, driving package updates, metadata consistency, and Lua/Neovim plugin health.`,
        icon: 'heroCodeBracket',
        status: 'primary' as const,
        technologies: ['Nix', 'Darwin', 'Package Management'],
        route: '/projects/personal/nixpkgs',
        superText: 'Open Source',
      },
    ];
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
