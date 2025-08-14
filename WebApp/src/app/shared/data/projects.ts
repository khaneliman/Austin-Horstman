import { ProjectInfo } from '../components/company-profile/company-profile.component';

// Shared project configurations that can be reused across different company contexts
export const SHARED_PROJECTS = {
  doitbest: {
    name: 'DoItBest Platform',
    description:
      'Backend services and infrastructure modernization with mainframe decommissioning',
    icon: 'heroCog6Tooth',
    color: 'from-indigo-600 to-blue-800',
    status: 'Production' as const,
    technologies: ['C#', 'Java', 'Kafka', 'Oracle', 'Azure', 'Kubernetes'],
  },

  kroger: {
    corebts: {
      name: 'Kroger Solutions',
      description:
        'NgRx state management and Cold Fusion modernization for enterprise retail platform',
      icon: 'heroShoppingBag',
      color: 'from-green-600 to-emerald-800',
      status: 'Production' as const,
      technologies: ['Angular', 'NgRx', '.NET', 'Azure', 'Cold Fusion Legacy'],
      route: '/projects/professional/corebts/kroger',
    },
    nriNa: {
      name: 'Kroger Solutions',
      description: 'Advanced enterprise platform modernization',
      icon: 'heroShoppingBag',
      color: 'from-blue-600 to-indigo-800',
      status: 'Production' as const,
      technologies: ['Angular', '.NET', 'Azure', 'SQL Server', 'Kafka'],
      route: '/projects/professional/nri-na/kroger',
    },
  },
} as const;

// Helper functions to get project configurations
export function getDoItBestProject(company: 'corebts' | 'nri-na'): ProjectInfo {
  const companyRoute = company === 'corebts' ? 'corebts' : 'nri-na';
  return {
    ...SHARED_PROJECTS.doitbest,
    route: `/projects/professional/${companyRoute}/doitbest`,
    technologies: [...SHARED_PROJECTS.doitbest.technologies],
  };
}

export function getKrogerProject(company: 'corebts' | 'nriNa'): ProjectInfo {
  const project = SHARED_PROJECTS.kroger[company];
  return {
    ...project,
    technologies: [...project.technologies],
  };
}

// Company profile specific helpers (for child routes with relative paths)
export function getDoItBestProjectForProfile(): ProjectInfo {
  return {
    ...SHARED_PROJECTS.doitbest,
    route: 'doitbest', // Relative route for child routes
    technologies: [...SHARED_PROJECTS.doitbest.technologies],
  };
}

export function getKrogerProjectForProfile(
  company: 'corebts' | 'nriNa'
): ProjectInfo {
  const project = SHARED_PROJECTS.kroger[company];
  return {
    ...project,
    route: 'kroger', // Relative route for child routes
    technologies: [...project.technologies],
  };
}
