import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCap,
  heroArrowRight,
  heroBriefcase,
  heroChartBarSquare,
  heroCodeBracket,
  heroCog6Tooth,
  heroComputerDesktop,
  heroDocumentText,
  heroEnvelope,
  heroGlobeAlt,
  heroRocketLaunch,
  heroUser,
} from '@ng-icons/heroicons/outline';
import { CompanyInfo, getAllCompanies, getCompanyById } from '../shared/data/companies';
import { GITHUB_METRICS } from '../shared/data/github-metrics';
import { getPersonalProfile } from '../shared/data/profile';
import { getResumeProjectCards } from '../shared/data/projects';
import { getPersonalSkills } from '../shared/data/skills';
import { getProficientTechnologies } from '../shared/data/technologies';

@Component({
  standalone: true,
  imports: [RouterModule, NgClass, NgIconComponent],
  providers: [
    provideIcons({
      heroAcademicCap,
      heroArrowRight,
      heroBriefcase,
      heroChartBarSquare,
      heroCodeBracket,
      heroComputerDesktop,
      heroDocumentText,
      heroEnvelope,
      heroGlobeAlt,
      heroRocketLaunch,
      heroCog6Tooth,
      heroUser,
    }),
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly profile = getPersonalProfile();
  protected readonly companies = getAllCompanies();
  protected readonly githubMetrics = GITHUB_METRICS;
  private readonly careerStartDate = signal(new Date('2013-08-01'));

  protected readonly topSkills = getProficientTechnologies()
    .sort((a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0))
    .slice(0, 8)
    .map((skill) => skill.name);

  protected readonly skills = getPersonalSkills();

  protected readonly selectedProjects = getResumeProjectCards()
    .filter((project) =>
      ['MuleSoft Migrator', 'AI Resource Staffing', 'Tax Document Analysis', 'Kroger', 'DoItBest'].includes(
        project.title
      )
    )
    .slice(0, 4);

  protected readonly currentCompany: CompanyInfo =
    this.companies.find((company) => !company.dateEnd) ?? getCompanyById('nri-na');

  protected readonly portfolioStats = computed(() => {
    const today = new Date();
    const careerStart = this.careerStartDate();
    let yearsExperience = today.getFullYear() - careerStart.getFullYear();
    const monthDiff = today.getMonth() - careerStart.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < careerStart.getDate())) {
      yearsExperience--;
    }

    return [
      {
        value: `${yearsExperience}+`,
        label: 'years building software',
        detail: 'from support tooling to enterprise architecture',
      },
      {
        value: '$500K+',
        label: 'annual licensing removed',
        detail: 'through MuleSoft-to-.NET modernization',
      },
      {
        value: `${this.githubMetrics.totalMergedPrs}+`,
        label: 'merged OSS PRs',
        detail: `Nix ecosystem contribution index as of ${this.githubMetrics.asOf}`,
      },
      {
        value: `${this.companies.reduce((total, company) => total + company.projects.length, 0)}+`,
        label: 'documented projects',
        detail: 'professional case studies and personal systems work',
      },
    ];
  });

  protected readonly heroActions = [
    {
      text: 'View Resume',
      routerLink: '/personal/resume',
      icon: 'heroDocumentText',
    },
    {
      text: 'Browse Projects',
      routerLink: '/projects',
      icon: 'heroCodeBracket',
    },
    {
      text: 'Contact',
      routerLink: '/personal/contact',
      icon: 'heroEnvelope',
    },
  ];

  protected readonly focusAreas = [
    {
      eyebrow: 'Modernization',
      title: 'Replace expensive legacy platforms without losing behavior',
      description:
        'I turn inherited systems into smaller, testable services and keep stakeholders aligned around feature parity, migration risk, and delivery cadence.',
      icon: 'heroRocketLaunch',
      accent: 'border-l-teal-500',
    },
    {
      eyebrow: 'Architecture',
      title: 'Design patterns teams can actually maintain',
      description:
        'My work favors clear boundaries, boring reliability, and architecture that supports both today’s release and next year’s handoff.',
      icon: 'heroBriefcase',
      accent: 'border-l-amber-400',
    },
    {
      eyebrow: 'Open Source',
      title: 'Build reproducible environments and contributor workflows',
      description:
        'Nix, Home Manager, and Nixvim work gives me daily practice maintaining broad shared tooling with high review standards.',
      icon: 'heroGlobeAlt',
      accent: 'border-l-rose-500',
    },
  ];

  protected readonly openSourceBreakdown = this.githubMetrics.repoMetrics;
}
