import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';

@Component({
  selector: 'app-nri-na',
  templateUrl: './nri-na.component.html',
  styleUrls: ['./nri-na.component.scss'],
  imports: [CompanyProfileComponent],
})
export class NriNaComponent {
  company: CompanyInfo = {
    name: 'NRI-NA',
    logoSrc: 'assets/images/nri-logo.png',
    logoAlt: 'NRI-NA logo',
    website: 'https://www.nri.com/en/worldwide/americas',
    location: 'Appleton, WI',
    position: 'Senior Software Engineer',
    dateRange: 'Jan 2022 - Current',
    department: 'Modern Business Unit',
    colorScheme: {
      theme: 'blue',
      primary: 'blue-500',
      secondary: 'indigo-600',
      accent: 'sky-600',
      gradientFrom: 'from-blue-900',
      gradientTo: 'to-indigo-900',
      gradientVia: 'via-blue-800',
    },
    stats: {
      years: '3+',
      metric1: { value: '15+', label: 'Projects' },
      metric2: { value: '20+', label: 'Clients' },
    },
    description:
      "NRI-NA is a technology consulting company specializing in modern application development and digital transformation solutions. In 2022, Nomura Research Institute acquired Core BTS, expanding the company's global reach and enterprise capabilities. As a Senior Software Engineer in the Modern Business Unit, I work with diverse clients to build cutting-edge applications using the latest technologies and development practices, focusing on cloud-native architectures and scalable enterprise solutions.",
  };

  projects: ProjectInfo[] = [
    {
      name: 'Kroger Solutions',
      description: 'Advanced enterprise retail platform modernization',
      route: '/projects/professional/nri-na/kroger',
      icon: 'heroShoppingBag',
      color: 'from-blue-600 to-indigo-800',
      status: 'Production',
      technologies: ['Angular', '.NET', 'Azure', 'SQL Server', 'Kafka'],
    },
    {
      name: 'DoItBest Platform',
      description: 'Next-generation hardware retail management platform',
      route: '/projects/professional/nri-na/doitbest',
      icon: 'heroCog6Tooth',
      color: 'from-indigo-600 to-blue-800',
      status: 'Production',
      technologies: ['TypeScript', 'Azure', 'React', 'Microservices'],
    },
  ];
}
