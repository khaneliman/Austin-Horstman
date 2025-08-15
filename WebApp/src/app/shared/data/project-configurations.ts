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

  'stat-tracker': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50',
    headerStyle: 'simple',
    headerIcon: 'heroGlobeAlt',
    primaryColor: 'yellow',

    // Navigation
    backRoute: '/projects/professional/geeksquad',
    backLabel: 'Back to Geek Squad Projects',
    companyKey: 'bestbuy',
    hoverColor: 'blue',

    // Content
    title: 'Geek Squad Stat Tracker',
    description:
      'A comprehensive desktop application for tracking sales statistics, managing employees, and analyzing performance data at a Best Buy Geek Squad precinct.',
    technologies: [
      { name: 'C#', color: 'purple' },
      { name: '.NET Framework', color: 'blue' },
      { name: 'WPF', color: 'indigo' },
      { name: 'SQL Server', color: 'green' },
    ],
    quickStats: [
      { label: 'Project Year', value: '2015', icon: 'heroCalendarDays' },
      {
        label: 'Application Type',
        value: 'Desktop',
        icon: 'heroComputerDesktop',
      },
      { label: 'Status', value: 'Deployed', icon: 'heroCheck' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'The Geek Squad Stat Tracker was a comprehensive desktop application I developed to manage and track statistics at our Best Buy Geek Squad precinct. This application revolutionized how we handled employee performance data, sales tracking, and reporting. The system managed employees, their positions, and the various services we offered at the precinct. It provided our manager with the ability to import corporate budget reports directly into the database and generate detailed reports for individual employee sales or aggregate sales data for specific time periods. Built using C# and WPF with SQL Server as the database management system, the application included a complete database creation script with the source code, making it easily deployable across different environments.',
      icon: 'heroPresentationChartLine',
    },
    features: [
      {
        title: 'Employee Management',
        description: 'Track staff members, positions, and service assignments',
        icon: 'heroUsers',
      },
      {
        title: 'Budget Import',
        description: 'Import corporate budget reports directly into the system',
        icon: 'heroArrowUpTray',
      },
      {
        title: 'Sales Reporting',
        description: 'Generate individual and aggregate sales reports',
        icon: 'heroChartBar',
      },
      {
        title: 'Time-based Analytics',
        description: 'Track performance by day, week, or month',
        icon: 'heroCalendarDays',
      },
      {
        title: 'Service Management',
        description: 'Configure and track different service offerings',
        icon: 'heroCog6Tooth',
      },
      {
        title: 'Export Functionality',
        description: 'Export reports and data for further analysis',
        icon: 'heroArrowDownTray',
      },
    ],
    technicalDetails: [
      {
        title: 'Technical Implementation',
        content:
          'Built as a comprehensive C# WPF desktop application with SQL Server database management. The application features a complete XAML user interface using .NET Framework architecture.',
        icon: 'heroCodeBracket',
        type: 'list',
        items: [
          'C# WPF Desktop Application',
          '.NET Framework',
          'XAML User Interface',
          'SQL Server Database',
          'Entity Framework',
          'Database Creation Scripts',
        ],
      },
    ],
    impact:
      'Dramatically improved sales tracking accuracy and manager visibility into team performance. Reduced report generation time from hours to minutes while successfully deploying in production environment.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  // Core BTS Projects
  'kroger-solutions': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-green-50 via-gray-50 to-emerald-50',
    headerStyle: 'complex',
    headerIcon: 'heroShoppingBag',
    primaryColor: 'green',

    // Navigation
    backRoute: '/projects/professional/corebts',
    backLabel: 'Back to Core BTS Projects',
    companyKey: 'corebts',
    hoverColor: 'green',

    // Content
    title: 'Kroger',
    description:
      'Enterprise retail platform modernization and inventory management system development',
    technologies: [
      { name: 'Angular 15+', color: 'red' },
      { name: '.NET Core 6', color: 'blue' },
      { name: 'Azure Cloud', color: 'purple' },
      { name: 'SQL Server', color: 'green' },
      { name: 'Entity Framework', color: 'orange' },
      { name: 'NgRx', color: 'indigo' },
      { name: 'Cold Fusion Legacy', color: 'yellow' },
      { name: 'Fabric.js', color: 'pink' },
      { name: 'Azure Blob Storage', color: 'cyan' },
    ],
    quickStats: [
      { label: 'Frontend', value: 'Angular', icon: 'heroCodeBracket' },
      { label: 'Backend', value: '.NET', icon: 'heroServer' },
      { label: 'Cloud', value: 'Azure', icon: 'heroCloud' },
      { label: 'Database', value: 'SQL Server', icon: 'heroCircleStack' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        "The Kroger project involved comprehensive modernization of enterprise retail platform systems, focusing on inventory management, supply chain optimization, and customer experience enhancement. Working directly with Kroger's technology teams, we developed scalable solutions that handle millions of transactions and inventory items across thousands of retail locations. This multi-year engagement required deep integration with existing Kroger systems while implementing modern architectural patterns and cloud-native technologies. The solution encompasses real-time inventory tracking, automated reordering systems, and comprehensive analytics dashboards for supply chain managers. The project delivered measurable improvements in inventory accuracy, reduced operational costs, and enhanced customer satisfaction through better product availability and streamlined operations.",
      icon: 'heroListBullet',
    },
    features: [
      {
        title: 'Real-time Inventory',
        description:
          'Live tracking of inventory levels across all store locations with automated alerts and restocking recommendations.',
        icon: 'heroChartBarSquare',
      },
      {
        title: 'Supply Chain Integration',
        description:
          'Seamless integration with supplier systems for automated ordering and delivery scheduling.',
        icon: 'heroUsers',
      },
      {
        title: 'Analytics Dashboard',
        description:
          'Comprehensive reporting and analytics for demand forecasting and operational optimization.',
        icon: 'heroChartBarSquare',
      },
      {
        title: 'Mobile Access',
        description:
          'Mobile-responsive interface for store managers and warehouse personnel to access system remotely.',
        icon: 'heroShoppingBag',
      },
    ],
    technicalDetails: [
      {
        title: 'Technical Implementation',
        content:
          'Architected and implemented NgRx state management with multiple Angular applications for Cold Fusion app modernization projects. This comprehensive approach involved migrating legacy Cold Fusion applications to modern Angular architecture while maintaining data consistency and user experience. Architected and implemented Fabric.js PDF rendering and annotation document management through an Angular application utilizing Azure blob storage backend. This solution provided real-time document collaboration capabilities, allowing multiple users to annotate and mark up PDF documents with synchronized changes across the platform. The NgRx implementation provided centralized state management across multiple Angular applications, enabling seamless data sharing and synchronization. This was particularly crucial when modernizing Cold Fusion applications that had tightly coupled data layers and business logic. Key technical achievements included implementing reactive data flows, optimizing state management patterns for large-scale retail operations, and creating a migration pathway that allowed gradual transition from legacy Cold Fusion systems to modern Angular applications without disrupting business operations.',
        icon: 'heroCodeBracket',
        type: 'text',
      },
    ],
    specialSections: [
      {
        title: 'Technical Highlights',
        content: 'Key technical achievements across the modernization project',
        icon: 'heroCog6Tooth',
        type: 'list',
        items: [
          'NgRx State Management: Implemented centralized state management with NgRx for multiple Angular applications, ensuring consistent data flow and application state.',
          'Legacy Modernization: Successfully modernized Cold Fusion applications to Angular architecture while maintaining business continuity and data integrity.',
          'PDF Document Management: Built comprehensive PDF rendering and annotation system using Fabric.js with Azure blob storage for real-time document collaboration.',
          'Azure Integration: Seamless integration with Azure blob storage for secure document storage and retrieval with real-time synchronization.',
        ],
      },
    ],
    impact:
      'The project delivered measurable improvements in inventory accuracy, reduced operational costs, and enhanced customer satisfaction through better product availability and streamlined operations across thousands of retail locations.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  'doitbest-platform': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50',
    headerStyle: 'complex',
    headerIcon: 'heroCog6Tooth',
    primaryColor: 'blue',

    // Navigation
    backRoute: '/projects/professional/corebts',
    backLabel: 'Back to Core BTS Projects',
    companyKey: 'corebts',
    hoverColor: 'blue',

    // Content
    title: 'Do It Best',
    description:
      'Hardware retailer backend services and infrastructure modernization project',
    technologies: [
      { name: 'C# .NET', color: 'red' },
      { name: 'Java Spring Boot', color: 'blue' },
      { name: 'Oracle Database', color: 'purple' },
      { name: 'Azure Cloud', color: 'green' },
      { name: 'Kubernetes', color: 'indigo' },
      { name: 'Apache Kafka', color: 'yellow' },
      { name: 'Azure Bicep', color: 'teal' },
      { name: 'Helm Charts', color: 'rose' },
      { name: 'JWT Authentication', color: 'emerald' },
    ],
    quickStats: [
      { label: 'Backend', value: 'C# / Java', icon: 'heroServer' },
      { label: 'Event Streaming', value: 'Kafka', icon: 'heroBolt' },
      { label: 'Cloud', value: 'Azure', icon: 'heroCloud' },
      { label: 'Database', value: 'Oracle', icon: 'heroCircleStack' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        "The Do It Best project involved developing a comprehensive backend services infrastructure and modernization system for one of the largest hardware retailers in North America. This multi-faceted platform serves both B2B and B2C customers, handling complex inventory management, supplier integrations, and multi-location fulfillment. Working closely with DoItBest's business stakeholders and technical teams, we modernized their entire digital infrastructure while maintaining seamless operations across thousands of retail locations and distribution centers. The solution encompasses backend services, infrastructure modernization, inventory management, and supply chain optimization. The platform successfully increased system reliability, improved infrastructure scalability, and streamlined operations for both corporate locations and independent dealers within the DoItBest network through modern cloud-native architecture and event-driven systems.",
      icon: 'heroListBullet',
    },
    features: [
      {
        title: 'Multi-Channel Commerce',
        description:
          'Backend services supporting B2B dealer portals and B2C e-commerce with integrated inventory and pricing management.',
        icon: 'heroShoppingBag',
      },
      {
        title: 'Advanced Infrastructure',
        description:
          'Scalable cloud infrastructure with Kubernetes orchestration and automated deployment pipelines for enterprise workloads.',
        icon: 'heroArchiveBox',
      },
      {
        title: 'Event-Driven Architecture',
        description:
          'Kafka-based event streaming for real-time data processing and seamless mainframe system decommissioning.',
        icon: 'heroCircleStack',
      },
      {
        title: 'Security & Authentication',
        description:
          'Enterprise-grade JWT authentication with role-based access controls across all platform services and applications.',
        icon: 'heroShieldCheck',
      },
    ],
    technicalDetails: [
      {
        title: 'Technical Implementation & Leadership',
        content:
          'Led cross-functional collaboration with business stakeholders, legacy application maintainers, and architects to create and prioritize product backlog, ensuring delivery against tight project deadlines. Drove team-wide agile process improvements, acting as both technical leader and scrum advisor to increase delivery speed and reduce development blockers. Facilitated continuous team productivity by communicating developer needs with leadership and proactively working to remove blockers. Mentored junior developers through comprehensive code reviews, regular 1-on-1 meetings, and detailed technical concept explanations to accelerate team capability growth. Architected a secure authentication and authorization model using JWT and role-based access controls, which was adopted across multiple C# and Java REST API applications throughout the organization. This standardized security approach ensured consistent access management and simplified maintenance across the platform ecosystem. Architected and deployed cloud infrastructure using Bicep and Kubernetes Helm charts on Azure, ensuring scalability and resilience for mission-critical workloads. The infrastructure-as-code approach enabled consistent deployments and simplified environment management across development, staging, and production. Designed and implemented event-driven architecture components using Kafka stream processors to support the phased decommissioning of mainframe systems in a high-impact modernization effort. This approach enabled real-time data processing while maintaining system reliability during the critical legacy-to-modern migration phase.',
        icon: 'heroCodeBracket',
        type: 'text',
      },
    ],
    specialSections: [
      {
        title: 'Technical Leadership Highlights',
        content:
          'Leadership and technical achievements across the modernization project',
        icon: 'heroUserGroup',
        type: 'list',
        items: [
          'Technical Leadership: Led agile process improvements and mentored junior developers while facilitating cross-functional stakeholder collaboration.',
          'Security Architecture: Designed JWT-based authentication with role-based access controls adopted across multiple C# and Java REST API applications.',
          'Cloud Infrastructure: Architected scalable Azure infrastructure using Bicep and Kubernetes Helm charts for mission-critical workloads.',
          'Modernization Architecture: Implemented event-driven architecture with Kafka stream processors for mainframe decommissioning modernization.',
        ],
      },
    ],
    impact:
      'The platform successfully increased system reliability, improved infrastructure scalability, and streamlined operations for both corporate locations and independent dealers within the DoItBest network through modern cloud-native architecture and event-driven systems.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  // NRI-NA Projects
  'ai-resource-staffing': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50',
    headerStyle: 'complex',
    headerIcon: 'heroBeaker',
    primaryColor: 'blue',

    // Navigation
    backRoute: '/projects/professional/nri-na',
    backLabel: 'Back to NRI-NA Projects',
    companyKey: 'nri-na',
    hoverColor: 'blue',

    // Content
    title: 'AI Resource Staffing Tool',
    description:
      'Intelligent resource allocation system using AI to match skills, availability, and project requirements',
    technologies: [
      { name: 'Microsoft Graph API', color: 'blue' },
      { name: 'GraphQL', color: 'indigo' },
      { name: 'OpenAir API', color: 'sky' },
      { name: 'AI/ML', color: 'purple' },
      { name: 'TypeScript', color: 'yellow' },
      { name: 'Node.js', color: 'green' },
      { name: 'Azure Functions', color: 'pink' },
      { name: 'REST APIs', color: 'orange' },
    ],
    quickStats: [
      { label: 'Efficiency Gain', value: '75%', icon: 'heroClock' },
      { label: 'Match Accuracy', value: '90%', icon: 'heroChartBarSquare' },
      { label: 'Resource Utilization', value: '+40%', icon: 'heroUserGroup' },
      { label: 'Platform', value: 'Web', icon: 'heroComputerDesktop' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'Developed an AI-powered resource staffing tool to help directors and managers efficiently allocate resources to projects for upcoming client work. The system intelligently matches available resources with project requirements based on skills, proficiency levels, and availability using Microsoft Graph API and OpenAir integrations.',
      icon: 'heroWrench',
    },
    features: [
      {
        title: 'Microsoft Graph Integration',
        description:
          'Real-time data from user profiles, calendar availability, and organizational structure',
        icon: 'heroCloudArrowUp',
      },
      {
        title: 'OpenAir API Integration',
        description:
          'Billable time tracking, project allocations, and upcoming assignments',
        icon: 'heroCircleStack',
      },
      {
        title: 'Skills Database Matching',
        description:
          'Proficiency scoring and AI-powered resource recommendations',
        icon: 'heroBeaker',
      },
      {
        title: 'Availability Analysis',
        description:
          'Conflict detection and capacity calculations with time zone support',
        icon: 'heroClock',
      },
    ],
    technicalDetails: [
      {
        title: 'Data Integration & Processing',
        content:
          'Built a comprehensive data integration layer that connects multiple enterprise systems to provide real-time resource availability and skills information. Microsoft Graph API queries user profiles, calendar availability, and organizational structure. OpenAir API fetches billable time commitments, project allocations, and upcoming assignments. Skills Database maintains proficiency scores and certifications for technical and business skills.',
        icon: 'heroCog6Tooth',
      },
      {
        title: 'AI-Powered Matching Algorithm',
        content:
          'Developed intelligent resource matching using machine learning techniques to analyze skill proficiency matching, availability analysis, historical performance, and cost optimization. The system compares required skills with resource capabilities using weighted scoring, calculates resource capacity considering current commitments and time zones, factors in past project success and client feedback ratings, and balances skill requirements with budget constraints and billing rates.',
        icon: 'heroSparkles',
      },
    ],
    impact:
      'Achieved 75% reduction in staffing decision time, 90% accuracy in skill-resource matching, 40% improvement in resource utilization, and enhanced client satisfaction through better resource fit.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  'mulesoft-migrator': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50',
    headerStyle: 'complex',
    headerIcon: 'heroArrowPathRoundedSquare',
    primaryColor: 'emerald',

    // Navigation
    backRoute: '/projects/professional/nri-na',
    backLabel: 'Back to NRI-NA Projects',
    companyKey: 'nri-na',
    hoverColor: 'blue',

    // Content
    title: 'MuleSoft Migrator Platform',
    description:
      'Comprehensive enterprise migration analysis platform for converting MuleSoft legacy systems to modern .NET applications',
    technologies: [
      { name: 'React Router 7', color: 'emerald' },
      { name: 'TypeScript', color: 'teal' },
      { name: 'LangGraph', color: 'cyan' },
      { name: 'Claude 4 Sonnet', color: 'blue' },
      { name: 'OpenAI o3 & o4-mini', color: 'violet' },
      { name: 'PostgreSQL', color: 'indigo' },
      { name: 'Tailwind CSS', color: 'purple' },
      { name: 'Node.js', color: 'green' },
      { name: 'Zod Validation', color: 'yellow' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        "Developed for Secura Insurance's mainframe modernization initiative, this comprehensive migration analysis platform helps enterprises systematically convert legacy MuleSoft infrastructure to modern .NET applications. The tool uses AI-powered analysis to understand existing MuleSoft projects and generates detailed migration strategies and .NET implementation guidance.",
      icon: 'heroComputerDesktop',
    },
    features: [
      {
        title: 'Automated MuleSoft Analysis',
        description:
          'AI-powered analysis of MuleSoft projects with dependency mapping',
        icon: 'heroDocumentArrowUp',
      },
      {
        title: 'Migration Planning',
        description: '.NET architecture recommendations and code generation',
        icon: 'heroArrowPathRoundedSquare',
      },
      {
        title: 'Legacy System Inventory',
        description:
          'Comprehensive endpoint inventory and modernization strategies',
        icon: 'heroRectangleStack',
      },
      {
        title: 'Progress Tracking',
        description: 'Interactive migration tracking and progress monitoring',
        icon: 'heroChartBarSquare',
      },
    ],
    technicalDetails: [
      {
        title: 'AI-Powered Analysis Engine',
        content:
          'Built with LangGraph workflows using Claude 4 Sonnet and OpenAI o3/o4-mini models for sophisticated MuleSoft project understanding. Features automated analysis of MuleSoft XML configurations, flows, and DataWeave transformations. Identifies global systems, properties, and inter-project relationships. Generates AI-powered summaries of business logic, error handling, and data transformations.',
        icon: 'heroCog6Tooth',
      },
      {
        title: 'Migration Strategy Generation',
        content:
          'Comprehensive .NET migration planning with architectural guidance and implementation patterns. Maps MuleSoft HTTP listeners to .NET Core controllers with proper routing. Converts database connectors to repository patterns using Dapper. Transforms flows and sub-flows into service classes with dependency injection. Migrates properties to appsettings.json and secure configuration patterns.',
        icon: 'heroArrowPathRoundedSquare',
      },
      {
        title: 'Full-Stack Platform',
        content:
          'React Router 7 application with PostgreSQL backend for comprehensive migration management. Interactive dashboard for project analysis, migration tracking, and code generation. Structured storage of MuleSoft artifacts, flows, properties, and migration progress. Direct repository ingestion and source code linking for development teams.',
        icon: 'heroComputerDesktop',
      },
    ],
    specialSections: [
      {
        title: 'Migration Workflow',
        content:
          'The platform follows a three-phase approach: Analysis phase with automated ingestion and AI-powered analysis of existing MuleSoft projects, Planning phase that generates comprehensive .NET architecture recommendations and migration strategies, and Implementation phase with guided .NET code generation and migration execution with progress tracking.',
        icon: 'heroBeaker',
        type: 'text',
      },
    ],
    impact:
      'Accelerated enterprise modernization timeline, reduced migration risk through comprehensive analysis, standardized .NET architectural patterns, and enhanced maintainability and scalability.',

    // Layout Options
    showQuickStats: false,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'single',
  },

  'tax-document-analysis': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50',
    headerStyle: 'complex',
    headerIcon: 'heroDocumentText',
    primaryColor: 'purple',

    // Navigation
    backRoute: '/projects/professional/nri-na',
    backLabel: 'Back to NRI-NA Projects',
    companyKey: 'nri-na',
    hoverColor: 'blue',

    // Content
    title: 'Tax Document Analysis System',
    description:
      'LLM-powered system for automated tax document ingestion and business impact analysis',
    technologies: [
      { name: 'React', color: 'purple' },
      { name: 'Remix', color: 'indigo' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Azure OpenAI', color: 'violet' },
      { name: 'PDF Processing', color: 'fuchsia' },
      { name: 'Zod Validation', color: 'cyan' },
      { name: 'Tailwind CSS', color: 'emerald' },
      { name: 'Node.js', color: 'amber' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'Built a React/Remix web application that helps NRI-NA tax analysts efficiently evaluate tax document relevance and generate standardized business impact summaries. The tool uses Azure OpenAI to analyze tax authority documents and determine their applicability to NRI-NA operations with confidence scoring and structured analysis.',
      icon: 'heroSparkles',
    },
    features: [
      {
        title: 'PDF Document Processing',
        description: 'Structured text extraction from tax authority PDFs',
        icon: 'heroDocumentText',
      },
      {
        title: 'Azure OpenAI Integration',
        description: 'AI-powered relevance analysis with confidence scoring',
        icon: 'heroSparkles',
      },
      {
        title: 'Zod Schema Validation',
        description: 'Structured AI responses with type safety',
        icon: 'heroShieldCheck',
      },
      {
        title: 'NRI-NA Profile Matching',
        description: 'Operational profile matching across jurisdictions',
        icon: 'heroScale',
      },
    ],
    technicalDetails: [
      {
        title: 'Document Processing & Analysis',
        content:
          'Built with React/Remix architecture using modern web technologies for efficient tax document processing. Uses pdf-parse and pdfjs-dist libraries to extract structured text content from tax authority PDFs. Designed to run locally with direct access to folder-based document collections. Leverages Azure OpenAI GPT models for intelligent document relevance analysis.',
        icon: 'heroCog6Tooth',
      },
      {
        title: 'AI-Powered Relevance Analysis',
        content:
          "Implements structured AI analysis using Zod schema validation for consistent, reliable results. Analyzes each document against NRI-NA's operational footprint including office locations, business activities, and corporate structure. Provides HIGH/MEDIUM/LOW confidence levels with detailed reasoning chains. Uses Zod schemas to ensure consistent AI response format with type safety. Creates standardized business-focused summaries with citations to source documents.",
        icon: 'heroScale',
      },
      {
        title: 'Tax Analyst Workflow',
        content:
          'Designed for tax professionals to efficiently process multiple documents with comprehensive analysis. Processes entire folders of tax documents from various state and federal authorities. Uses detailed company profile to evaluate relevance across geographic jurisdictions and business activities. Generates detailed impact summaries and overall tax impact reports for management review.',
        icon: 'heroDocumentText',
      },
    ],
    impact:
      'Streamlined tax analyst workflow processes, standardized impact summary generation, enabled multi-jurisdictional tax authority analysis, and improved accuracy in relevance determination.',

    // Layout Options
    showQuickStats: false,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'single',
  },

  cleartrend: {
    // Visual/Branding
    backgroundGradient: 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50',
    headerStyle: 'simple',
    headerIcon: 'heroChartBar',
    primaryColor: 'teal',

    // Navigation
    backRoute: '/projects/professional/skyline',
    backLabel: 'Back to Skyline Projects',
    companyKey: 'skyline',
    hoverColor: 'blue',

    // Content
    title: 'ClearTrend Healthcare Analytics',
    description:
      'Advanced healthcare analytics and reporting platform providing comprehensive insights into clinical data, patient outcomes, and operational metrics for healthcare organizations.',
    technologies: [
      { name: 'ASP.NET', color: 'blue' },
      { name: 'C#', color: 'purple' },
      { name: 'JavaScript', color: 'green' },
      { name: 'SQL Server', color: 'indigo' },
    ],
    quickStats: [
      { label: 'Development Year', value: '2014', icon: 'heroClock' },
      { label: 'Industry Focus', value: 'Healthcare', icon: 'heroHeart' },
      { label: 'Core Function', value: 'Analytics', icon: 'heroChartBar' },
      { label: 'Scale', value: 'Enterprise', icon: 'heroBuildingOffice2' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        "ClearTrend was a sophisticated healthcare analytics platform designed to help healthcare organizations gain deep insights into their clinical and operational data. The system processed complex healthcare datasets to generate meaningful reports and visualizations. Working as part of the Skyline Technologies consulting team, I contributed to the development of key features including data visualization components, reporting engines, and user interface improvements that enhanced the platform's usability and performance. The platform served healthcare executives, clinical directors, and operational managers by providing them with actionable insights to improve patient care and optimize organizational efficiency.",
      icon: 'heroBuildingOffice2',
    },
    features: [
      {
        title: 'Advanced Analytics',
        description: 'Complex data analysis and trend identification',
        icon: 'heroChartBar',
      },
      {
        title: 'Custom Reports',
        description: 'Flexible reporting engine with customizable outputs',
        icon: 'heroDocumentText',
      },
      {
        title: 'Data Visualization',
        description: 'Interactive charts and graphs for data exploration',
        icon: 'heroChartPie',
      },
      {
        title: 'Multi-User System',
        description: 'Role-based access and collaborative features',
        icon: 'heroUsers',
      },
      {
        title: 'HIPAA Compliance',
        description: 'Healthcare data security and privacy protection',
        icon: 'heroShieldCheck',
      },
      {
        title: 'Performance Optimization',
        description: 'Efficient data processing and query optimization',
        icon: 'heroCog6Tooth',
      },
    ],
    technicalDetails: [
      {
        title: 'Technical Implementation',
        content:
          'Built with ASP.NET Web Forms & MVC, JavaScript & jQuery, and Chart.js for data visualization on the frontend. Backend utilized C# business logic, SQL Server database, and stored procedures & views for data processing.',
        icon: 'heroCodeBracket',
        type: 'list',
        items: [
          'ASP.NET Web Forms & MVC',
          'JavaScript & jQuery',
          'Chart.js for Data Visualization',
          'C# Business Logic',
          'SQL Server Database',
          'Stored Procedures & Views',
        ],
      },
    ],
    impact:
      'Enhanced healthcare decision-making capabilities by providing organizations with powerful analytics tools, resulting in improved patient outcomes and operational efficiency through data-driven insights and streamlined reporting processes.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  'express-scripts': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50',
    headerStyle: 'complex',
    headerIcon: 'heroHeart',
    primaryColor: 'red',

    // Navigation
    backRoute: '/projects/professional/skyline',
    backLabel: 'Back to Skyline Projects',
    companyKey: 'skyline',
    hoverColor: 'blue',

    // Content
    title: 'Express Scripts Pharmacy Platform',
    description:
      'Full-stack pharmaceutical rebates management system with Angular frontend and .NET Core APIs',
    technologies: [
      { name: 'Angular', color: 'red' },
      { name: '.NET Core', color: 'orange' },
      { name: 'C#', color: 'yellow' },
      { name: 'SQL Server', color: 'green' },
      { name: 'SSIS', color: 'blue' },
      { name: 'TypeScript', color: 'indigo' },
      { name: 'HTML/CSS', color: 'purple' },
      { name: 'RESTful APIs', color: 'pink' },
      { name: 'DACPAC', color: 'teal' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'Developed a comprehensive pharmaceutical rebates management system for Express Scripts, one of the largest pharmacy benefit management companies. The platform handled complex rebate calculations, contract management, and financial reporting for pharmaceutical partnerships. Built modern Angular websites with .NET Core APIs, implemented SSIS ETL processes, and established CI/CD workflows with database migration processes.',
      icon: 'heroLightBulb',
    },
    features: [
      {
        title: 'Complex Rebate Calculations',
        description:
          'Automated pharmaceutical rebate processing and calculations',
        icon: 'heroChartPie',
      },
      {
        title: 'Contract Management',
        description: 'Comprehensive contract tracking and management system',
        icon: 'heroDocumentText',
      },
      {
        title: 'Financial Reporting',
        description: 'Advanced analytics dashboards and financial reports',
        icon: 'heroChartBar',
      },
      {
        title: 'ETL Automation',
        description: 'SSIS-based data processing workflows',
        icon: 'heroCircleStack',
      },
      {
        title: 'CI/CD Pipeline',
        description: 'Automated deployment with DACPAC database migrations',
        icon: 'heroTruck',
      },
      {
        title: 'Approval Workflows',
        description: 'Multi-tier approval processes for business operations',
        icon: 'heroCheck',
      },
    ],
    specialSections: [
      {
        title: 'Development Lifecycle',
        content:
          'Established a complete development workflow including custom DACPAC database migration processes for source control and deployment automation. This significantly improved development team productivity and reduced deployment risks through consistent, repeatable processes.',
        icon: 'heroCog8Tooth',
        type: 'text',
      },
    ],
    impact:
      'Streamlined pharmaceutical rebate operations for one of the largest pharmacy benefit management companies, automating complex financial calculations and improving operational efficiency through modern development practices.',

    // Layout Options
    showQuickStats: false,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  'jj-keller': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-green-50 via-teal-50 to-blue-50',
    headerStyle: 'complex',
    headerIcon: 'heroArchiveBox',
    primaryColor: 'green',

    // Navigation
    backRoute: '/projects/professional/skyline',
    backLabel: 'Back to Skyline Projects',
    companyKey: 'skyline',
    hoverColor: 'blue',

    // Content
    title: 'J.J. Keller Compliance Platform',
    description:
      'Native iOS application for regulatory compliance management and safety documentation',
    technologies: [
      { name: 'iOS Native', color: 'green' },
      { name: 'Swift', color: 'teal' },
      { name: 'Objective-C', color: 'blue' },
      { name: 'Core Data', color: 'purple' },
      { name: 'RESTful APIs', color: 'indigo' },
      { name: 'GPS/Location Services', color: 'yellow' },
      { name: 'Photo Capture', color: 'orange' },
      { name: 'JSON', color: 'pink' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'Developed a comprehensive native iOS application for J.J. Keller & Associates, a leading provider of regulatory compliance and safety solutions. The application enabled field workers and safety professionals to access compliance documents, conduct inspections, and maintain regulatory records directly from their mobile devices with offline capability for remote work environments.',
      icon: 'heroLightBulb',
    },
    features: [
      {
        title: 'Digital Inspections',
        description: 'Digital inspection forms with photo attachments',
        icon: 'heroCheck',
      },
      {
        title: 'Offline Capability',
        description: 'Offline document access and synchronization',
        icon: 'heroCloudArrowDown',
      },
      {
        title: 'Compliance Tracking',
        description: 'Regulatory compliance tracking and alerts',
        icon: 'heroShieldCheck',
      },
      {
        title: 'Digital Signatures',
        description: 'Digital signature capture for approvals',
        icon: 'heroDocumentText',
      },
      {
        title: 'Location Services',
        description: 'GPS location tagging for field inspections',
        icon: 'heroMapPin',
      },
      {
        title: 'Background Sync',
        description: 'Background sync with conflict resolution',
        icon: 'heroArrowPath',
      },
    ],
    quickStats: [
      { label: 'Impact', value: 'Streamlined', icon: 'heroCheck' },
      { label: 'Access', value: 'Mobile', icon: 'heroDevicePhoneMobile' },
      { label: 'Capability', value: 'Offline', icon: 'heroCloudArrowDown' },
    ],
    impact:
      'The application significantly improved field worker productivity by digitizing compliance processes and enabling offline functionality. Users could complete inspections and access critical safety documents even in remote locations without internet connectivity, with automatic synchronization when connectivity was restored.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  'mile-of-music': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-purple-50 via-pink-50 to-red-50',
    headerStyle: 'complex',
    headerIcon: 'heroSpeakerWave',
    primaryColor: 'purple',

    // Navigation
    backRoute: '/projects/professional/skyline',
    backLabel: 'Back to Skyline Projects',
    companyKey: 'skyline',
    hoverColor: 'blue',

    // Content
    title: 'Mile of Music Festival',
    description:
      "Mobile application for Appleton's premier music festival featuring live performance schedules and interactive maps",
    technologies: [
      { name: 'Xamarin', color: 'purple' },
      { name: 'C#', color: 'pink' },
      { name: 'SQLite', color: 'red' },
      { name: 'RESTful APIs', color: 'indigo' },
      { name: 'GPS Integration', color: 'green' },
      { name: 'Push Notifications', color: 'yellow' },
      { name: 'JSON', color: 'orange' },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'Developed a comprehensive mobile application for the Mile of Music festival in Appleton, Wisconsin. The app provided festival-goers with real-time performance schedules, venue information, interactive maps, and artist details to enhance their festival experience. Built using Xamarin for cross-platform mobile development to ensure consistent performance on both iOS and Android devices.',
      icon: 'heroLightBulb',
    },
    features: [
      {
        title: 'Live Schedules',
        description: 'Live performance schedules with real-time updates',
        icon: 'heroClock',
      },
      {
        title: 'Interactive Maps',
        description: 'Interactive festival maps with venue locations',
        icon: 'heroMapPin',
      },
      {
        title: 'Artist Profiles',
        description: 'Artist profiles with photos and bio information',
        icon: 'heroUser',
      },
      {
        title: 'Personal Schedule',
        description: 'Personal schedule builder and favorites',
        icon: 'heroHeart',
      },
      {
        title: 'Push Notifications',
        description: 'Push notifications for schedule changes',
        icon: 'heroBell',
      },
      {
        title: 'Offline Functionality',
        description: 'SQLite local database for offline functionality',
        icon: 'heroCloudArrowDown',
      },
    ],
    quickStats: [
      { label: 'Experience', value: 'Enhanced', icon: 'heroStar' },
      {
        label: 'Platform',
        value: 'Cross-Platform',
        icon: 'heroDevicePhoneMobile',
      },
      { label: 'Updates', value: 'Real-Time', icon: 'heroBolt' },
    ],
    impact:
      'The application successfully enhanced the festival experience by providing attendees with easy access to schedules, maps, and artist information. The cross-platform approach ensured broad device compatibility while maintaining native performance and user experience standards.',

    // Layout Options
    showQuickStats: true,
    showTechnicalHighlights: true,
    showImpactSection: true,
    gridColumns: 'double',
  },

  'network-health': {
    // Visual/Branding
    backgroundGradient:
      'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50',
    headerStyle: 'simple',
    headerIcon: 'heroHeart',
    primaryColor: 'emerald',

    // Navigation
    backRoute: '/projects/professional/skyline',
    backLabel: 'Back to Skyline Projects',
    companyKey: 'skyline',
    hoverColor: 'blue',

    // Content
    title: 'Network Health Plan',
    description:
      'Comprehensive healthcare management platform providing member services, claims processing, and administrative tools for a Wisconsin-based health insurance organization.',
    technologies: [
      { name: 'ASP.NET', color: 'blue' },
      { name: 'C#', color: 'purple' },
      { name: 'JavaScript', color: 'green' },
      { name: 'SQL Server', color: 'indigo' },
    ],
    quickStats: [
      { label: 'Project Timeline', value: '2014-15', icon: 'heroClock' },
      { label: 'Healthcare Focus', value: 'Insurance', icon: 'heroHeart' },
      { label: 'Geographic Scope', value: 'Wisconsin', icon: 'heroMapPin' },
      {
        label: 'System Scale',
        value: 'Enterprise',
        icon: 'heroBuildingOffice2',
      },
    ],
    overview: {
      title: 'Project Overview',
      content:
        'Network Health Plan was a comprehensive healthcare management platform serving as the digital backbone for a Wisconsin-based health insurance organization. The system managed member enrollment, benefits administration, claims processing, and provider network management. As part of the Skyline Technologies development team, I contributed to various aspects of the platform including member portal enhancements, administrative dashboard improvements, and backend system optimizations that improved overall system performance and user experience. The platform served thousands of members across Wisconsin, providing them with essential healthcare services while supporting internal staff with powerful administrative tools for managing complex healthcare operations.',
      icon: 'heroHeart',
    },
    features: [
      {
        title: 'Member Portal',
        description:
          'Self-service portal for members to manage benefits and claims',
        icon: 'heroUser',
      },
      {
        title: 'Claims Processing',
        description: 'Automated and manual claims processing workflows',
        icon: 'heroClipboardDocumentList',
      },
      {
        title: 'Provider Network',
        description: 'Healthcare provider directory and network management',
        icon: 'heroUserGroup',
      },
      {
        title: 'Admin Dashboard',
        description: 'Comprehensive administrative tools and reporting',
        icon: 'heroCog6Tooth',
      },
      {
        title: 'Member Enrollment',
        description: 'Online enrollment and benefits selection system',
        icon: 'heroIdentification',
      },
      {
        title: 'HIPAA Compliance',
        description: 'Healthcare data security and regulatory compliance',
        icon: 'heroShieldCheck',
      },
    ],
    technicalDetails: [
      {
        title: 'Technical Implementation',
        content:
          'Built with ASP.NET Web Forms for frontend, JavaScript & jQuery for interactivity, and CSS & Bootstrap for styling. Backend infrastructure included C# business logic, SQL Server database, and Integration Services (SSIS) for data processing.',
        icon: 'heroCodeBracket',
        type: 'list',
        items: [
          'ASP.NET Web Forms',
          'JavaScript & jQuery',
          'CSS & Bootstrap',
          'C# Business Logic',
          'SQL Server Database',
          'Integration Services (SSIS)',
        ],
      },
    ],
    specialSections: [
      {
        title: 'Healthcare Domain Expertise',
        content:
          'The project required deep understanding of complex healthcare workflows and processes, insurance operations including claims processing and member management, and HIPAA and healthcare regulatory requirements.',
        icon: 'heroBuildingOffice2',
        type: 'text',
      },
    ],
    impact:
      'Improved healthcare access and operational efficiency for Network Health Plan members and staff, streamlining insurance processes and enhancing member experience through robust digital platforms and administrative tools.',

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
