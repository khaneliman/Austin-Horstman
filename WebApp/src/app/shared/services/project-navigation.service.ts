import { Injectable } from '@angular/core';
import { ProjectNavItem } from '../components/project-nav-header/project-nav-header.component';
import { COMPANY_PROJECTS } from '../data/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectNavigationService {
  /**
   * Dynamically generates navigation items for a company based on the centralized
   * project data that defines which projects exist for each company
   */
  getNavigationItems(
    companyKey: string,
    activeRoute?: string
  ): ProjectNavItem[] {
    const projects =
      COMPANY_PROJECTS[companyKey as keyof typeof COMPANY_PROJECTS] || [];
    const baseRoute = `/projects/professional/${companyKey}`;

    return projects.map(project => ({
      name: project.name,
      route: `${baseRoute}/${project.route}`,
      isActive: activeRoute
        ? `${baseRoute}/${project.route}` === activeRoute
        : false,
    }));
  }
}
