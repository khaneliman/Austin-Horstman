import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroGlobeAlt,
  heroBriefcase,
  heroCog6Tooth,
  heroRectangleStack,
} from '@ng-icons/heroicons/outline';
import { ProfessionalProjectsGridComponent } from '../shared/components/professional-projects-grid/professional-projects-grid.component';
import { generateProfessionalProjectsGrid } from '../shared/data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    ProfessionalProjectsGridComponent,
  ],
  providers: [
    provideIcons({
      heroGlobeAlt,
      heroBriefcase,
      heroCog6Tooth,
      heroRectangleStack,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  professionalProjects = generateProfessionalProjectsGrid();

  personalProjectCategories = [
    {
      title: 'Web Applications',
      description: 'Full-stack web development projects',
      icon: 'heroGlobeAlt',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Portfolio Sites',
      description: 'Personal and professional showcases',
      icon: 'heroBriefcase',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Tools & Utilities',
      description: 'Development aids and automation tools',
      icon: 'heroCog6Tooth',
      color: 'from-teal-600 to-blue-600',
    },
  ];
}
