import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
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
import { getResumeProjectCards, selectProjectCards } from '../shared/data/projects';
import { getPersonalSkills } from '../shared/data/skills';
import { getProficientTechnologies } from '../shared/data/technologies';
import { CountUpDirective } from '../shared/directives/count-up.directive';

// Local midnight on August 1, 2013. A date-only ISO string would parse as UTC
// and land on July 31 in US time zones.
const CAREER_START = new Date(2013, 7, 1);

@Component({
  imports: [RouterLink, NgIconComponent, CountUpDirective],
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
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly profile = getPersonalProfile();
  protected readonly companies = getAllCompanies();
  protected readonly githubMetrics = GITHUB_METRICS;

  protected readonly topSkills = getProficientTechnologies()
    .sort((a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0))
    .slice(0, 8)
    .map((skill) => skill.name);

  protected readonly skills = getPersonalSkills();

  protected readonly selectedProjects = selectProjectCards(getResumeProjectCards(), [
    'nri-na/mulesoft-migrator',
    'nri-na/underwriting-workbench',
    'nri-na/farmlink-modernization',
    'nri-na/accident-health',
  ]);

  protected readonly currentCompany: CompanyInfo =
    this.companies.find((company) => !company.dateEnd) ?? getCompanyById('nri-na');

  protected readonly gatewayPanels = computed(() => {
    const today = new Date();
    const careerStart = CAREER_START;
    let yearsExperience = today.getFullYear() - careerStart.getFullYear();
    const monthDiff = today.getMonth() - careerStart.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < careerStart.getDate())) {
      yearsExperience--;
    }

    return [
      {
        value: `${yearsExperience}+`,
        label: 'resume path',
        detail: 'career timeline, current role, education, and technology depth',
      },
      {
        value: 'Case studies',
        label: 'project catalog',
        detail: 'professional delivery stories, selected work, and open-source systems',
      },
      {
        value: this.profile.location.split(',')[0] ?? this.profile.location,
        label: 'personal context',
        detail: 'how I work, what I value, and the kind of teams I fit best',
      },
      {
        value: 'Open loop',
        label: 'contact route',
        detail: 'direct links for hiring, collaboration, or technical conversation',
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
