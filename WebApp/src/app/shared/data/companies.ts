import { CompanyInfo } from '../components/company-profile/company-profile.component';

// Shared company configurations
export const COMPANIES = {
  corebts: {
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
  },

  nriNa: {
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
  },
} as const;

// Helper functions to get company configurations
export function getCompanyInfo(company: 'corebts' | 'nriNa'): CompanyInfo {
  return { ...COMPANIES[company] };
}
