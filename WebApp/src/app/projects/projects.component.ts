import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroGlobeAlt,
  heroBriefcase,
  heroCog6Tooth,
  heroRectangleStack,
  heroCodeBracket,
  heroWrench,
  heroLightBulb,
} from '@ng-icons/heroicons/outline';
import { ProfessionalProjectsGridComponent } from '../shared/components/professional-projects-grid/professional-projects-grid.component';
import { PersonalProjectsGridComponent } from '../shared/components/personal-projects-grid/personal-projects-grid.component';
import { generateProfessionalProjectsGrid } from '../shared/data/projects';
import { generatePersonalProjectsGrid } from '../shared/data/personal-projects';
import { HeroSectionComponent } from '../shared/components/hero-section/hero-section.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    ProfessionalProjectsGridComponent,
    PersonalProjectsGridComponent,
    HeroSectionComponent,
  ],
  providers: [
    provideIcons({
      heroGlobeAlt,
      heroBriefcase,
      heroCog6Tooth,
      heroRectangleStack,
      heroCodeBracket,
      heroWrench,
      heroLightBulb,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  professionalProjects = generateProfessionalProjectsGrid();
  personalProjects = generatePersonalProjectsGrid();

  heroTitle = 'Projects Portfolio';
  heroSubtitle =
    'Explore a comprehensive collection of professional and personal software development projects spanning multiple technologies, industries, and client engagements.';

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
