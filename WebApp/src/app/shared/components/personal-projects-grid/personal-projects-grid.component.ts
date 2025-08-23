import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
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
  imports: [CommonModule, RouterModule, NgIconComponent, DecorativeBackgroundComponent],
  templateUrl: './personal-projects-grid.component.html',
  styleUrls: ['./personal-projects-grid.component.scss'],
})
export class PersonalProjectsGridComponent {
  @Input() projects: PersonalProject[] = [];
  @Input() showFeaturedOnly = false;
  @Input() maxProjects?: number;

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
    const filtered = this.showFeaturedOnly ? this.projects.filter((p) => p.featured) : this.projects;

    return this.maxProjects ? filtered.slice(0, this.maxProjects) : filtered;
  }

  getCategoryIcon(category: string): string {
    const categoryIcons: Record<string, string> = {
      'Open Source': 'heroCodeBracket',
      'Web Application': 'heroGlobeAlt',
      'Development Tools': 'heroWrench',
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
      Automation: 'from-orange-500 to-red-600',
      Learning: 'from-yellow-500 to-amber-600',
      'Mobile App': 'from-pink-500 to-rose-600',
    };
    return categoryColors[category] || 'from-gray-500 to-slate-600';
  }

  getStatusColor(status: string): string {
    const statusColors: Record<string, string> = {
      Active: 'text-green-600 bg-green-100',
      Maintained: 'text-blue-600 bg-blue-100',
      Ongoing: 'text-purple-600 bg-purple-100',
      Completed: 'text-gray-600 bg-gray-100',
      Archived: 'text-red-600 bg-red-100',
    };
    return statusColors[status] || 'text-gray-600 bg-gray-100';
  }
}
