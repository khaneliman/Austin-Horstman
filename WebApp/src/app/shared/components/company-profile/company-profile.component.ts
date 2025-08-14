import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface CompanyInfo {
  name: string;
  logoSrc: string;
  logoAlt: string;
  website?: string;
  location: string;
  position: string;
  dateRange: string;
  department?: string;
  colorScheme: {
    theme: string; // 'green', 'blue', 'red', 'orange'
    primary: string;
    secondary: string;
    accent: string;
    gradientFrom: string;
    gradientTo: string;
    gradientVia?: string;
  };
  stats: {
    years: string;
    metric1: { value: string; label: string };
    metric2: { value: string; label: string };
  };
  description: string;
}

export interface ProjectInfo {
  name: string;
  description: string;
  route: string;
  icon: string;
  color: string;
  status: string;
  technologies: string[];
}

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class CompanyProfileComponent {
  @Input() company!: CompanyInfo;
  @Input() projects!: ProjectInfo[];
}
