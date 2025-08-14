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
    name: 'NRI-NA (formerly Core BTS)',
    logoSrc: 'assets/images/corebts.png',
    logoAlt: 'NRI-NA logo',
    website: 'https://www.nri.com/en/worldwide/americas',
    location: 'Madison, WI',
    position: 'Senior Software Engineer',
    dateRange: '2022 - Current',
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
      metric1: { value: '5+', label: 'Major Clients' },
      metric2: { value: 'Enterprise', label: 'Scale' },
    },
    description:
      'NRI-NA (formerly Core BTS) is a technology consulting company specializing in enterprise software development and digital transformation solutions. Following the acquisition by Nomura Research Institute in 2022, the company has expanded its capabilities in cloud-native architectures and global enterprise solutions. As a Senior Software Engineer, I led development of large-scale applications for major retail and e-commerce clients, focusing on inventory management, supply chain optimization, and customer experience platforms with modern cloud technologies.',
  };

  projects: ProjectInfo[] = [
    {
      name: 'Kroger Solutions',
      description: 'Advanced enterprise solutions for retail operations',
      route: 'kroger',
      icon: 'heroShoppingBag',
      color: 'from-blue-600 to-blue-800',
      status: 'Production',
      technologies: ['Angular', 'C#', '.NET', 'SQL Server', 'Azure'],
    },
    {
      name: 'DoItBest Platform',
      description: 'Next-generation hardware retail management platform',
      route: 'doitbest',
      icon: 'heroCog6Tooth',
      color: 'from-indigo-600 to-blue-800',
      status: 'Production',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Microservices'],
    },
  ];
}
