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

@Component({
  selector: 'app-professional-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
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
  professionalProjects = [
    {
      title: 'NRI-NA Projects',
      description: 'Enterprise solutions and digital transformation',
      company: 'NRI-NA',
      route: '/projects/professional/nri-na',
      logo: 'assets/images/nri-logo.png',
      color: 'from-blue-600 to-indigo-600',
      projects: [
        {
          name: 'DoItBest Platform',
          route: '/projects/professional/nri-na/doitbest',
        },
      ],
    },
    {
      title: 'Core BTS Projects',
      description: 'Modern enterprise solutions and client applications',
      company: 'Core BTS',
      route: '/projects/professional/corebts',
      logo: 'assets/images/corebts.png',
      color: 'from-gray-800 to-green-700',
      projects: [
        {
          name: 'Kroger Solutions',
          route: '/projects/professional/corebts/kroger',
        },
        {
          name: 'DoItBest Platform',
          route: '/projects/professional/corebts/doitbest',
        },
      ],
    },
    {
      title: 'Skyline Technologies Projects',
      description: 'Consulting projects across multiple industries',
      company: 'Skyline Technologies',
      route: '/projects/professional/skyline',
      logo: './assets/images/skyline-technologies.png',
      color: 'from-blue-600 to-purple-600',
      projects: [
        {
          name: 'Kroger Solutions',
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
        },
      ],
    },
    {
      title: 'West Corporation Projects',
      description: 'Enterprise tools and automation solutions',
      company: 'West Corporation',
      route: '/projects/professional/west',
      logo: './assets/images/west.jpg',
      color: 'from-red-600 to-orange-600',
      projects: [
        {
          name: 'IT Portal System',
          route: '/projects/professional/west/it-portal',
        },
        {
          name: 'Database Management Tool',
          route: '/projects/professional/west/database-tool',
        },
      ],
    },
    {
      title: 'Geek Squad Projects',
      description: 'Customer service and operational tools',
      company: 'Best Buy Geek Squad',
      route: '/projects/professional/geeksquad',
      logo: './assets/images/geeksquad.jpg',
      color: 'from-blue-600 to-yellow-600',
      projects: [
        {
          name: 'Stat Tracker System',
          route: '/projects/professional/geeksquad/stat-tracker',
        },
      ],
    },
  ];

  getCompanyRoute(companyName: string): string {
    const routeName = companyName
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace('geeksquad', 'bestbuy')
      .replace('nri-na', 'nri-na');
    return `/personal/resume/employment/${routeName}`;
  }
}
