import { describe, it, expect } from 'bun:test';
import {
  TechnologyTag,
  QuickStat,
  Feature,
  ContentSection,
  ProjectDetailConfig,
} from './project-detail.interface';

describe('Project Detail Interfaces', () => {
  describe('TechnologyTag Interface', () => {
    it('should validate TechnologyTag structure', () => {
      const validTag: TechnologyTag = {
        name: 'Angular',
        color: 'red',
      };

      expect(typeof validTag.name).toBe('string');
      expect(typeof validTag.color).toBe('string');
      expect(validTag.name.length).toBeGreaterThan(0);
      expect(validTag.color.length).toBeGreaterThan(0);
    });

    it('should handle different technology names and colors', () => {
      const technologies: TechnologyTag[] = [
        { name: 'Angular 20+', color: 'red' },
        { name: 'TypeScript', color: 'blue' },
        { name: '.NET Core 6', color: 'purple' },
        { name: 'C#', color: 'green' },
        { name: 'Azure Cloud', color: 'cyan' },
      ];

      technologies.forEach(tech => {
        expect(tech.name).toBeDefined();
        expect(tech.color).toBeDefined();
        expect(typeof tech.name).toBe('string');
        expect(typeof tech.color).toBe('string');
      });
    });

    it('should handle special characters in technology names', () => {
      const specialTechs: TechnologyTag[] = [
        { name: 'C++', color: 'blue' },
        { name: '.NET', color: 'purple' },
        { name: 'Node.js', color: 'green' },
        { name: 'Vue.js 3', color: 'emerald' },
      ];

      specialTechs.forEach(tech => {
        // Should have either dots, plus signs, or other special characters
        const hasSpecialChars =
          tech.name.includes('.') ||
          tech.name.includes('+') ||
          tech.name.includes('#');
        expect(hasSpecialChars || tech.name.length > 2).toBe(true);
        expect(tech.name.length).toBeGreaterThan(1);
      });
    });
  });

  describe('QuickStat Interface', () => {
    it('should validate QuickStat structure', () => {
      const validStat: QuickStat = {
        label: 'Development Time',
        value: '6 months',
        icon: 'heroClock',
      };

      expect(typeof validStat.label).toBe('string');
      expect(typeof validStat.value).toBe('string');
      expect(typeof validStat.icon).toBe('string');
    });

    it('should handle different stat types', () => {
      const stats: QuickStat[] = [
        { label: 'Users Served', value: '10M+', icon: 'heroUserGroup' },
        { label: 'Success Rate', value: '99.9%', icon: 'heroCheck' },
        { label: 'Performance', value: 'Fast', icon: 'heroBolt' },
        { label: 'Status', value: 'Production', icon: 'heroServer' },
      ];

      stats.forEach(stat => {
        expect(stat.label).toBeDefined();
        expect(stat.value).toBeDefined();
        expect(stat.icon).toBeDefined();
        expect(stat.icon.startsWith('hero')).toBe(true);
      });
    });

    it('should handle numeric and text values', () => {
      const numericStat: QuickStat = {
        label: 'Count',
        value: '1000',
        icon: 'heroHashtag',
      };

      const textStat: QuickStat = {
        label: 'Status',
        value: 'Active',
        icon: 'heroCheck',
      };

      expect(numericStat.value).toBe('1000');
      expect(textStat.value).toBe('Active');
    });
  });

  describe('Feature Interface', () => {
    it('should validate Feature structure', () => {
      const validFeature: Feature = {
        title: 'Real-time Processing',
        description: 'Process data in real-time with low latency',
        icon: 'heroBolt',
      };

      expect(typeof validFeature.title).toBe('string');
      expect(typeof validFeature.description).toBe('string');
      expect(typeof validFeature.icon).toBe('string');
    });

    it('should handle comprehensive feature descriptions', () => {
      const features: Feature[] = [
        {
          title: 'Advanced Analytics',
          description:
            'Comprehensive data analysis and visualization with machine learning capabilities',
          icon: 'heroChartBar',
        },
        {
          title: 'Security Framework',
          description:
            'Enterprise-grade security with encryption, authentication, and authorization',
          icon: 'heroShieldCheck',
        },
        {
          title: 'Scalable Architecture',
          description:
            'Horizontally scalable microservices architecture supporting millions of users',
          icon: 'heroServer',
        },
      ];

      features.forEach(feature => {
        expect(feature.title.length).toBeGreaterThan(5);
        expect(feature.description.length).toBeGreaterThan(20);
        expect(feature.icon.startsWith('hero')).toBe(true);
      });
    });
  });

  describe('ContentSection Interface', () => {
    it('should validate ContentSection structure', () => {
      const validSection: ContentSection = {
        title: 'Technical Overview',
        content: 'Detailed technical implementation details',
        icon: 'heroCog6Tooth',
        type: 'text',
      };

      expect(typeof validSection.title).toBe('string');
      expect(typeof validSection.content).toBe('string');
      expect(validSection.icon).toBeDefined();
      expect(validSection.type).toBeDefined();
    });

    it('should handle optional properties', () => {
      const minimalSection: ContentSection = {
        title: 'Simple Section',
        content: 'Basic content',
      };

      const fullSection: ContentSection = {
        title: 'Complete Section',
        content: 'Full content with all options',
        icon: 'heroBeaker',
        type: 'list',
        items: ['Item 1', 'Item 2', 'Item 3'],
      };

      expect(minimalSection.icon).toBeUndefined();
      expect(minimalSection.type).toBeUndefined();
      expect(minimalSection.items).toBeUndefined();

      expect(fullSection.icon).toBe('heroBeaker');
      expect(fullSection.type).toBe('list');
      expect(fullSection.items).toHaveLength(3);
    });

    it('should validate content section types', () => {
      const textSection: ContentSection = {
        title: 'Text',
        content: 'Text content',
        type: 'text',
      };
      const htmlSection: ContentSection = {
        title: 'HTML',
        content: '<p>HTML content</p>',
        type: 'html',
      };
      const listSection: ContentSection = {
        title: 'List',
        content: 'List content',
        type: 'list',
        items: ['A', 'B', 'C'],
      };

      expect(textSection.type).toBe('text');
      expect(htmlSection.type).toBe('html');
      expect(listSection.type).toBe('list');
      expect(listSection.items).toBeDefined();
    });
  });

  describe('ProjectDetailConfig Interface', () => {
    it('should validate complete ProjectDetailConfig structure', () => {
      const validConfig: ProjectDetailConfig = {
        // Visual/Branding
        backgroundGradient:
          'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
        headerIcon: 'heroBookOpen',
        primaryColor: 'blue',

        // Navigation
        backRoute: '/projects/professional/skyline',
        backLabel: 'Back to Skyline Projects',
        companyKey: 'skyline',
        hoverColor: 'blue',

        // Content
        title: 'Test Project',
        description: 'A comprehensive test project configuration',
        technologies: [
          { name: 'Angular', color: 'red' },
          { name: 'TypeScript', color: 'blue' },
        ],
        overview: {
          title: 'Project Overview',
          content: 'Comprehensive project overview content',
          icon: 'heroBookOpen',
        },
        features: [
          {
            title: 'Feature 1',
            description: 'First feature description',
            icon: 'heroBeaker',
          },
        ],

        // Layout Options
        showQuickStats: true,
        showTechnicalHighlights: true,
        showImpactSection: true,
        gridColumns: 'double',
      };

      // Validate required visual properties
      expect(typeof validConfig.backgroundGradient).toBe('string');
      expect(typeof validConfig.headerIcon).toBe('string');
      expect(typeof validConfig.primaryColor).toBe('string');

      // Validate required navigation properties
      expect(typeof validConfig.backRoute).toBe('string');
      expect(typeof validConfig.backLabel).toBe('string');
      expect(typeof validConfig.companyKey).toBe('string');
      expect(typeof validConfig.hoverColor).toBe('string');

      // Validate required content properties
      expect(typeof validConfig.title).toBe('string');
      expect(typeof validConfig.description).toBe('string');
      expect(Array.isArray(validConfig.technologies)).toBe(true);
      expect(typeof validConfig.overview).toBe('object');
      expect(Array.isArray(validConfig.features)).toBe(true);

      // Validate required layout properties
      expect(typeof validConfig.showQuickStats).toBe('boolean');
      expect(typeof validConfig.showTechnicalHighlights).toBe('boolean');
      expect(typeof validConfig.showImpactSection).toBe('boolean');
    });

    it('should handle optional properties', () => {
      const minimalConfig: ProjectDetailConfig = {
        backgroundGradient: 'bg-gradient-to-r from-red-500 to-red-700',
        headerIcon: 'heroRocketLaunch',
        primaryColor: 'red',
        backRoute: '/projects',
        backLabel: 'Back to Projects',
        companyKey: 'test',
        hoverColor: 'red',
        title: 'Minimal Project',
        description: 'Basic project configuration',
        technologies: [],
        overview: { title: 'Overview', content: 'Basic overview' },
        features: [],
        showQuickStats: false,
        showTechnicalHighlights: false,
        showImpactSection: false,
      };

      expect(minimalConfig.quickStats).toBeUndefined();
      expect(minimalConfig.technicalDetails).toBeUndefined();
      expect(minimalConfig.specialSections).toBeUndefined();
      expect(minimalConfig.impact).toBeUndefined();
      expect(minimalConfig.gridColumns).toBeUndefined();
    });

    it('should validate grid column options', () => {
      const singleColumnConfig: ProjectDetailConfig = {
        backgroundGradient: 'test',
        headerIcon: 'test',
        primaryColor: 'test',
        backRoute: 'test',
        backLabel: 'test',
        companyKey: 'test',
        hoverColor: 'test',
        title: 'test',
        description: 'test',
        technologies: [],
        overview: { title: 'test', content: 'test' },
        features: [],
        showQuickStats: false,
        showTechnicalHighlights: false,
        showImpactSection: false,
        gridColumns: 'single',
      };

      const doubleColumnConfig: ProjectDetailConfig = {
        ...singleColumnConfig,
        gridColumns: 'double',
      };

      expect(singleColumnConfig.gridColumns).toBe('single');
      expect(doubleColumnConfig.gridColumns).toBe('double');
    });

    it('should handle complex nested structures', () => {
      const complexConfig: ProjectDetailConfig = {
        backgroundGradient:
          'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50',
        headerIcon: 'heroArrowPathRoundedSquare',
        primaryColor: 'emerald',
        backRoute: '/projects/professional/company',
        backLabel: 'Back to Company Projects',
        companyKey: 'company',
        hoverColor: 'blue',
        title: 'Complex Project Configuration',
        description: 'A comprehensive project with all possible features',
        technologies: [
          { name: 'React Router 7', color: 'emerald' },
          { name: 'TypeScript', color: 'teal' },
          { name: 'PostgreSQL', color: 'indigo' },
        ],
        quickStats: [
          { label: 'Efficiency Gain', value: '75%', icon: 'heroClock' },
          { label: 'Match Accuracy', value: '90%', icon: 'heroChartBarSquare' },
        ],
        overview: {
          title: 'Project Overview',
          content: 'Comprehensive overview of the complex project',
          icon: 'heroComputerDesktop',
        },
        features: [
          {
            title: 'Advanced Feature',
            description: 'Advanced feature with comprehensive functionality',
            icon: 'heroBeaker',
          },
          {
            title: 'Integration Feature',
            description: 'Integration capabilities with external systems',
            icon: 'heroLink',
          },
        ],
        technicalDetails: [
          {
            title: 'Technical Implementation',
            content: 'Detailed technical implementation information',
            icon: 'heroCog6Tooth',
            type: 'text',
          },
        ],
        specialSections: [
          {
            title: 'Migration Workflow',
            content: 'Special workflow processes',
            icon: 'heroBeaker',
            type: 'list',
            items: ['Step 1', 'Step 2', 'Step 3'],
          },
        ],
        impact:
          'Significant positive impact on development workflow and efficiency',
        showQuickStats: true,
        showTechnicalHighlights: true,
        showImpactSection: true,
        gridColumns: 'single',
      };

      expect(complexConfig.technologies).toHaveLength(3);
      expect(complexConfig.quickStats).toHaveLength(2);
      expect(complexConfig.features).toHaveLength(2);
      expect(complexConfig.technicalDetails).toHaveLength(1);
      expect(complexConfig.specialSections).toHaveLength(1);
      expect(complexConfig.impact?.length).toBeGreaterThan(20);
    });
  });

  describe('Interface Validation Edge Cases', () => {
    it('should handle empty arrays in ProjectDetailConfig', () => {
      const emptyArraysConfig: ProjectDetailConfig = {
        backgroundGradient: 'test',
        headerIcon: 'test',
        primaryColor: 'test',
        backRoute: 'test',
        backLabel: 'test',
        companyKey: 'test',
        hoverColor: 'test',
        title: 'Empty Arrays Test',
        description: 'Testing with empty arrays',
        technologies: [],
        quickStats: [],
        overview: { title: 'test', content: 'test' },
        features: [],
        technicalDetails: [],
        specialSections: [],
        showQuickStats: false,
        showTechnicalHighlights: false,
        showImpactSection: false,
      };

      expect(emptyArraysConfig.technologies).toHaveLength(0);
      expect(emptyArraysConfig.quickStats).toHaveLength(0);
      expect(emptyArraysConfig.features).toHaveLength(0);
      expect(emptyArraysConfig.technicalDetails).toHaveLength(0);
      expect(emptyArraysConfig.specialSections).toHaveLength(0);
    });

    it('should handle very long content strings', () => {
      const longContent = 'A'.repeat(1000);
      const longContentSection: ContentSection = {
        title: 'Long Content Test',
        content: longContent,
      };

      expect(longContentSection.content.length).toBe(1000);
      expect(typeof longContentSection.content).toBe('string');
    });

    it('should handle special characters in all string fields', () => {
      const specialCharsConfig: ProjectDetailConfig = {
        backgroundGradient: 'bg-gradient-to-r from-red-500 to-red-700',
        headerIcon: 'heroRocketLaunch',
        primaryColor: 'red',
        backRoute: '/projects/special-chars',
        backLabel: 'Back to "Special" Projects & More',
        companyKey: 'company-with-dashes',
        hoverColor: 'red',
        title: 'Project: Advanced & "Complex" Solutions (v2.0)',
        description:
          'A project with special characters: æøå, 中文, русский, and emojis 🚀',
        technologies: [
          { name: 'C#', color: 'purple' },
          { name: '.NET Core 6', color: 'blue' },
        ],
        overview: {
          title: 'Overview & Details',
          content: 'Content with special chars: <>&"\' and unicode: ñáéíóú',
        },
        features: [],
        showQuickStats: false,
        showTechnicalHighlights: false,
        showImpactSection: false,
      };

      expect(specialCharsConfig.title).toContain('&');
      expect(specialCharsConfig.title).toContain('"');
      expect(specialCharsConfig.description).toContain('🚀');
      expect(specialCharsConfig.technologies[0].name).toBe('C#');
    });
  });
});
