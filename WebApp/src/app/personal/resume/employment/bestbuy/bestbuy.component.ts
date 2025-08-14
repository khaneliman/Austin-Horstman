import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';

@Component({
  selector: 'app-bestbuy',
  templateUrl: './bestbuy.component.html',
  styleUrls: ['./bestbuy.component.scss'],
  imports: [CompanyProfileComponent],
})
export class BestbuyComponent {
  company: CompanyInfo = {
    name: 'Best Buy Geek Squad',
    logoSrc: 'assets/images/geeksquad.jpg',
    logoAlt: 'Geek Squad logo',
    website: 'https://www.bestbuy.com',
    location: 'Appleton, WI',
    position: 'Advanced Repair Agent',
    dateRange: '2011 - 2013',
    department: 'Computer Repair Services',
    colorScheme: {
      theme: 'orange',
      primary: 'blue-500',
      secondary: 'yellow-600',
      accent: 'orange-600',
      gradientFrom: 'from-blue-900',
      gradientTo: 'to-yellow-800',
      gradientVia: 'via-blue-800',
    },
    stats: {
      years: '2+',
      metric1: { value: '1', label: 'Major Project' },
      metric2: { value: 'Tech', label: 'Support' },
    },
    description:
      "Best Buy's Geek Squad is a specialized technology support service providing computer repair, installation, and technical support services. As an Advanced Repair Agent at the Appleton precinct, I handled complex hardware repairs, software troubleshooting, and developed custom tools to improve operational efficiency and customer service delivery.",
    achievements: [
      'Diagnosed and repaired complex computer hardware and software issues',
      'Managed client communications and service updates throughout repair process',
      "Maintained accurate client records per Best Buy's standard operating procedures",
      'Coordinated receiving and shipping operations for service center repairs',
      'Collaborated with small precinct team to ensure efficient service delivery',
    ],
  };

  projects: ProjectInfo[] = [
    {
      name: 'Stat Tracker System',
      description:
        'Performance monitoring and statistics tracking application for repair operations',
      route: '/projects/professional/geeksquad/stat-tracker',
      icon: 'heroChartBarSquare',
      color: 'from-blue-500 to-yellow-600',
      status: 'Production',
      technologies: ['VB.NET', 'Windows Forms', 'SQLite', 'Excel Integration'],
    },
  ];
}
