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
import { getCompaniesForProfessionalGrid } from '../shared/data/companies';

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
  professionalProjects = this.getProfessionalProjectsWithData();

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

  private getProfessionalProjectsWithData() {
    return getCompaniesForProfessionalGrid().map(company => {
      // Add specific projects for each company
      const projects = [];

      switch (company.company) {
        case 'NRI-NA':
          projects.push({
            name: 'Do It Best',
            route: '/projects/professional/nri-na/doitbest',
          });
          break;
        case 'Core BTS':
          projects.push(
            {
              name: 'Kroger',
              route: '/projects/professional/corebts/kroger',
            },
            {
              name: 'Do It Best',
              route: '/projects/professional/corebts/doitbest',
            }
          );
          break;
        case 'Skyline Technologies':
          projects.push(
            {
              name: 'Kroger',
              route: '/projects/professional/skyline/kroger',
            },
            {
              name: 'Renaissance Learning Platform',
              route: '/projects/professional/skyline/renaissance-learning',
            },
            {
              name: 'Mile of Music Festival',
              route: '/projects/professional/skyline/mile-of-music',
            },
            {
              name: 'JJ Keller Compliance',
              route: '/projects/professional/skyline/jj-keller',
            },
            {
              name: 'Express Scripts Pharmacy',
              route: '/projects/professional/skyline/express-scripts',
            }
          );
          break;
        case 'West Corporation':
          projects.push(
            {
              name: 'IT Portal System',
              route: '/projects/professional/west/it-portal',
            },
            {
              name: 'Database Management Tool',
              route: '/projects/professional/west/database-tool',
            }
          );
          break;
        case 'Best Buy Geek Squad':
          projects.push({
            name: 'Stat Tracker System',
            route: '/projects/professional/geeksquad/stat-tracker',
          });
          break;
      }

      return { ...company, projects };
    });
  }
}
