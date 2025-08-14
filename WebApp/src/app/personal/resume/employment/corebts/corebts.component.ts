import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';

@Component({
  selector: 'app-corebts',
  templateUrl: './corebts.component.html',
  styleUrls: ['./corebts.component.scss'],
  imports: [CompanyProfileComponent],
})
export class CorebtsComponent {
  company: CompanyInfo = {
    name: 'Core BTS',
    logoSrc: 'assets/images/corebts.png',
    logoAlt: 'Core BTS logo',
    website: 'https://www.corebts.com',
    location: 'Appleton, WI',
    position: 'Software Engineer → Senior Software Engineer',
    dateRange: 'Jan 2021 - Jan 2022',
    department: 'Modern Business Unit',
    colorScheme: {
      theme: 'green',
      primary: 'green-500',
      secondary: 'emerald-600',
      accent: 'lime-600',
      gradientFrom: 'from-green-900',
      gradientTo: 'to-emerald-900',
      gradientVia: 'via-green-800',
    },
    stats: {
      years: '1',
      metric1: { value: '5+', label: 'Clients' },
      metric2: { value: '8+', label: 'Projects' },
    },
    description:
      'Core BTS is a technology consulting company specializing in modern application development and digital transformation solutions. I joined as a Software Engineer in January 2021 and was promoted to Senior Software Engineer during my tenure. In the Modern Business Unit, I worked with diverse clients to build cutting-edge applications using the latest technologies and development practices, focusing on delivering scalable, maintainable solutions that drive business value and innovation.',
  };

  projects: ProjectInfo[] = [
    {
      name: 'Kroger Solutions',
      description: 'Enterprise retail platform modernization',
      route: '/projects/professional/corebts/kroger',
      icon: 'heroShoppingBag',
      color: 'from-green-600 to-emerald-800',
      status: 'Production',
      technologies: ['Angular', '.NET', 'Azure', 'SQL Server'],
    },
    {
      name: 'DoItBest Platform',
      description: 'Hardware retailer digital transformation',
      route: '/projects/professional/corebts/doitbest',
      icon: 'heroCog6Tooth',
      color: 'from-blue-600 to-indigo-800',
      status: 'Production',
      technologies: ['TypeScript', 'Azure', 'React', 'Microservices'],
    },
  ];
}
