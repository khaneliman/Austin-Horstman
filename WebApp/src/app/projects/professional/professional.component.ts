import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBeaker, heroBriefcase, heroBuildingOffice, heroChartBarSquare } from '@ng-icons/heroicons/outline';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { ProfessionalProjectsGridComponent } from '../../shared/components/professional-projects-grid/professional-projects-grid.component';
import { getAllCompanies } from '../../shared/data/companies';
import { generateProfessionalProjectsGrid } from '../../shared/data/projects';
import { getAllTechnologyNames } from '../../shared/data/technologies';
import { ProjectsBreadcrumbComponent } from '../shared/components/breadcrumb/projects-breadcrumb.component';

@Component({
  selector: 'app-professional-projects',
  standalone: true,
  imports: [
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalProjectsComponent {
  professionalProjects = generateProfessionalProjectsGrid();

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

  heroTitle = 'Professional Projects';
  heroSubtitle =
    'Enterprise solutions and client applications developed during my tenure at leading technology companies, showcasing expertise in modern development practices and scalable system architecture.';
}
