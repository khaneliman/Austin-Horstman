import { ProjectDetailConfig } from '../interfaces/project-detail.interface';

// Sample project configurations demonstrating the templating approach
export const PROJECT_CONFIGURATIONS: Record<string, ProjectDetailConfig> = {
  'renaissance-learning': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
    headerStyle: 'complex',
    headerIcon: 'heroBookOpen',
    primaryColor: 'blue',

    // Navigation
    backRoute: '/personal/resume/employment/skyline',
    backLabel: 'Back to Skyline',
    companyKey: 'skyline',
    hoverColor: 'blue',

    // Content
    title: 'Renaissance Learning Platform',
    description:
      'Comprehensive educational assessment and learning platform serving millions of students worldwide with personalized reading and math programs.',
    technologies: [
      { name: '.NET Core', color: 'purple' },
      { name: 'C#', color: 'blue' },
      { name: 'SQL Server', color: 'red' },
      { name: 'JavaScript', color: 'yellow' },
      { name: 'HTML/CSS', color: 'orange' },
    ],
    quickStats: [
      { label: 'Students Served', value: '10M+', icon: 'heroUserGroup' },
      { label: 'Schools', value: '35K+', icon: 'heroAcademicCap' },
      { label: 'Assessments', value: '1B+', icon: 'heroDocumentText' },
      { label: 'Countries', value: '90+', icon: 'heroGlobeAlt' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'Renaissance Learning is a comprehensive educational technology platform that provides personalized learning assessments and programs for students in grades K-12. The platform combines adaptive assessment technology with engaging practice activities to help educators make data-driven instructional decisions.',
      icon: 'heroBookOpen',
    },
    features: [
      {
        title: 'Adaptive Assessment Engine',
        description:
          'AI-powered assessment system that adjusts question difficulty based on student responses in real-time.',
        icon: 'heroBeaker',
      },
      {
        title: 'Personalized Learning Paths',
        description:
          "Customized learning experiences tailored to each student's reading level and interests.",
        icon: 'heroLightBulb',
      },
      {
        title: 'Comprehensive Reporting',
        description:
          'Detailed analytics and reporting tools for teachers, administrators, and parents.',
        icon: 'heroChartBar',
      },
      {
        title: 'Multi-Language Support',
        description:
          'Platform available in multiple languages to support diverse student populations.',
        icon: 'heroGlobeAlt',
      },
    ],
    technicalDetails: [
      {
        title: 'Technical Implementation',
        content:
          'Built on a robust .NET Core architecture with microservices handling different aspects of the platform including assessment delivery, scoring, reporting, and user management. The system processes millions of student responses daily with 99.9% uptime.',
        icon: 'heroCog6Tooth',
      },
    ],
    impact:
      'Renaissance Learning has helped millions of students improve their reading and math skills, with research showing significant academic gains in schools using the platform consistently.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  'quick-launch': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50',
    headerStyle: 'simple',
    headerIcon: 'heroRocketLaunch',
    primaryColor: 'orange',

    // Navigation
    backRoute: '/projects/professional/west',
    backLabel: 'Back to West Projects',
    companyKey: 'west',
    hoverColor: 'red',

    // Content
    title: 'OnContact Quick Launch',
    description:
      'A streamlined desktop application that provides instant access to OnContact CRM functionality, enabling rapid customer lookup and interaction management for support teams.',
    technologies: [
      { name: 'C#', color: 'purple' },
      { name: '.NET Framework', color: 'blue' },
      { name: 'WinForms', color: 'green' },
      { name: 'OnContact API', color: 'orange' },
    ],
    quickStats: [
      { label: 'Development Year', value: '2017', icon: 'heroClock' },
      { label: 'Team Adoption', value: '100%', icon: 'heroUser' },
      {
        label: 'Customer Lookup',
        value: 'Instant',
        icon: 'heroMagnifyingGlass',
      },
      { label: 'Application', value: 'Desktop', icon: 'heroComputerDesktop' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        "OnContact Quick Launch was a specialized desktop application designed to streamline customer interactions for West Corporation's support teams. The application provided instant access to OnContact CRM data through a clean, efficient interface. When support representatives received customer calls, they could quickly enter a phone number or customer identifier and immediately access comprehensive customer information, interaction history, and account details without navigating through the full OnContact web interface. The application significantly reduced call handling time and improved customer service quality by providing representatives with immediate access to critical customer data.",
      icon: 'heroRocketLaunch',
    },
    features: [
      {
        title: 'Instant Customer Search',
        description: 'Quick lookup by phone number, email, or customer ID',
        icon: 'heroMagnifyingGlass',
      },
      {
        title: 'Interaction History',
        description:
          'Complete timeline of customer interactions and communications',
        icon: 'heroClock',
      },
      {
        title: 'Customer Profiles',
        description: 'Comprehensive customer information and account details',
        icon: 'heroUser',
      },
      {
        title: 'Fast Performance',
        description: 'Optimized for speed with minimal resource usage',
        icon: 'heroBolt',
      },
      {
        title: 'OnContact Integration',
        description: 'Direct API integration with OnContact CRM system',
        icon: 'heroWifi',
      },
      {
        title: 'Secure Access',
        description: 'Authentication and secure data handling',
        icon: 'heroShieldCheck',
      },
    ],
    technicalDetails: [
      {
        title: 'Technical Implementation',
        content:
          'Built as a Windows Forms desktop application with RESTful API integration and asynchronous data loading. Key technologies include OnContact CRM API, JSON data processing, and HTTP client management.',
        icon: 'heroCog6Tooth',
        type: 'list',
        items: [
          'Windows Forms desktop application',
          'RESTful API integration',
          'Asynchronous data loading',
          'OnContact CRM API',
          'JSON data processing',
          'HTTP client management',
        ],
      },
    ],
    impact:
      'Dramatically improved customer service response times by providing instant access to customer information, reducing average call handling time and increasing customer satisfaction scores across the support team.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },
};

// Helper function to get project configuration
export function getProjectConfiguration(
  projectKey: string
): ProjectDetailConfig | null {
  return PROJECT_CONFIGURATIONS[projectKey] || null;
}
