import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';

@Component({
  selector: 'app-west',
  templateUrl: './west.component.html',
  styleUrls: ['./west.component.scss'],
  imports: [CompanyProfileComponent],
})
export class WestComponent {
  company: CompanyInfo = {
    name: 'West Corporation',
    logoSrc: './assets/images/west.jpg',
    logoAlt: 'West Corporation logo',
    website: 'https://www.west.com',
    location: 'Appleton, WI',
    position: 'Programmer',
    dateRange: '2015 - 2020',
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
      'West Corporation was a leading provider of business communications services, specializing in contact center solutions, unified communications, and technology services. In the Revenue Generation Services division, I developed and maintained enterprise-level applications and automation solutions that streamlined operations and improved departmental workflows.',
    achievements: [
      'Developed new features for CRM applications and websites',
      'Created SSIS packages for data and file automation processes',
      'Wrote SQL stored procedures for applications and SSRS reporting',
      'Built internal applications and websites to improve departmental workflow',
      'Maintained and enhanced existing enterprise systems',
    ],
  };

  projects: ProjectInfo[] = [
    {
      name: 'IT Portal System',
      description:
        'Comprehensive internal portal system to streamline IT operations and improve departmental workflow efficiency',
      route: '/projects/professional/west/it-portal',
      icon: 'heroCog6Tooth',
      color: 'from-red-500 to-orange-600',
      status: 'Production',
      technologies: ['C#', 'SQL Server', 'ASP.NET', 'Internal Tools'],
    },
    {
      name: 'Database Management Tool',
      description:
        'Advanced SSIS packages and stored procedures for automated data processing and enterprise reporting systems',
      route: '/projects/professional/west/database-tool',
      icon: 'heroArchiveBox',
      color: 'from-orange-500 to-yellow-600',
      status: 'Production',
      technologies: ['SSIS', 'SSRS', 'SQL Server', 'Data Processing'],
    },
  ];
}
