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
    // Use centralized company data for routing
    const company = this.getCompanyByName(companyName);
    return (
      company?.employmentRoute || this.getFallbackEmploymentRoute(companyName)
    );
  }

  private getCompanyByName(name: string) {
    // Import companies data dynamically to avoid circular dependencies
    const companies = [
      {
        name: 'NRI-NA',
        displayName: 'NRI-NA',
        employmentRoute: '/personal/resume/employment/nri-na',
      },
      {
        name: 'Core BTS',
        displayName: 'Core BTS',
        employmentRoute: '/personal/resume/employment/corebts',
      },
      {
        name: 'Skyline Technologies',
        displayName: 'Skyline Technologies',
        employmentRoute: '/personal/resume/employment/skyline',
      },
      {
        name: 'West Corporation',
        displayName: 'West Corporation',
        employmentRoute: '/personal/resume/employment/west',
      },
      {
        name: 'Best Buy Geek Squad',
        displayName: 'Best Buy Geek Squad',
        employmentRoute: '/personal/resume/employment/bestbuy',
      },
    ];

    return companies.find(
      company =>
        company.name.toLowerCase() === name.toLowerCase() ||
        company.displayName.toLowerCase() === name.toLowerCase()
    );
  }

  private getFallbackEmploymentRoute(companyName: string): string {
    const routeName = companyName
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace('geeksquad', 'bestbuy')
      .replace('nri-na', 'nri-na');
    return `/personal/resume/employment/${routeName}`;
  }
}
