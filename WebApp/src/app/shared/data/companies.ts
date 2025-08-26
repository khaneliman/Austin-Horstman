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
  dateStart: string; // Format: 'YYYY-MM' or 'YYYY-MM-DD'
  dateEnd?: string; // Format: 'YYYY-MM' or 'YYYY-MM-DD', undefined means current
  department?: string;
  colorScheme: {
    theme: string; // 'green', 'blue', 'red', 'orange'
    primary: string;
    secondary: string;
    accent: string;
  };
  stats: {
    years: string;
    projects: { value: string; label: string };
    clients: { value: string; label: string };
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
    dateStart: '2025-04',
    department: 'Modern Business Unit',
    colorScheme: {
      theme: 'nri',
      primary: 'blue-500',
      secondary: 'indigo-600',
      accent: 'sky-600',
    },
    stats: {
      years: '7+',
      projects: { value: '0', label: 'Projects' },
      clients: { value: '0', label: 'Clients' },
    },
    description:
      "NRI-NA is a technology consulting company specializing in modern application development and digital transformation solutions. In 2025, Nomura Research Institute acquired Core BTS, expanding the company's global reach and enterprise capabilities. As a Senior Software Engineer in the Modern Business Unit, I continue working with diverse clients to build cutting-edge applications using the latest technologies and development practices, focusing on cloud-native architectures and scalable enterprise solutions. My total experience spans 7+ years from Skyline Technologies through Core BTS to NRI-NA.",
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
      { name: 'Tax Document Analysis', route: 'tax-document-analysis' },
      { name: 'MuleSoft Migrator', route: 'mulesoft-migrator' },
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
    dateStart: '2021-01',
    dateEnd: '2025-04',
    department: 'Modern Business Unit',
    colorScheme: {
      theme: 'green',
      primary: 'emerald-600',
      secondary: 'teal-500',
      accent: 'green-500',
    },
    stats: {
      years: '4.3',
      projects: { value: '0', label: 'Projects' },
      clients: { value: '0', label: 'Clients' },
    },
    description:
      'Core BTS is a technology consulting company specializing in modern application development and digital transformation solutions. I joined as a Software Engineer in January 2021 and was promoted to Senior Software Engineer in January 2022. Over my 4+ year tenure in the Modern Business Unit, I worked with diverse clients to build cutting-edge applications using the latest technologies and development practices, focusing on delivering scalable, maintainable solutions that drive business value and innovation.',
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
    dateStart: '2017-10',
    dateEnd: '2021-01',
    department: 'Development Team',
    colorScheme: {
      theme: 'blue',
      primary: 'blue-800',
      secondary: 'sky-400',
      accent: 'cyan-500',
    },
    stats: {
      years: '3.3',
      projects: { value: '0', label: 'Projects' },
      clients: { value: '0', label: 'Clients' },
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
    position: 'Software Engineer',
    dateStart: '2015-05',
    dateEnd: '2017-10',
    department: 'IT Department',
    colorScheme: {
      theme: 'red',
      primary: 'red-600',
      secondary: 'orange-600',
      accent: 'yellow-600',
    },
    stats: {
      years: '2.4',
      projects: { value: '0', label: 'Projects' },
      clients: { value: '0', label: 'Tools Built' },
    },
    description:
      'West Corporation is a global provider of technology-enabled services and solutions. As a Software Engineer in the IT Department, I developed internal tools and automation solutions to improve operational efficiency, including database management systems and employee portal applications using modern web technologies.',
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
    position: 'Advanced Repair Agent',
    dateStart: '2013-08',
    dateEnd: '2015-07',
    department: 'Geek Squad Services',
    colorScheme: {
      theme: 'orange',
      primary: 'orange-800',
      secondary: 'gray-900',
      accent: 'orange-600',
    },
    stats: {
      years: '2',
      projects: { value: '0', label: 'Projects' },
      clients: { value: '500+', label: 'Customers Served' },
    },
    description:
      'Best Buy Geek Squad provides technology support and services to customers. As an Advanced Repair Agent, I provided technical support and developed internal tools to improve customer service efficiency, including stat tracking systems and operational dashboards to help agents manage their performance and customer interactions. This was my first professional role in technology, building foundational experience in customer service and software development.',
    projectsRoute: '/projects/professional/geeksquad',
    employmentRoute: '/personal/resume/employment/bestbuy',
    projects: [{ name: 'Stat Tracker', route: 'stat-tracker' }],
  },
} as const;

// Helper functions for accessing company data
export function getCompanyById(id: keyof typeof COMPANIES): CompanyInfo {
  return { ...COMPANIES[id] };
}

// Calculate dynamic metrics for a company
export function getCompanyWithCalculatedStats(id: keyof typeof COMPANIES): CompanyInfo {
  const company = { ...COMPANIES[id] } as CompanyInfo;
  const projectCount = company.projects.length;

  // Update stats with calculated values
  company.stats.projects = {
    value: projectCount.toString(),
    label: 'Projects',
  };

  company.stats.clients = {
    value: company.id === 'bestbuy' ? '500+' : projectCount.toString(),
    label: company.id === 'bestbuy' ? 'Customers Served' : company.id === 'west' ? 'Tools Built' : 'Clients',
  };

  return company;
}

export function getAllCompanies(): CompanyInfo[] {
  return Object.keys(COMPANIES).map((key) => getCompanyWithCalculatedStats(key as keyof typeof COMPANIES));
}

export function getAllCompaniesRaw(): CompanyInfo[] {
  return Object.values(COMPANIES).map((company) => ({ ...company }));
}

export function getCompanyByName(name: string): CompanyInfo | undefined {
  return Object.values(COMPANIES).find(
    (company) =>
      company.name.toLowerCase() === name.toLowerCase() || company.displayName.toLowerCase() === name.toLowerCase()
  );
}

export function getCompanyEmploymentRoute(companyNameOrId: string): string {
  const company = COMPANIES[companyNameOrId as keyof typeof COMPANIES] || getCompanyByName(companyNameOrId);

  if (!company) {
    throw new Error(`Company not found: ${companyNameOrId}`);
  }

  return company.employmentRoute;
}

export function getCompanyProjectsRoute(companyNameOrId: string): string {
  const company = COMPANIES[companyNameOrId as keyof typeof COMPANIES] || getCompanyByName(companyNameOrId);

  if (!company) {
    throw new Error(`Company not found: ${companyNameOrId}`);
  }

  return company.projectsRoute;
}

// Derive card status based on career progression
export function getResumeCardStatus(
  companyId: keyof typeof COMPANIES
): 'success' | 'primary' | 'warning' | 'danger' | 'info' {
  // Career progression order (most recent to oldest)
  const careerOrder: (keyof typeof COMPANIES)[] = ['nri-na', 'corebts', 'skyline', 'west', 'bestbuy'];
  const index = careerOrder.indexOf(companyId);

  if (index === 0) return 'success'; // Current role
  if (index === 1) return 'primary'; // Recent role
  if (index <= 3) return 'primary'; // Mid-career roles
  return 'warning'; // Early career role
}

// For professional projects grid compatibility
export function getCompaniesForProfessionalGrid() {
  return getAllCompanies().map((company) => ({
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
