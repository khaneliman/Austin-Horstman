import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroBriefcase,
  heroBuildingOffice,
  heroBeaker,
  heroChartBarSquare,
  heroChevronRight,
} from '@ng-icons/heroicons/outline';
import { ProfessionalProjectsGridComponent } from '../../shared/components/professional-projects-grid/professional-projects-grid.component';
import { generateProfessionalProjectsGrid } from '../../shared/data/projects';

@Component({
  selector: 'app-professional-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    ProfessionalProjectsGridComponent,
  ],
  providers: [
    provideIcons({
      heroChevronRight,
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
}
