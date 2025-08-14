import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getProjectsForCompany } from '../../../shared/data/projects';

@Component({
  selector: 'app-west',
  templateUrl: './west.component.html',
  styleUrls: ['./west.component.scss'],
  imports: [CompanyProfileComponent],
})
export class WestComponent {
  company: CompanyInfo = {
    name: 'West Corporation',
    logoSrc: 'assets/images/west.jpg',
    logoAlt: 'West Corporation logo',
    website: 'https://www.west.com',
    location: 'Appleton, WI',
    position: 'Programmer',
    dateRange: '2015 - 2019',
    department: 'Revenue Generation Services',
    colorScheme: {
      theme: 'red',
      primary: 'red-500',
      secondary: 'orange-600',
      accent: 'yellow-600',
      gradientFrom: 'from-red-900',
      gradientTo: 'to-orange-900',
      gradientVia: 'via-red-800',
    },
    stats: {
      years: '4+',
      metric1: { value: '3+', label: 'Projects' },
      metric2: { value: 'Enterprise', label: 'Scale' },
    },
    description:
      'West Corporation was a leading provider of business communications services, specializing in contact center solutions, unified communications, and technology services. During my time as a Programmer in the Revenue Generation Services division, I developed internal tools and applications that streamlined IT operations and improved team productivity across the organization.',
  };

  projects: ProjectInfo[] = getProjectsForCompany('west');
}
