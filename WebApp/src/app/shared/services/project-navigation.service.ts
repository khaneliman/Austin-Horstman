import { Injectable } from '@angular/core';
import { ProjectNavItem } from '../components/project-nav-header/project-nav-header.component';

@Injectable({
  providedIn: 'root',
})
export class ProjectNavigationService {
  // Define actual projects that exist in the filesystem for each company
  private projectConfigurations: Record<string, ProjectNavItem[]> = {
    'nri-na': [
      {
        name: 'DoItBest Platform',
        route: '/projects/professional/nri-na/doitbest',
      },
    ],
    corebts: [
      {
        name: 'Kroger Solutions',
        route: '/projects/professional/corebts/kroger',
      },
      {
        name: 'DoItBest Platform',
        route: '/projects/professional/corebts/doitbest',
      },
    ],
    skyline: [
      {
        name: 'Renaissance Learning',
        route: '/projects/professional/skyline/renaissance-learning',
      },
      {
        name: 'Mile of Music',
        route: '/projects/professional/skyline/mile-of-music',
      },
      { name: 'JJ Keller', route: '/projects/professional/skyline/jj-keller' },
      {
        name: 'Express Scripts',
        route: '/projects/professional/skyline/express-scripts',
      },
      {
        name: 'ClearTrend',
        route: '/projects/professional/skyline/cleartrend',
      },
      {
        name: 'Network Health',
        route: '/projects/professional/skyline/network-health',
      },
    ],
    geeksquad: [
      {
        name: 'Stat Tracker',
        route: '/projects/professional/geeksquad/stat-tracker',
      },
    ],
    west: [
      {
        name: 'Database Tool',
        route: '/projects/professional/west/database-tool',
      },
      {
        name: 'IT Portal',
        route: '/projects/professional/west/it-portal',
      },
      {
        name: 'Quick Launch',
        route: '/projects/professional/west/quick-launch',
      },
    ],
  };

  getNavigationItems(
    companyKey: string,
    activeRoute?: string
  ): ProjectNavItem[] {
    const items = this.projectConfigurations[companyKey] || [];
    return items.map(item => ({
      ...item,
      isActive: activeRoute ? item.route === activeRoute : false,
    }));
  }
}
