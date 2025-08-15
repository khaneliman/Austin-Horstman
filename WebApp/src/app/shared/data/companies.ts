// Removed circular import - CompanyInfo is now defined here

// Company information interface
export interface CompanyInfo {
  id: string;
  displayName: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  logoBackground: 'white' | 'black' | 'dark'; // Logo background styling
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
  };
  stats: {
    years: string;
    metric1: { value: string; label: string };
    metric2: { value: string; label: string };
  };
  description: string;
  achievements?: readonly string[]; // Optional list of key responsibilities/achievements
  projectsRoute: string;
  employmentRoute: string;
  projects: readonly { name: string; route: string }[]; // Projects available for this company
}

// Comprehensive company configurations
export const COMPANIES = {
  'nri-na': {
    id: 'nri-na',
    displayName: 'NRI-NA',
    name: 'NRI-NA',
    logoSrc: 'assets/images/nri-logo.png',
    logoAlt: 'NRI-NA logo',
    logoBackground: 'white',
    website: 'https://www.nri.com/en/worldwide/americas',
    location: 'Appleton, WI',
    position: 'Senior Software Engineer',
    dateRange: 'Jan 2022 - Current',
    department: 'Modern Business Unit',
    colorScheme: {
      theme: 'nri',
      primary: 'blue-500',
      secondary: 'indigo-600',
      accent: 'sky-600',
    },
    stats: {
      years: '3+',
      metric1: { value: '15+', label: 'Projects' },
      metric2: { value: '20+', label: 'Clients' },
    },
    description:
      "NRI-NA is a technology consulting company specializing in modern application development and digital transformation solutions. In 2022, Nomura Research Institute acquired Core BTS, expanding the company's global reach and enterprise capabilities. As a Senior Software Engineer in the Modern Business Unit, I work with diverse clients to build cutting-edge applications using the latest technologies and development practices, focusing on cloud-native architectures and scalable enterprise solutions.",
    achievements: [
      'Drove team-wide agile process improvements as technical leader and scrum advisor, significantly increasing delivery speed and reducing development blockers',
      'Successfully managed complex stakeholder relationships with business users, legacy system maintainers, and architects to create and prioritize backlogs under tight deadlines',
      'Established comprehensive mentoring program for junior developers through code reviews, 1-on-1 meetings, and technical concept explanation',
      'Architected enterprise-wide secure authentication and authorization model using JWT and role-based access controls, adopted across multiple Angular and Java REST API applications',
      'Designed and deployed scalable cloud infrastructure using Bicep infrastructure-as-code and Kubernetes Helm charts on Azure, ensuring high availability for mission-critical workloads',
      'Led the design and implementation of event-driven architecture using Kafka stream processors to support phased decommissioning of legacy mainframe systems in a high-impact modernization initiative',
      'Streamlined development workflows and communication channels between development teams and leadership, maintaining high productivity during complex system transitions',
      'Established architectural patterns and security frameworks that became organizational standards for modern application development',
    ],
    projectsRoute: '/projects/professional/nri-na',
    employmentRoute: '/personal/resume/employment/nri-na',
    projects: [
      { name: 'Do It Best', route: 'doitbest' },
      { name: 'AI Resource Staffing', route: 'ai-resource-staffing' },
    ],
  },

  corebts: {
    id: 'corebts',
    displayName: 'Core BTS',
    name: 'Core BTS',
    logoSrc: 'assets/images/corebts.png',
    logoAlt: 'Core BTS logo',
    logoBackground: 'black',
    website: 'https://www.corebts.com',
    location: 'Appleton, WI',
    position: 'Software Engineer → Senior Software Engineer',
    dateRange: 'Jan 2021 - Jan 2022',
    department: 'Modern Business Unit',
    colorScheme: {
      theme: 'green',
      primary: 'emerald-600',
      secondary: 'teal-500',
      accent: 'green-500',
    },
    stats: {
      years: '1',
      metric1: { value: '5+', label: 'Clients' },
      metric2: { value: '8+', label: 'Projects' },
    },
    description:
      'Core BTS is a technology consulting company specializing in modern application development and digital transformation solutions. I joined as a Software Engineer in January 2021 and was promoted to Senior Software Engineer during my tenure. In the Modern Business Unit, I worked with diverse clients to build cutting-edge applications using the latest technologies and development practices, focusing on delivering scalable, maintainable solutions that drive business value and innovation.',
    achievements: [
      'Successfully architected and implemented NgRx state management across multiple Angular applications, modernizing Cold Fusion legacy systems and improving application performance and maintainability',
      'Designed and built a comprehensive PDF rendering and annotation system using Fabric.js and Angular, integrated with Azure Blob Storage backend for scalable document management',
      'Implemented enterprise-grade state management patterns that became the standard for subsequent Angular applications across the organization',
      'Delivered seamless Azure integration for document storage and management, enabling scalable and secure file handling for client applications',
    ],
    projectsRoute: '/projects/professional/corebts',
    employmentRoute: '/personal/resume/employment/corebts',
    projects: [
      { name: 'Kroger', route: 'kroger' },
      { name: 'Do It Best', route: 'doitbest' },
    ],
  },

  skyline: {
    id: 'skyline',
    displayName: 'Skyline Technologies',
    name: 'Skyline Technologies',
    logoSrc: './assets/images/skyline-technologies.png',
    logoAlt: 'Skyline Technologies logo',
    logoBackground: 'white',
    website: 'https://www.skylinetechnologies.com',
    location: 'Appleton, WI',
    position: 'Software Engineer',
    dateRange: 'Jul 2019 - Apr 2021',
    department: 'Development Team',
    colorScheme: {
      theme: 'blue',
      primary: 'blue-800',
      secondary: 'sky-400',
      accent: 'cyan-500',
    },
    stats: {
      years: '2',
      metric1: { value: '8+', label: 'Projects' },
      metric2: { value: '15+', label: 'Clients' },
    },
    description:
      'Skyline Technologies is a consulting company providing custom software development and technology solutions across multiple industries. As a Software Engineer, I worked on diverse client projects ranging from healthcare applications to retail platforms, developing full-stack solutions with modern frameworks and implementing best practices for scalable, maintainable code.',
    projectsRoute: '/projects/professional/skyline',
    employmentRoute: '/personal/resume/employment/skyline',
    projects: [
      { name: 'Renaissance Learning', route: 'renaissance-learning' },
      { name: 'Mile of Music', route: 'mile-of-music' },
      { name: 'JJ Keller', route: 'jj-keller' },
      { name: 'Express Scripts', route: 'express-scripts' },
      { name: 'ClearTrend', route: 'cleartrend' },
      { name: 'Network Health', route: 'network-health' },
    ],
  },

  west: {
    id: 'west',
    displayName: 'West Corporation',
    name: 'West Corporation',
    logoSrc: './assets/images/west.jpg',
    logoAlt: 'West Corporation logo',
    logoBackground: 'white',
    website: 'https://www.west.com',
    location: 'Omaha, NE',
    position: 'Software Engineer Intern',
    dateRange: 'May 2018 - Aug 2018',
    department: 'IT Department',
    colorScheme: {
      theme: 'red',
      primary: 'red-600',
      secondary: 'orange-600',
      accent: 'yellow-600',
    },
    stats: {
      years: '0.3',
      metric1: { value: '3', label: 'Projects' },
      metric2: { value: '5+', label: 'Tools Built' },
    },
    description:
      'West Corporation is a global provider of technology-enabled services and solutions. As a Software Engineer Intern in the IT Department, I developed internal tools and automation solutions to improve operational efficiency, including database management systems and employee portal applications using modern web technologies.',
    projectsRoute: '/projects/professional/west',
    employmentRoute: '/personal/resume/employment/west',
    projects: [
      { name: 'Database Tool', route: 'database-tool' },
      { name: 'IT Portal', route: 'it-portal' },
      { name: 'Quick Launch', route: 'quick-launch' },
    ],
  },

  bestbuy: {
    id: 'bestbuy',
    displayName: 'Best Buy Geek Squad',
    name: 'Best Buy Geek Squad',
    logoSrc: './assets/images/geeksquad.jpg',
    logoAlt: 'Best Buy Geek Squad logo',
    logoBackground: 'dark',
    website: 'https://www.bestbuy.com/site/geek-squad',
    location: 'Omaha, NE',
    position: 'Consultation Agent',
    dateRange: 'Oct 2017 - May 2018',
    department: 'Geek Squad Services',
    colorScheme: {
      theme: 'orange',
      primary: 'orange-500',
      secondary: 'gray-900',
      accent: 'orange-600',
    },
    stats: {
      years: '0.7',
      metric1: { value: '2', label: 'Projects' },
      metric2: { value: '100+', label: 'Customers Served' },
    },
    description:
      'Best Buy Geek Squad provides technology support and services to customers. As a Consultation Agent, I provided technical support and developed internal tools to improve customer service efficiency, including stat tracking systems and operational dashboards to help agents manage their performance and customer interactions.',
    projectsRoute: '/projects/professional/geeksquad',
    employmentRoute: '/personal/resume/employment/bestbuy',
    projects: [{ name: 'Stat Tracker', route: 'stat-tracker' }],
  },
} as const;

// Helper functions for accessing company data
export function getCompanyById(id: keyof typeof COMPANIES): CompanyInfo {
  return { ...COMPANIES[id] };
}

export function getAllCompanies(): CompanyInfo[] {
  return Object.values(COMPANIES).map(company => ({ ...company }));
}

export function getCompanyByName(name: string): CompanyInfo | undefined {
  return Object.values(COMPANIES).find(
    company =>
      company.name.toLowerCase() === name.toLowerCase() ||
      company.displayName.toLowerCase() === name.toLowerCase()
  );
}

export function getCompanyEmploymentRoute(companyNameOrId: string): string {
  const company =
    COMPANIES[companyNameOrId as keyof typeof COMPANIES] ||
    getCompanyByName(companyNameOrId);

  if (!company) {
    throw new Error(`Company not found: ${companyNameOrId}`);
  }

  return company.employmentRoute;
}

export function getCompanyProjectsRoute(companyNameOrId: string): string {
  const company =
    COMPANIES[companyNameOrId as keyof typeof COMPANIES] ||
    getCompanyByName(companyNameOrId);

  if (!company) {
    throw new Error(`Company not found: ${companyNameOrId}`);
  }

  return company.projectsRoute;
}

// For professional projects grid compatibility
export function getCompaniesForProfessionalGrid() {
  return getAllCompanies().map(company => ({
    title: `${company.displayName} Projects`,
    description: company.description.split('.')[0], // First sentence for brevity
    company: company.displayName,
    route: company.projectsRoute,
    logo: company.logoSrc,
    theme: company.colorScheme.theme,
    logoBackground: company.logoBackground,
    projects: [], // Will be populated by project data separately
  }));
}
