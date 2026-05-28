import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowRight,
  heroBriefcase,
  heroChartBarSquare,
  heroCodeBracket,
  heroCog6Tooth,
  heroDocumentText,
  heroEnvelope,
  heroMapPin,
  heroRocketLaunch,
} from '@ng-icons/heroicons/outline';
import { getAllCompanies, getCompanyWithCalculatedStats } from '../../shared/data/companies';
import { GITHUB_METRICS } from '../../shared/data/github-metrics';
import { getPersonalProfile } from '../../shared/data/profile';
import { getPersonalSkills } from '../../shared/data/skills';
import { getAllTechnologyNames } from '../../shared/data/technologies';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [RouterLink, NgClass, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowRight,
      heroBriefcase,
      heroChartBarSquare,
      heroCodeBracket,
      heroCog6Tooth,
      heroDocumentText,
      heroEnvelope,
      heroMapPin,
      heroRocketLaunch,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  // Personal profile data
  protected readonly profile = getPersonalProfile();
  protected readonly currentCompany = getCompanyWithCalculatedStats('nri-na');
  protected readonly skills = getPersonalSkills();
  protected readonly githubMetrics = GITHUB_METRICS;

  protected readonly yearsOfExperience = computed(() => {
    // Use centralized years of experience from profile
    return this.profile.yearsOfExperience;
  });

  // Calculate portfolio statistics from actual data
  protected readonly portfolioStats = computed(() => {
    const allCompanies = getAllCompanies();
    const totalProjects = allCompanies.reduce((sum, company) => {
      return sum + company.projects.length;
    }, 0);

    const totalTechnologies = getAllTechnologyNames().length;

    return {
      totalProjects,
      totalTechnologies,
    };
  });

  protected readonly proofPoints = computed(() => [
    {
      value: `${this.yearsOfExperience()}+`,
      label: 'years in software and technology',
      detail: 'from hands-on support to solution architecture',
    },
    {
      value: '$500K+',
      label: 'annual licensing removed',
      detail: 'through MuleSoft-to-.NET modernization work',
    },
    {
      value: `${this.githubMetrics.totalMergedPrs}+`,
      label: 'merged open-source PRs',
      detail: `Nix ecosystem contribution index as of ${this.githubMetrics.asOf}`,
    },
    {
      value: `${this.portfolioStats().totalTechnologies}+`,
      label: 'technologies represented',
      detail: 'across enterprise, open-source, and personal systems',
    },
  ]);

  protected readonly principles = [
    {
      title: 'Make migrations measurable',
      description:
        'I care about preserving behavior, reducing licensing or operational drag, and making progress visible enough for stakeholders to trust the path.',
      icon: 'heroChartBarSquare',
      accent: 'border-l-teal-500',
    },
    {
      title: 'Choose durable architecture',
      description:
        'The best system is usually the one a team can understand, test, deploy, and safely change after the initial implementation is over.',
      icon: 'heroCog6Tooth',
      accent: 'border-l-amber-400',
    },
    {
      title: 'Improve the developer loop',
      description:
        'Open-source maintenance, reproducible environments, and AI-assisted workflows all point at the same goal: less friction between intent and shipped work.',
      icon: 'heroRocketLaunch',
      accent: 'border-l-rose-500',
    },
  ];

  protected readonly nextSteps = [
    {
      label: 'Read resume',
      route: '/personal/resume',
      icon: 'heroDocumentText',
    },
    {
      label: 'Browse projects',
      route: '/projects',
      icon: 'heroCodeBracket',
    },
    {
      label: 'Start conversation',
      route: '/personal/contact',
      icon: 'heroEnvelope',
    },
  ];
}
