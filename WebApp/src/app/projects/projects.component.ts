import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  professionalProjects = [
    {
      title: 'Core BTS Projects',
      description: 'Modern enterprise solutions and client applications',
      company: 'Core BTS',
      route: '/projects/professional/corebts',
      icon: 'ni ni-building',
      color: 'from-gray-600 to-green-600',
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
      icon: 'ni ni-code',
      color: 'from-blue-600 to-purple-600',
      projects: [
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
      icon: 'ni ni-settings',
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
      icon: 'ni ni-support-16',
      color: 'from-blue-600 to-yellow-600',
      projects: [
        {
          name: 'Stat Tracker System',
          route: '/projects/professional/geeksquad/stat-tracker',
        },
      ],
    },
  ];

  personalProjectCategories = [
    {
      title: 'Web Applications',
      description: 'Full-stack web development projects',
      icon: 'ni ni-world',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Portfolio Sites',
      description: 'Personal and professional showcases',
      icon: 'ni ni-briefcase-24',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Tools & Utilities',
      description: 'Development aids and automation tools',
      icon: 'ni ni-settings-gear-65',
      color: 'from-teal-600 to-blue-600',
    },
  ];

  getCompanyRoute(companyName: string): string {
    const routeName = companyName
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace('geeksquad', 'bestbuy');
    return `/personal/resume/employment/${routeName}`;
  }
}
