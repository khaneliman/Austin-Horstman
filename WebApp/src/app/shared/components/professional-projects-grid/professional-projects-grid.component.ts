import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ProfessionalProject {
  title: string;
  description: string;
  company: string;
  route: string;
  logo: string;
  color: string;
  projects: {
    name: string;
    route: string;
  }[];
}

@Component({
  selector: 'app-professional-projects-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './professional-projects-grid.component.html',
  styleUrls: ['./professional-projects-grid.component.scss'],
})
export class ProfessionalProjectsGridComponent {
  @Input() projects: ProfessionalProject[] = [];
  @Input() showCompanyInfo = true;

  getCompanyRoute(companyName: string): string {
    const routeName = companyName
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace('geeksquad', 'bestbuy')
      .replace('nri-na', 'nri-na');
    return `/personal/resume/employment/${routeName}`;
  }
}
