import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCheckCircle,
  heroCodeBracket,
  heroCog6Tooth,
  heroComputerDesktop,
  heroDevicePhoneMobile,
  heroFolder,
  heroGlobeAlt,
  heroLightBulb,
  heroWrench,
} from '@ng-icons/heroicons/outline';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';

export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  status: string;
  startDate: string;
  projects: {
    name: string;
    description: string;
    route: string;
    technologies: string[];
  }[];
  highlights: string[];
}

@Component({
  selector: 'app-personal-projects-grid',
  standalone: true,
  imports: [NgClass, RouterModule, NgIconComponent, DecorativeBackgroundComponent],
  providers: [
    provideIcons({
      heroCheckCircle,
      heroCodeBracket,
      heroCog6Tooth,
      heroComputerDesktop,
      heroDevicePhoneMobile,
      heroFolder,
      heroGlobeAlt,
      heroLightBulb,
      heroWrench,
    }),
  ],
  templateUrl: './personal-projects-grid.component.html',
  styleUrls: ['./personal-projects-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalProjectsGridComponent {
  readonly projects = input<PersonalProject[]>([]);
  readonly showFeaturedOnly = input(false);
  readonly maxProjects = input<number>();

  backgroundElements: BackgroundElement[] = [
    {
      size: 'md',
      position: 'top-4 right-4',
      color: 'white',
      opacity: 10,
      blur: 'xl',
    },
  ];

  get displayedProjects(): PersonalProject[] {
    const filtered = this.showFeaturedOnly() ? this.projects().filter((p) => p.featured) : this.projects();

    const maxProjects = this.maxProjects();
    return maxProjects ? filtered.slice(0, maxProjects) : filtered;
  }

  getCategoryIcon(category: string): string {
    const categoryIcons: Record<string, string> = {
      'Open Source': 'heroCodeBracket',
      'Web Application': 'heroGlobeAlt',
      'Development Tools': 'heroWrench',
      'System Configuration': 'heroComputerDesktop',
      'Development Environment': 'heroCodeBracket',
      Automation: 'heroCog6Tooth',
      Learning: 'heroLightBulb',
      'Mobile App': 'heroDevicePhoneMobile',
    };
    return categoryIcons[category] || 'heroFolder';
  }

  getCategoryColor(category: string): string {
    const categoryColors: Record<string, string> = {
      'Open Source': 'from-green-500 to-emerald-600',
      'Web Application': 'from-blue-500 to-indigo-600',
      'Development Tools': 'from-purple-500 to-violet-600',
      'System Configuration': 'from-violet-500 to-purple-600',
      'Development Environment': 'from-emerald-500 to-teal-600',
      Automation: 'from-orange-500 to-red-600',
      Learning: 'from-yellow-500 to-amber-600',
      'Mobile App': 'from-pink-500 to-rose-600',
    };
    return categoryColors[category] || 'from-gray-500 to-slate-600';
  }

  getStatusColor(status: string): string {
    const statusColors: Record<string, string> = {
      Active: 'text-teal-800 bg-teal-50 border border-teal-200',
      Maintained: 'text-teal-800 bg-teal-50 border border-teal-200',
      Ongoing: 'text-amber-800 bg-amber-50 border border-amber-200',
      Completed: 'text-slate-700 bg-stone-100 border border-stone-200',
      Archived: 'text-rose-800 bg-rose-50 border border-rose-200',
    };
    return statusColors[status] || 'text-slate-700 bg-stone-100 border border-stone-200';
  }
}
