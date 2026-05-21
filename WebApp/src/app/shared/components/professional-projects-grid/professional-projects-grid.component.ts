import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getCompanyEmploymentRoute } from '../../data/companies';
import { LogoStylingService } from '../../services/logo-styling.service';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';

export interface ProfessionalProject {
  title: string;
  description: string;
  company: string;
  route: string;
  logo: string;
  theme: string;
  logoBackground: 'white' | 'black' | 'dark';
  projects: {
    name: string;
    route: string;
  }[];
}

@Component({
  selector: 'app-professional-projects-grid',
  standalone: true,
  imports: [NgClass, RouterModule, DecorativeBackgroundComponent],
  templateUrl: './professional-projects-grid.component.html',
  styleUrls: ['./professional-projects-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalProjectsGridComponent {
  @Input() projects: ProfessionalProject[] = [];
  @Input() showCompanyInfo = true;

  private readonly logoStylingService = inject(LogoStylingService);

  backgroundElements: BackgroundElement[] = [
    {
      size: 'md',
      position: 'top-4 right-4',
      color: 'white',
      opacity: 10,
      blur: 'xl',
    },
  ];

  getCompanyRoute(companyName: string): string {
    return getCompanyEmploymentRoute(companyName);
  }

  getLogoBackgroundStyle(logoBackground: 'white' | 'black' | 'dark'): string {
    return this.logoStylingService.getLogoBackgroundStyle(logoBackground);
  }

  getHeaderClasses(theme: string): string {
    const themeClasses: Record<string, string> = {
      nri: 'from-slate-950 via-blue-950 to-sky-950',
      green: 'from-slate-950 via-emerald-950 to-teal-950',
      blue: 'from-slate-950 via-sky-950 to-cyan-950',
      red: 'from-slate-950 via-red-950 to-stone-950',
      orange: 'from-slate-950 via-amber-950 to-stone-950',
    };

    return `relative px-6 py-8 sm:px-8 sm:py-10 bg-gradient-to-br ${themeClasses[theme] ?? 'from-slate-950 via-teal-950 to-slate-900'}`;
  }

  getAccentClasses(theme: string): string {
    const themeClasses: Record<string, string> = {
      nri: 'border-t-sky-400 dark:border-t-sky-300',
      green: 'border-t-emerald-400 dark:border-t-emerald-300',
      blue: 'border-t-cyan-400 dark:border-t-cyan-300',
      red: 'border-t-red-400 dark:border-t-red-300',
      orange: 'border-t-amber-400 dark:border-t-amber-300',
    };

    return themeClasses[theme] ?? 'border-t-teal-400 dark:border-t-teal-300';
  }

  getVisibleProjects(project: ProfessionalProject): ProfessionalProject['projects'] {
    return project.projects.slice(0, 4);
  }

  getHiddenProjectCount(project: ProfessionalProject): number {
    return Math.max(project.projects.length - this.getVisibleProjects(project).length, 0);
  }
}
