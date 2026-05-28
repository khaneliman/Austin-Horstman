import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowRight,
  heroArrowTopRightOnSquare,
  heroBriefcase,
  heroCheckCircle,
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroComputerDesktop,
  heroDevicePhoneMobile,
  heroFolder,
  heroGlobeAlt,
  heroLightBulb,
  heroUser,
  heroWrench,
} from '@ng-icons/heroicons/outline';
import { PersonalProjectsGridComponent } from '../../shared/components/personal-projects-grid/personal-projects-grid.component';
import { GITHUB_METRICS } from '../../shared/data/github-metrics';
import { generatePersonalProjectsGrid } from '../../shared/data/personal-projects';
import { ProjectsBreadcrumbComponent } from '../shared/components/breadcrumb/projects-breadcrumb.component';

function formatMetricDate(date: string): string {
  const [year = '0', month = '1', day = '1'] = date.split('-');

  return new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

@Component({
  selector: 'app-personal',
  standalone: true,
  templateUrl: './personal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    RouterLink,
    RouterOutlet,
    NgIconComponent,
    PersonalProjectsGridComponent,
    ProjectsBreadcrumbComponent,
  ],
  providers: [
    provideIcons({
      heroArrowRight,
      heroUser,
      heroLightBulb,
      heroCodeBracket,
      heroCog6Tooth,
      heroCommandLine,
      heroFolder,
      heroGlobeAlt,
      heroBriefcase,
      heroComputerDesktop,
      heroArrowTopRightOnSquare,
      heroCheckCircle,
      heroWrench,
      heroDevicePhoneMobile,
    }),
  ],
})
export class PersonalComponent {
  protected readonly personalProjects = generatePersonalProjectsGrid();
  protected readonly githubMetrics = GITHUB_METRICS;
  protected readonly activeProjectCount = this.personalProjects.filter((project) => project.status === 'Active').length;
  protected readonly openSourceProject = this.personalProjects.find((project) => project.id === 'nix-ecosystem');
  protected readonly systemProject = this.personalProjects.find((project) => project.id === 'khanelinix');
  protected readonly editorProject = this.personalProjects.find((project) => project.id === 'khanelivim');
  protected readonly portfolioProject = this.personalProjects.find((project) => project.id === 'portfolio-website');

  protected readonly evidenceDate = formatMetricDate(GITHUB_METRICS.asOf);

  protected readonly workbenchLanes = [
    {
      label: 'Open-source maintenance',
      metric: `${GITHUB_METRICS.totalMergedPrs}+`,
      detail: `Merged PRs across Nixpkgs, Home Manager, and Nixvim as indexed on ${this.evidenceDate}.`,
      route: '/projects/personal/nixpkgs',
      icon: 'heroCodeBracket',
      accent: 'bg-teal-700 text-white',
    },
    {
      label: 'Reproducible systems',
      metric: this.systemProject?.title ?? 'Systems',
      detail: this.systemProject?.description ?? 'Cross-platform Nix configuration and declarative infrastructure.',
      route: '/projects/personal/khanelinix',
      icon: 'heroComputerDesktop',
      accent: 'bg-slate-950 text-white dark:bg-white dark:text-slate-950',
    },
    {
      label: 'Editor workflow',
      metric: this.editorProject?.title ?? 'Editor',
      detail: this.editorProject?.description ?? 'Neovim and Nixvim configuration for repeatable development flow.',
      route: '/projects/personal/khanelivim',
      icon: 'heroCommandLine',
      accent: 'bg-amber-300 text-slate-950',
    },
    {
      label: 'Portfolio application',
      metric: this.portfolioProject?.title ?? 'Portfolio',
      detail: this.portfolioProject?.description ?? 'Angular portfolio application with modern frontend tooling.',
      route: '/projects/personal',
      icon: 'heroGlobeAlt',
      accent: 'bg-rose-600 text-white',
    },
  ];

  protected readonly operatingModes = [
    {
      label: 'Public contribution record',
      detail:
        this.openSourceProject?.highlights?.[0] ??
        'Open-source work is tracked through merged pull requests and project-specific repositories.',
    },
    {
      label: 'Daily-driver systems',
      detail: `${this.activeProjectCount} active personal projects are tied to systems, editor tooling, automation, and this site.`,
    },
    {
      label: 'Professional-adjacent proof',
      detail:
        'The personal catalog shows how I maintain tooling, automation, and development environments outside client delivery.',
    },
  ];
}
