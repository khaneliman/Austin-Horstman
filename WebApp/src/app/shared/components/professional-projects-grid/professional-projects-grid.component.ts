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
    const themeClasses: Record<string, { light: string; dark: string }> = {
      nri: {
        light: 'from-slate-100 via-blue-50 to-slate-100',
        dark: 'dark:from-slate-950 dark:via-blue-950 dark:to-sky-950',
      },
      green: {
        light: 'from-slate-100 via-emerald-50 to-teal-50',
        dark: 'dark:from-slate-950 dark:via-emerald-950 dark:to-teal-950',
      },
      blue: {
        light: 'from-slate-100 via-sky-50 to-cyan-100',
        dark: 'dark:from-slate-950 dark:via-sky-950 dark:to-cyan-950',
      },
      red: {
        light: 'from-slate-100 via-red-50 to-stone-100',
        dark: 'dark:from-slate-950 dark:via-red-950 dark:to-stone-950',
      },
      orange: {
        light: 'from-slate-100 via-amber-50 to-stone-100',
        dark: 'dark:from-slate-950 dark:via-amber-950 dark:to-stone-950',
      },
    };

    const selected = themeClasses[theme] ?? {
      light: 'from-slate-100 via-teal-50 to-slate-100',
      dark: 'dark:from-slate-950 dark:via-teal-950 dark:to-slate-900',
    };

    return `relative px-6 py-8 sm:px-8 sm:py-10 bg-gradient-to-br ${selected.light} ${selected.dark}`;
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
