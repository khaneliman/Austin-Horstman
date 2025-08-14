import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getProjectsForCompany } from '../../../shared/data/projects';

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

  projects: ProjectInfo[] = getProjectsForCompany('skyline');
}
