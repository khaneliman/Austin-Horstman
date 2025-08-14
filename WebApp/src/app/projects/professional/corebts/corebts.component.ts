import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import {
  getDoItBestProjectForProfile,
  getKrogerProjectForProfile,
} from '../../../shared/data/projects';

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
    location: 'Madison, WI',
    position: 'Senior Software Engineer',
    dateRange: '2020 - 2024',
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
      years: '4',
      metric1: { value: '2+', label: 'Major Clients' },
      metric2: { value: 'Enterprise', label: 'Scale' },
    },
    description:
      'Core BTS is a technology consulting company specializing in enterprise software development and digital transformation solutions. As a Senior Software Engineer, I led development of large-scale applications for major retail and e-commerce clients, focusing on inventory management, supply chain optimization, and customer experience platforms.',
  };

  projects: ProjectInfo[] = [
    getKrogerProjectForProfile('corebts'),
    getDoItBestProjectForProfile(),
  ];
}
