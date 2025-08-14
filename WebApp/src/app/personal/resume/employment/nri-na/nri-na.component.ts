import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';
import { getDoItBestProject } from '../../../../shared/data/projects';

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

  projects: ProjectInfo[] = [getDoItBestProject('nri-na')];
}
