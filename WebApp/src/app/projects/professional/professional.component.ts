import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowRight,
  heroBeaker,
  heroBriefcase,
  heroBuildingOffice,
  heroChartBarSquare,
  heroCodeBracket,
  heroRocketLaunch,
} from '@ng-icons/heroicons/outline';
import { ProfessionalProjectsGridComponent } from '../../shared/components/professional-projects-grid/professional-projects-grid.component';
import { getAllCompanies, getCompanyWithCalculatedStats } from '../../shared/data/companies';
import { generateProfessionalProjectsGrid, getResumeProjectCards } from '../../shared/data/projects';
import { getAllTechnologyNames } from '../../shared/data/technologies';
import { ProjectsBreadcrumbComponent } from '../shared/components/breadcrumb/projects-breadcrumb.component';

@Component({
  selector: 'app-professional-projects',
  standalone: true,
  imports: [RouterModule, NgIconComponent, ProfessionalProjectsGridComponent, ProjectsBreadcrumbComponent],
  providers: [
    provideIcons({
      heroArrowRight,
      heroBriefcase,
      heroBuildingOffice,
      heroBeaker,
      heroChartBarSquare,
      heroCodeBracket,
      heroRocketLaunch,
    }),
  ],
  templateUrl: './professional.component.html',
  styleUrl: './professional.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalProjectsComponent {
  protected readonly professionalProjects = generateProfessionalProjectsGrid();
  protected readonly currentCompany = getCompanyWithCalculatedStats('nri-na');
  protected readonly featuredCaseStudies = getResumeProjectCards()
    .filter((project) =>
      ['MuleSoft Migrator', 'AI Resource Staffing', 'Tax Document Analysis', 'DoItBest'].includes(project.title)
    )
    .slice(0, 4);

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

  protected readonly deliveryThread = [
    {
      label: 'Modernization pressure',
      detail: 'MuleSoft replacement with custom .NET APIs, feature parity, and test coverage.',
      marker: '$500K+ annual licensing removed',
      icon: 'heroChartBarSquare',
    },
    {
      label: 'Compressed delivery',
      detail: 'Delivered against a migration initially estimated at 3-4 years.',
      marker: '11 month focused migration',
      icon: 'heroRocketLaunch',
    },
    {
      label: 'Consulting arc',
      detail: 'Skyline to Core BTS to NRI-NA through acquisitions and role growth.',
      marker: `${this.currentCompany.stats.years} continuous role context`,
      icon: 'heroBriefcase',
    },
  ];
}
