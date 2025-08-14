import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getKrogerProjectForProfile } from '../../../shared/data/projects';

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
    getKrogerProjectForProfile('skyline'),
    {
      name: 'Renaissance Learning',
      description: 'Educational reporting platform',
      route: 'renaissance-learning',
      icon: 'heroBookOpen',
      color: 'from-blue-600 to-indigo-700',
      status: 'Production',
      technologies: ['Angular', 'GraphQL', 'TypeScript', 'Reports'],
    },
    {
      name: 'Mile of Music Festival',
      description: 'Mobile event platform',
      route: 'mile-of-music',
      icon: 'heroMusicalNote',
      color: 'from-indigo-600 to-purple-700',
      status: 'Production',
      technologies: ['Xamarin', 'Mobile', 'C#', 'iOS/Android'],
    },
    {
      name: 'JJ Keller Compliance',
      description: 'iOS compliance application',
      route: 'jj-keller',
      icon: 'heroDevicePhoneMobile',
      color: 'from-purple-600 to-red-700',
      status: 'Production',
      technologies: ['iOS', 'Native', 'Swift', 'Compliance'],
    },
    {
      name: 'Express Scripts Pharmacy',
      description: 'Pharmaceutical rebates platform',
      route: 'express-scripts',
      icon: 'heroBeaker',
      color: 'from-teal-600 to-green-700',
      status: 'Production',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Rebates'],
    },
  ];
}
