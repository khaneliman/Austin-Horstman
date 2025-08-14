import { CompanyInfo } from '../components/company-profile/company-profile.component';

// Extended company information for routing and projects grid
export interface ExtendedCompanyInfo extends CompanyInfo {
  id: string;
  displayName: string;
  projectsRoute: string;
  employmentRoute: string;
  gradientColor: string; // For professional projects cards
}

// Comprehensive company configurations
export const COMPANIES = {
  'nri-na': {
    id: 'nri-na',
    displayName: 'NRI-NA',
    name: 'NRI-NA',
    logoSrc: 'assets/images/nri-logo.png',
    logoAlt: 'NRI-NA logo',
    website: 'https://www.nri.com/en/worldwide/americas',
    location: 'Appleton, WI',
    position: 'Senior Software Engineer',
    dateRange: 'Jan 2022 - Current',
    department: 'Modern Business Unit',
    colorScheme: {
      theme: 'blue',
      primary: 'blue-500',
      secondary: 'indigo-600',
      accent: 'sky-600',
      gradientFrom: 'from-blue-900',
      gradientTo: 'to-indigo-900',
      gradientVia: 'via-blue-800',
    },
    stats: {
      years: '3+',
      metric1: { value: '15+', label: 'Projects' },
      metric2: { value: '20+', label: 'Clients' },
    },
    description:
      "NRI-NA is a technology consulting company specializing in modern application development and digital transformation solutions. In 2022, Nomura Research Institute acquired Core BTS, expanding the company's global reach and enterprise capabilities. As a Senior Software Engineer in the Modern Business Unit, I work with diverse clients to build cutting-edge applications using the latest technologies and development practices, focusing on cloud-native architectures and scalable enterprise solutions.",
    projectsRoute: '/projects/professional/nri-na',
    employmentRoute: '/personal/resume/employment/nri-na',
    gradientColor: 'from-blue-600 to-indigo-600',
  },

  corebts: {
    id: 'corebts',
    displayName: 'Core BTS',
    name: 'Core BTS',
    logoSrc: 'assets/images/corebts.png',
    logoAlt: 'Core BTS logo',
    website: 'https://www.corebts.com',
    location: 'Appleton, WI',
    position: 'Software Engineer → Senior Software Engineer',
    dateRange: 'Jan 2021 - Jan 2022',
    department: 'Modern Business Unit',
    colorScheme: {
      theme: 'green',
      primary: 'green-500',
      secondary: 'emerald-600',
      accent: 'lime-600',
      gradientFrom: 'from-green-900',
      gradientTo: 'to-emerald-900',
      gradientVia: 'via-green-800',
    },
    stats: {
      years: '1',
      metric1: { value: '5+', label: 'Clients' },
      metric2: { value: '8+', label: 'Projects' },
    },
    description:
      'Core BTS is a technology consulting company specializing in modern application development and digital transformation solutions. I joined as a Software Engineer in January 2021 and was promoted to Senior Software Engineer during my tenure. In the Modern Business Unit, I worked with diverse clients to build cutting-edge applications using the latest technologies and development practices, focusing on delivering scalable, maintainable solutions that drive business value and innovation.',
    projectsRoute: '/projects/professional/corebts',
    employmentRoute: '/personal/resume/employment/corebts',
    gradientColor: 'from-gray-800 to-green-700',
  },

  skyline: {
    id: 'skyline',
    displayName: 'Skyline Technologies',
    name: 'Skyline Technologies',
    logoSrc: './assets/images/skyline-technologies.png',
    logoAlt: 'Skyline Technologies logo',
    website: 'https://www.skylinetechnologies.com',
    location: 'Appleton, WI',
    position: 'Software Engineer',
    dateRange: 'Jul 2019 - Apr 2021',
    department: 'Development Team',
    colorScheme: {
      theme: 'purple',
      primary: 'purple-600',
      secondary: 'blue-600',
      accent: 'indigo-600',
      gradientFrom: 'from-purple-900',
      gradientTo: 'to-blue-900',
      gradientVia: 'via-indigo-800',
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
    gradientColor: 'from-blue-600 to-purple-600',
  },

  west: {
    id: 'west',
    displayName: 'West Corporation',
    name: 'West Corporation',
    logoSrc: './assets/images/west.jpg',
    logoAlt: 'West Corporation logo',
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
      gradientFrom: 'from-red-900',
      gradientTo: 'to-orange-900',
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
    gradientColor: 'from-red-600 to-orange-600',
  },

  bestbuy: {
    id: 'bestbuy',
    displayName: 'Best Buy Geek Squad',
    name: 'Best Buy Geek Squad',
    logoSrc: './assets/images/geeksquad.jpg',
    logoAlt: 'Best Buy Geek Squad logo',
    website: 'https://www.bestbuy.com/site/geek-squad',
    location: 'Omaha, NE',
    position: 'Consultation Agent',
    dateRange: 'Oct 2017 - May 2018',
    department: 'Geek Squad Services',
    colorScheme: {
      theme: 'blue',
      primary: 'blue-600',
      secondary: 'yellow-500',
      accent: 'blue-800',
      gradientFrom: 'from-blue-900',
      gradientTo: 'to-blue-700',
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
    gradientColor: 'from-blue-600 to-yellow-600',
  },
} as const;

// Helper functions for accessing company data
export function getCompanyById(
  id: keyof typeof COMPANIES
): ExtendedCompanyInfo {
  return { ...COMPANIES[id] };
}

export function getAllCompanies(): ExtendedCompanyInfo[] {
  return Object.values(COMPANIES).map(company => ({ ...company }));
}

export function getCompanyByName(
  name: string
): ExtendedCompanyInfo | undefined {
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
    color: company.gradientColor,
    projects: [], // Will be populated by project data separately
  }));
}
