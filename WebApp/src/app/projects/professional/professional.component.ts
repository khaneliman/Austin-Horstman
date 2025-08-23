import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroBriefcase,
  heroBuildingOffice,
  heroBeaker,
  heroChartBarSquare,
} from '@ng-icons/heroicons/outline';
import { ProfessionalProjectsGridComponent } from '../../shared/components/professional-projects-grid/professional-projects-grid.component';
import { generateProfessionalProjectsGrid } from '../../shared/data/projects';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { ProjectsBreadcrumbComponent } from '../shared/components/breadcrumb/projects-breadcrumb.component';

@Component({
  selector: 'app-professional-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    ProfessionalProjectsGridComponent,
    HeroSectionComponent,
    ProjectsBreadcrumbComponent,
  ],
  providers: [
    provideIcons({
      heroBriefcase,
      heroBuildingOffice,
      heroBeaker,
      heroChartBarSquare,
    }),
  ],
  templateUrl: './professional.component.html',
  styleUrl: './professional.component.scss',
})
export class ProfessionalProjectsComponent {
  professionalProjects = generateProfessionalProjectsGrid();

  heroTitle = 'Professional Projects';
  heroSubtitle =
    'Enterprise solutions and client applications developed during my tenure at leading technology companies, showcasing expertise in modern development practices and scalable system architecture.';
}
