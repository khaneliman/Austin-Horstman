import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowRight,
  heroBriefcase,
  heroCodeBracket,
  heroCog6Tooth,
  heroGlobeAlt,
  heroLightBulb,
  heroRectangleStack,
  heroUser,
  heroWrench,
} from '@ng-icons/heroicons/outline';
import { HeroSectionComponent } from '../shared/components/hero-section/hero-section.component';
import { PersonalProjectsGridComponent } from '../shared/components/personal-projects-grid/personal-projects-grid.component';
import { ProfessionalProjectsGridComponent } from '../shared/components/professional-projects-grid/professional-projects-grid.component';
import { getAllCompanies } from '../shared/data/companies';
import { generatePersonalProjectsGrid } from '../shared/data/personal-projects';
import { generateProfessionalProjectsGrid } from '../shared/data/projects';
import { getAllTechnologyNames } from '../shared/data/technologies';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterModule,
    NgIconComponent,
    ProfessionalProjectsGridComponent,
    PersonalProjectsGridComponent,
    HeroSectionComponent,
  ],
  providers: [
    provideIcons({
      heroArrowRight,
      heroGlobeAlt,
      heroBriefcase,
      heroCog6Tooth,
      heroRectangleStack,
      heroCodeBracket,
      heroWrench,
      heroLightBulb,
      heroUser,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  professionalProjects = generateProfessionalProjectsGrid();
  personalProjects = generatePersonalProjectsGrid();

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
