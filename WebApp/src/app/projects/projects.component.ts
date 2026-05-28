import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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
import { getAllTechnologyNames } from '../shared/data/technologies';

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

  private readonly careerStartDate = signal(new Date('2013-08-01')); // When career started at Best Buy Geek Squad

  // Calculate portfolio statistics from actual data
  protected readonly portfolioStats = computed(() => {
    const allCompanies = getAllCompanies();
    const totalProjects = allCompanies.reduce((sum, company) => {
      return sum + company.projects.length;
    }, 0);

    const totalTechnologies = getAllTechnologyNames().length;

    // Calculate years of experience
    const today = new Date();
    const careerStart = this.careerStartDate();
    let yearsExperience = today.getFullYear() - careerStart.getFullYear();
    const monthDiff = today.getMonth() - careerStart.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < careerStart.getDate())) {
      yearsExperience--;
    }

    return {
      totalProjects,
      totalCompanies: allCompanies.length,
      totalTechnologies,
      yearsExperience,
    };
  });

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
      description: `Nixpkgs, Home Manager, and Nixvim contributions indexed as of ${GITHUB_METRICS.asOf}.`,
      icon: 'heroCodeBracket',
    },
  ];

  personalProjectCategories = [
    {
      title: 'Open Source',
      description: 'Active contributions to the Nix ecosystem',
      icon: 'heroCodeBracket',
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Web Applications',
      description: 'Full-stack web development projects',
      icon: 'heroGlobeAlt',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Development Tools',
      description: 'Utilities and automation tools',
      icon: 'heroWrench',
      color: 'from-purple-600 to-violet-600',
    },
  ];
}
