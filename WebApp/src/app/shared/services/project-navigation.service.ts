import { Injectable } from '@angular/core';
import { ProjectNavItem } from '../components/project-nav-header/project-nav-header.component';
import { COMPANIES } from '../data/companies';

@Injectable({
  providedIn: 'root',
})
export class ProjectNavigationService {
  /**
   * Dynamically generates navigation items for a company based on the projects
   * defined in the COMPANIES data structure
   */
  getNavigationItems(companyKey: string, activeRoute?: string): ProjectNavItem[] {
    const company = COMPANIES[companyKey as keyof typeof COMPANIES];
    if (!company?.projects) return [];

    const baseRoute = `/projects/professional/${companyKey}`;

    return company.projects.map((project) => ({
      name: project.name,
      route: `${baseRoute}/${project.route}`,
      isActive: activeRoute ? `${baseRoute}/${project.route}` === activeRoute : false,
    }));
  }
}
