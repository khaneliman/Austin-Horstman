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

  'it-portal': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50',
    headerStyle: 'simple',
    headerIcon: 'heroCheck',
    primaryColor: 'blue',

    // Navigation
    backRoute: '/projects/professional/west',
    backLabel: 'Back to West Projects',
    companyKey: 'west',
    hoverColor: 'red',

    // Content
    title: 'West IT Portal',
    description:
      'A comprehensive web portal that centralized all IT department tools and resources into a single, unified platform for streamlined daily operations.',
    technologies: [
      { name: 'ASP.NET MVC', color: 'blue' },
      { name: 'C#', color: 'purple' },
      { name: 'JavaScript', color: 'green' },
      { name: 'jQuery', color: 'orange' },
      { name: 'Bootstrap', color: 'indigo' },
    ],
    quickStats: [
      { label: 'Project Year', value: '2017', icon: 'heroClock' },
      { label: 'Development Time', value: '6mo', icon: 'heroBeaker' },
      { label: 'Internal Usage', value: '100%', icon: 'heroUser' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'The West IT Portal was a comprehensive ASP.NET MVC website designed to centralize all the sites and tools that our IT department needed to access on a daily basis. This project eliminated the need to bookmark dozens of different tools and provided a single point of access for all IT operations. I created web versions of my previous database searching and SSIS job searching tools using ASP.NET MVC, JavaScript, jQuery, and Bootstrap. The portal integrated seamlessly with existing systems while providing a modern, responsive interface. Additionally, I recreated one of our work request systems directly within the website, ensuring that IT staff could handle all their daily tasks without leaving the portal environment.',
      icon: 'heroRectangleStack',
    },
    features: [
      {
        title: 'Database Search Tool',
        description:
          'Web-based interface for searching and managing database instances',
        icon: 'heroCircleStack',
      },
      {
        title: 'SSIS Job Management',
        description: 'Monitor and manage SQL Server Integration Services jobs',
        icon: 'heroListBullet',
      },
      {
        title: 'Work Request System',
        description: 'Integrated ticketing system for internal IT requests',
        icon: 'heroTicket',
      },
      {
        title: 'Centralized Access',
        description: 'Single portal for all IT tools and resources',
        icon: 'heroLink',
      },
    ],
    impact:
      'The IT Portal significantly improved team efficiency by consolidating all essential tools into a single, accessible platform. This eliminated context switching and reduced the time spent navigating between different systems, allowing the IT team to focus on core responsibilities.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  'database-tool': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50',
    headerStyle: 'simple',
    headerIcon: 'heroCircleStack',
    primaryColor: 'green',

    // Navigation
    backRoute: '/projects/professional/west',
    backLabel: 'Back to West Projects',
    companyKey: 'west',
    hoverColor: 'red',

    // Content
    title: 'Database and SSIS Job Search',
    description:
      "A powerful desktop application providing searchable interfaces for database management and SSIS job monitoring across West Corporation's server infrastructure.",
    technologies: [
      { name: 'C#', color: 'purple' },
      { name: '.NET Framework', color: 'blue' },
      { name: 'WinForms', color: 'green' },
      { name: 'SQL Server', color: 'indigo' },
    ],
    quickStats: [
      { label: 'Development Year', value: '2016', icon: 'heroClock' },
      { label: 'Servers Supported', value: 'Multiple', icon: 'heroServer' },
      { label: 'Job Monitoring', value: 'Real-time', icon: 'heroBeaker' },
      { label: 'Application', value: 'Desktop', icon: 'heroComputerDesktop' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'This dual-purpose desktop application was designed to solve two critical IT management challenges at West Corporation. The first component provided a comprehensive searchable database listing across all company servers, offering detailed information about database versions, environments, and configurations. The second component enabled real-time monitoring and searching of SSIS (SQL Server Integration Services) jobs, providing essential insights into data processing workflows and system health.',
      icon: 'heroCircleStack',
    },
    features: [
      {
        title: 'Database Search',
        description:
          'Comprehensive searchable database listing across all West Corporation servers',
        icon: 'heroCircleStack',
      },
      {
        title: 'SSIS Job Monitoring',
        description:
          'Real-time monitoring and searching of SQL Server Integration Services jobs',
        icon: 'heroBeaker',
      },
      {
        title: 'Server Management',
        description:
          'Multi-server support with detailed configuration insights',
        icon: 'heroServer',
      },
      {
        title: 'Real-time Updates',
        description: 'Live monitoring of job statuses and database states',
        icon: 'heroBolt',
      },
    ],
    specialSections: [
      {
        title: 'Dual Functionality',
        content:
          'The application featured two distinct but complementary modules: Database Search provided comprehensive searchable database listings across all West Corporation servers with detailed information about database versions, environments, and configurations. SSIS Job Search enabled real-time monitoring and searching of SQL Server Integration Services jobs, providing essential insights into data processing workflows and system health.',
        icon: 'heroCog6Tooth',
        type: 'text',
      },
    ],
    impact:
      'Dramatically reduced the time IT staff spent locating databases and monitoring SSIS jobs from hours to minutes. The centralized search capabilities eliminated the need to manually check multiple servers, significantly improving operational efficiency and system reliability.',

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
