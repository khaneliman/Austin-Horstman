import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';

@Component({
  selector: 'app-skyline',
  templateUrl: './skyline.component.html',
  styleUrls: ['./skyline.component.scss'],
  imports: [CompanyProfileComponent],
})
export class SkylineComponent {
  company: CompanyInfo = {
    name: 'Skyline Technologies',
    logoSrc: '/assets/images/skyline-technologies.png',
    logoAlt: 'Skyline Technologies logo',
    website: 'https://www.skylinetechnologies.com',
    location: 'Appleton, WI',
    position: 'Software Developer',
    dateRange: '2013 - 2015',
    colorScheme: {
      theme: 'blue',
      primary: 'blue-500',
      secondary: 'indigo-600',
      accent: 'purple-600',
      gradientFrom: 'from-blue-900',
      gradientTo: 'to-purple-900',
      gradientVia: 'via-indigo-800',
    },
    stats: {
      years: '2',
      metric1: { value: '5+', label: 'Clients' },
      metric2: { value: '8+', label: 'Projects' },
    },
    description:
      'Skyline Technologies is a premier software consulting company specializing in custom application development, web development, and technology consulting services. During my time as a Software Developer, I worked on diverse client projects ranging from healthcare management systems to learning platforms and financial applications.',
  };

  projects: ProjectInfo[] = [
    {
      name: 'Renaissance Learning Platform',
      description: 'Educational assessment and reading management platform',
      route: 'renaissance-learning',
      icon: 'ni ni-book-bookmark',
      color: 'from-blue-600 to-indigo-800',
      status: 'Production',
      technologies: ['C#', '.NET', 'SQL Server', 'JavaScript'],
    },
    {
      name: 'Mile of Music Festival',
      description: 'Music festival event management and ticketing system',
      route: 'mile-of-music',
      icon: 'ni ni-sound-wave',
      color: 'from-purple-600 to-pink-800',
      status: 'Legacy',
      technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    },
    {
      name: 'JJ Keller Compliance',
      description: 'Transportation compliance and safety management solutions',
      route: 'jj-keller',
      icon: 'ni ni-archive-2',
      color: 'from-green-600 to-teal-800',
      status: 'Production',
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'Web API'],
    },
    {
      name: 'Express Scripts Pharmacy',
      description:
        'Pharmaceutical benefit management and prescription processing',
      route: 'express-scripts',
      icon: 'ni ni-atom',
      color: 'from-red-600 to-orange-800',
      status: 'Production',
      technologies: ['Java', 'Spring', 'Oracle', 'REST API'],
    },
  ];
}
