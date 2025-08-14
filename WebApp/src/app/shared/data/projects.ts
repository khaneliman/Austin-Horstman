import { ProjectInfo } from '../components/company-profile/company-profile.component';
import { COMPANIES } from './companies';

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
    skyline: {
      name: 'Kroger Solutions',
      description:
        'Enterprise retail platform modernization and inventory management systems',
      icon: 'heroShoppingBag',
      color: 'from-purple-600 to-indigo-800',
      status: 'Production' as const,
      technologies: ['Angular', '.NET', 'Azure', 'SQL Server', 'NgRx'],
      route: '/projects/professional/skyline/kroger',
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

export function getKrogerProject(
  company: 'corebts' | 'skyline' | 'nriNa'
): ProjectInfo {
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
  company: 'corebts' | 'skyline' | 'nriNa'
): ProjectInfo {
  const project = SHARED_PROJECTS.kroger[company];
  return {
    ...project,
    route: 'kroger', // Relative route for child routes
    technologies: [...project.technologies],
  };
}

// Company project mappings - defines which projects exist for each company
export const COMPANY_PROJECTS = {
  'nri-na': [{ name: 'DoItBest Platform', route: 'doitbest' }],
  corebts: [
    { name: 'Kroger Solutions', route: 'kroger' },
    { name: 'DoItBest Platform', route: 'doitbest' },
  ],
  skyline: [
    { name: 'Renaissance Learning', route: 'renaissance-learning' },
    { name: 'Mile of Music', route: 'mile-of-music' },
    { name: 'JJ Keller', route: 'jj-keller' },
    { name: 'Express Scripts', route: 'express-scripts' },
    { name: 'ClearTrend', route: 'cleartrend' },
    { name: 'Network Health', route: 'network-health' },
  ],
  geeksquad: [{ name: 'Stat Tracker', route: 'stat-tracker' }],
  west: [
    { name: 'Database Tool', route: 'database-tool' },
    { name: 'IT Portal', route: 'it-portal' },
    { name: 'Quick Launch', route: 'quick-launch' },
  ],
} as const;

// Helper function to generate professional project grid data from centralized sources
export function generateProfessionalProjectsGrid() {
  return Object.entries(COMPANY_PROJECTS)
    .map(([companyKey, projects]) => {
      const company = COMPANIES[companyKey as keyof typeof COMPANIES];
      if (!company) return undefined;

      return {
        title: `${company.displayName} Projects`,
        description: company.description.split('.')[0], // First sentence
        company: company.displayName,
        route: company.projectsRoute,
        logo: company.logoSrc,
        color: company.gradientColor,
        projects: projects.map(project => ({
          name: project.name,
          route: `/projects/professional/${companyKey}/${project.route}`,
        })),
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== undefined);
}
