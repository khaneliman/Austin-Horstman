import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowRight,
  heroBriefcase,
  heroChartBarSquare,
  heroCodeBracket,
  heroCog6Tooth,
  heroGlobeAlt,
  heroLightBulb,
  heroRectangleStack,
  heroRocketLaunch,
  heroUser,
  heroWrench,
} from '@ng-icons/heroicons/outline';
import { PersonalProjectsGridComponent } from '../shared/components/personal-projects-grid/personal-projects-grid.component';
import { ProfessionalProjectsGridComponent } from '../shared/components/professional-projects-grid/professional-projects-grid.component';
import { getAllCompanies, getCompanyWithCalculatedStats } from '../shared/data/companies';
import { GITHUB_METRICS } from '../shared/data/github-metrics';
import { generatePersonalProjectsGrid } from '../shared/data/personal-projects';
import { generateProfessionalProjectsGrid, getResumeProjectCards } from '../shared/data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, NgClass, NgIconComponent, ProfessionalProjectsGridComponent, PersonalProjectsGridComponent],
  providers: [
    provideIcons({
      heroArrowRight,
      heroGlobeAlt,
      heroBriefcase,
      heroChartBarSquare,
      heroCog6Tooth,
      heroRectangleStack,
      heroRocketLaunch,
      heroCodeBracket,
      heroWrench,
      heroLightBulb,
      heroUser,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly professionalProjects = generateProfessionalProjectsGrid();
  protected readonly personalProjects = generatePersonalProjectsGrid();
  protected readonly companies = getAllCompanies();
  protected readonly githubMetrics = GITHUB_METRICS;
  protected readonly currentCompany = getCompanyWithCalculatedStats('nri-na');

  protected readonly featuredCaseStudies = getResumeProjectCards()
    .filter((project) =>
      [
        'MuleSoft Migrator',
        'AI Resource Staffing',
        'Tax Document Analysis',
        'DoItBest',
        'Kroger',
        'Nix Ecosystem',
      ].includes(project.title)
    )
    .slice(0, 5);

  protected readonly impactHighlights = [
    {
      value: '$500K+',
      label: 'annual licensing removed',
      description: 'MuleSoft replacement with custom .NET APIs, documentation, and regression coverage.',
      icon: 'heroChartBarSquare',
    },
    {
      value: '11 mo',
      label: 'modernization delivery',
      description: 'Compressed a 3-4 year migration estimate into a focused delivery window.',
      icon: 'heroRocketLaunch',
    },
    {
      value: `${GITHUB_METRICS.totalMergedPrs}+`,
      label: 'merged open-source PRs',
      description: `Nixpkgs, Home Manager, Nixvim, and Waybar contributions indexed as of ${GITHUB_METRICS.asOf}.`,
      icon: 'heroCodeBracket',
    },
  ];

  protected readonly catalogLanes = [
    {
      label: 'Professional case studies',
      route: '/projects/professional',
      detail: `${this.professionalProjects.length} client and enterprise entries with role, outcome, and implementation context.`,
      icon: 'heroBriefcase',
    },
    {
      label: 'Personal systems',
      route: '/projects/personal',
      detail: `${this.personalProjects.length} open-source, editor, automation, and portfolio projects outside client delivery.`,
      icon: 'heroGlobeAlt',
    },
    {
      label: 'Current consulting arc',
      route: this.currentCompany.experienceRoute,
      detail: `${this.currentCompany.displayName} role context with acquisition history, active responsibilities, and current work.`,
      icon: 'heroRocketLaunch',
    },
    {
      label: 'Open-source evidence',
      route: '/projects/personal',
      detail: `Merged Nix ecosystem contributions indexed from GitHub metrics as of ${this.githubMetrics.asOf}.`,
      icon: 'heroWrench',
    },
  ];
}
