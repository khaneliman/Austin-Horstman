import { ProjectInfo } from '../components/company-profile/company-profile.component';
import { COMPANIES } from './companies';

// Shared project configurations that can be reused across different company contexts
export const SHARED_PROJECTS = {
  doitbest: {
    name: 'DoItBest',
    description:
      'Backend services and infrastructure modernization with mainframe decommissioning',
    icon: 'heroCog6Tooth',
    color: 'from-indigo-600 to-blue-800',
    status: 'Production' as const,
    technologies: ['C#', 'Java', 'Kafka', 'Oracle', 'Azure', 'Kubernetes'],
  },

  kroger: {
    corebts: {
      name: 'Kroger',
      description:
        'NgRx state management and Cold Fusion modernization for enterprise retail platform',
      icon: 'heroShoppingBag',
      color: 'from-green-600 to-emerald-800',
      status: 'Production' as const,
      technologies: ['Angular', 'NgRx', '.NET', 'Azure', 'Cold Fusion Legacy'],
      route: '/projects/professional/corebts/kroger',
    },
    skyline: {
      name: 'Kroger',
      description:
        'Enterprise retail platform modernization and inventory management systems',
      icon: 'heroShoppingBag',
      color: 'from-purple-600 to-indigo-800',
      status: 'Production' as const,
      technologies: ['Angular', '.NET', 'Azure', 'SQL Server', 'NgRx'],
      route: '/projects/professional/skyline/kroger',
    },
    nriNa: {
      name: 'Kroger',
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

// Detailed project metadata - maps project routes to full project information
const PROJECT_DETAILS = {
  doitbest: {
    description:
      'Backend services and infrastructure modernization with mainframe decommissioning',
    icon: 'heroCog6Tooth',
    color: 'from-indigo-600 to-blue-800',
    status: 'Production' as const,
    technologies: ['C#', 'Java', 'Kafka', 'Oracle', 'Azure', 'Kubernetes'],
  },
  kroger: {
    corebts: {
      description:
        'NgRx state management and Cold Fusion modernization for enterprise retail platform',
      icon: 'heroShoppingBag',
      color: 'from-green-600 to-emerald-800',
      status: 'Production' as const,
      technologies: ['Angular', 'NgRx', '.NET', 'Azure', 'Cold Fusion Legacy'],
    },
    skyline: {
      description:
        'Enterprise retail platform modernization and inventory management systems',
      icon: 'heroShoppingBag',
      color: 'from-purple-600 to-indigo-800',
      status: 'Production' as const,
      technologies: ['Angular', '.NET', 'Azure', 'SQL Server', 'NgRx'],
    },
  },
  'renaissance-learning': {
    description: 'Educational reporting platform',
    icon: 'heroBookOpen',
    color: 'from-blue-600 to-indigo-700',
    status: 'Production' as const,
    technologies: ['Angular', 'GraphQL', 'TypeScript', 'Reports'],
  },
  'mile-of-music': {
    description: 'Mobile event platform',
    icon: 'heroMusicalNote',
    color: 'from-indigo-600 to-purple-700',
    status: 'Production' as const,
    technologies: ['Xamarin', 'Mobile', 'C#', 'iOS/Android'],
  },
  'jj-keller': {
    description: 'iOS compliance application',
    icon: 'heroDevicePhoneMobile',
    color: 'from-purple-600 to-red-700',
    status: 'Production' as const,
    technologies: ['iOS', 'Native', 'Swift', 'Compliance'],
  },
  'express-scripts': {
    description: 'Pharmaceutical rebates platform',
    icon: 'heroBeaker',
    color: 'from-teal-600 to-green-700',
    status: 'Production' as const,
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Rebates'],
  },
  cleartrend: {
    description: 'Healthcare analytics platform',
    icon: 'heroChartBarSquare',
    color: 'from-green-600 to-teal-700',
    status: 'Production' as const,
    technologies: ['Angular', 'C#', 'SQL Server', 'Analytics'],
  },
  'network-health': {
    description: 'Health insurance management system',
    icon: 'heroShieldCheck',
    color: 'from-blue-600 to-green-700',
    status: 'Production' as const,
    technologies: ['Angular', '.NET', 'SQL Server', 'Healthcare'],
  },
  'stat-tracker': {
    description: 'Employee performance tracking system',
    icon: 'heroChartBarSquare',
    color: 'from-blue-600 to-yellow-700',
    status: 'Production' as const,
    technologies: ['JavaScript', 'HTML/CSS', 'Local Storage'],
  },
  'database-tool': {
    description: 'Internal database management application',
    icon: 'heroCircleStack',
    color: 'from-red-600 to-orange-700',
    status: 'Production' as const,
    technologies: ['C#', 'WinForms', 'SQL Server'],
  },
  'it-portal': {
    description: 'Employee information and tools portal',
    icon: 'heroGlobeAlt',
    color: 'from-orange-600 to-red-700',
    status: 'Production' as const,
    technologies: ['ASP.NET', 'C#', 'SQL Server'],
  },
  'quick-launch': {
    description: 'Application launcher and productivity tool',
    icon: 'heroRocketLaunch',
    color: 'from-yellow-600 to-orange-700',
    status: 'Production' as const,
    technologies: ['C#', 'WinForms', 'Windows API'],
  },
  'ai-resource-staffing': {
    description:
      'AI-powered conversational platform with integrated tools for skills-based resource discovery',
    icon: 'heroBeaker',
    color: 'from-blue-600 to-sky-700',
    status: 'Production' as const,
    technologies: [
      'React',
      'Remix',
      'TypeScript',
      'Azure OpenAI',
      'SharePoint API',
      'Microsoft Graph',
    ],
  },
  'tax-document-analysis': {
    description:
      'AI-powered tax document relevance analysis and business impact assessment tool',
    icon: 'heroDocumentText',
    color: 'from-purple-600 to-indigo-700',
    status: 'Production' as const,
    technologies: [
      'React',
      'Remix',
      'TypeScript',
      'Azure OpenAI',
      'PDF Processing',
      'Zod Validation',
    ],
  },
  'mulesoft-migrator': {
    description:
      'Enterprise migration analysis platform for converting MuleSoft projects to .NET applications',
    icon: 'heroArrowPathRoundedSquare',
    color: 'from-emerald-600 to-teal-700',
    status: 'Production' as const,
    technologies: [
      'React Router 7',
      'TypeScript',
      'LangGraph',
      'Claude 4 Sonnet',
      'OpenAI o3 & o4-mini',
      'PostgreSQL',
    ],
  },
} as const;

// Helper function to generate ProjectInfo objects from centralized COMPANIES data
export function getProjectsForCompany(
  companyKey: keyof typeof COMPANIES
): ProjectInfo[] {
  const company = COMPANIES[companyKey];
  return company.projects.map(project => {
    // Special case for Best Buy which uses geeksquad route path
    const routeCompanyKey = companyKey === 'bestbuy' ? 'geeksquad' : companyKey;

    if (project.route === 'kroger') {
      const krogerDetails =
        PROJECT_DETAILS.kroger[companyKey as 'corebts' | 'skyline'];
      return {
        name: project.name,
        route: `/projects/professional/${routeCompanyKey}/${project.route}`,
        description: krogerDetails.description,
        icon: krogerDetails.icon,
        color: krogerDetails.color,
        status: krogerDetails.status,
        technologies: [...krogerDetails.technologies],
      };
    }

    const details =
      PROJECT_DETAILS[
        project.route as keyof Omit<typeof PROJECT_DETAILS, 'kroger'>
      ];
    return {
      name: project.name,
      route: `/projects/professional/${routeCompanyKey}/${project.route}`,
      description: details.description,
      icon: details.icon,
      color: details.color,
      status: details.status,
      technologies: [...details.technologies],
    };
  });
}

// Helper function for employment components - generates ProjectInfo with absolute routes
export function getProjectsForEmployment(
  companyKey: keyof typeof COMPANIES
): ProjectInfo[] {
  const company = COMPANIES[companyKey];
  return company.projects.map(project => {
    // Special case for Best Buy which uses geeksquad route path
    const routeCompanyKey = companyKey === 'bestbuy' ? 'geeksquad' : companyKey;

    if (project.route === 'kroger') {
      const krogerDetails =
        PROJECT_DETAILS.kroger[companyKey as 'corebts' | 'skyline'];
      return {
        name: project.name,
        route: `/projects/professional/${routeCompanyKey}/${project.route}`,
        description: krogerDetails.description,
        icon: krogerDetails.icon,
        color: krogerDetails.color,
        status: krogerDetails.status,
        technologies: [...krogerDetails.technologies],
      };
    }

    const details =
      PROJECT_DETAILS[
        project.route as keyof Omit<typeof PROJECT_DETAILS, 'kroger'>
      ];
    return {
      name: project.name,
      route: `/projects/professional/${routeCompanyKey}/${project.route}`,
      description: details.description,
      icon: details.icon,
      color: details.color,
      status: details.status,
      technologies: [...details.technologies],
    };
  });
}

// Helper function to generate professional project grid data from centralized sources
export function generateProfessionalProjectsGrid() {
  return Object.entries(COMPANIES)
    .map(([companyKey, company]) => {
      if (!company.projects?.length) return undefined;

      return {
        title: `${company.displayName} Projects`,
        description: company.description.split('.')[0], // First sentence
        company: company.displayName,
        route: company.projectsRoute,
        logo: company.logoSrc,
        theme: company.colorScheme.theme,
        logoBackground: company.logoBackground,
        projects: company.projects.map(project => ({
          name: project.name,
          route: `/projects/professional/${companyKey}/${project.route}`,
        })),
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== undefined);
}
