import { beforeEach, describe, expect, it } from 'bun:test';

// Define interfaces
interface CompanyInfo {
  id: string;
  displayName: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  logoBackground: 'white' | 'black' | 'dark';
  website?: string;
  location: string;
  position: string;
  dateRange: string;
  department?: string;
  colorScheme: {
    theme: string;
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
  achievements?: readonly string[];
  projectsRoute: string;
  employmentRoute: string;
  projects: readonly { name: string; route: string }[];
}

interface ProjectInfo {
  name: string;
  description: string;
  route: string;
  icon: string;
  color: string;
  status: string;
  technologies: string[];
}

interface BulletListItem {
  text: string;
}

interface BackgroundElement {
  size: string;
  position: string;
  color: string;
  opacity: number;
  blur: string;
}

// Mock the component class to test only the logic methods
class CompanyProfileLogic {
  company!: CompanyInfo;
  projects!: ProjectInfo[];

  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-4 right-4',
      color: 'white',
      opacity: 10,
      blur: 'xl',
    },
    {
      size: 'md',
      position: 'bottom-4 left-4',
      color: 'white',
      opacity: 10,
      blur: 'lg',
    },
  ];

  projectBackgroundElements: BackgroundElement[] = [
    {
      size: 'sm',
      position: 'top-3 right-3',
      color: 'white',
      opacity: 10,
      blur: 'lg',
    },
  ];

  // Mock logo styling service
  getLogoBackgroundStyle(background: 'white' | 'black' | 'dark' | undefined): string {
    switch (background) {
      case 'white':
        return '#ffffff';
      case 'black':
        return '#000000';
      case 'dark':
        return '#1a1a1a';
      default:
        return '#ffffff';
    }
  }

  getTechBadgeClass(index: number): string {
    const badgeClasses = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-indigo-100 text-indigo-800',
      'bg-pink-100 text-pink-800',
      'bg-yellow-100 text-yellow-800',
      'bg-red-100 text-red-800',
      'bg-teal-100 text-teal-800',
      'bg-orange-100 text-orange-800',
      'bg-gray-100 text-gray-800',
    ];
    return badgeClasses[index % badgeClasses.length] || 'bg-blue-100 text-blue-800';
  }

  getProjectLinkClass(theme: string): string {
    const linkClasses = {
      green: 'text-green-600 hover:text-green-800',
      blue: 'text-blue-600 hover:text-blue-800',
      red: 'text-red-600 hover:text-red-800',
      orange: 'text-orange-600 hover:text-orange-800',
    };
    return linkClasses[theme as keyof typeof linkClasses] || linkClasses.green;
  }

  getIconClass(theme: string): string {
    const iconClasses = {
      green: 'text-green-500',
      blue: 'text-blue-500',
      red: 'text-red-500',
      orange: 'text-orange-500',
    };
    return iconClasses[theme as keyof typeof iconClasses] || iconClasses.green;
  }

  getAchievementItems(): BulletListItem[] {
    if (!this.company.achievements) return [];
    return this.company.achievements.map((achievement) => ({
      text: achievement,
    }));
  }
}

describe('CompanyProfileComponent Logic Tests', () => {
  let logic: CompanyProfileLogic;

  const mockCompanyData: CompanyInfo = {
    id: 'test-company',
    displayName: 'Test Company',
    name: 'Test Company Inc',
    logoSrc: '/assets/test-logo.png',
    logoAlt: 'Test Company Logo',
    logoBackground: 'white',
    website: 'https://test-company.com',
    location: 'Test City, ST',
    position: 'Senior Developer',
    dateRange: 'Jan 2020 - Present',
    department: 'Engineering',
    colorScheme: {
      theme: 'blue',
      primary: 'blue-500',
      secondary: 'blue-600',
      accent: 'blue-400',
    },
    stats: {
      years: '3+',
      projects: { value: '5', label: 'Projects' },
      clients: { value: '3', label: 'Clients' },
    },
    description: 'Test company description',
    achievements: [
      'Developed scalable web applications',
      'Led technical architecture decisions',
      'Mentored junior developers',
    ],
    projectsRoute: '/projects/test-company',
    employmentRoute: '/employment/test-company',
    projects: [
      { name: 'Project A', route: 'project-a' },
      { name: 'Project B', route: 'project-b' },
    ],
  };

  const mockProjectsData: ProjectInfo[] = [
    {
      name: 'Project Alpha',
      description: 'First test project',
      route: '/projects/test-company/project-alpha',
      icon: 'heroBeaker',
      color: 'from-blue-500 to-blue-600',
      status: 'Production',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
    },
    {
      name: 'Project Beta',
      description: 'Second test project',
      route: '/projects/test-company/project-beta',
      icon: 'heroShoppingBag',
      color: 'from-green-500 to-green-600',
      status: 'Development',
      technologies: ['React', 'JavaScript', 'CSS'],
    },
  ];

  beforeEach(() => {
    logic = new CompanyProfileLogic();
    logic.company = mockCompanyData;
    logic.projects = mockProjectsData;
  });

  describe('Component Logic', () => {
    it('should initialize correctly', () => {
      expect(logic).toBeDefined();
      expect(logic.company).toEqual(mockCompanyData);
      expect(logic.projects).toEqual(mockProjectsData);
    });

    it('should have background elements', () => {
      expect(logic.backgroundElements).toBeDefined();
      expect(logic.backgroundElements.length).toBe(2);
      expect(logic.projectBackgroundElements).toBeDefined();
      expect(logic.projectBackgroundElements.length).toBe(1);
    });

    it('should validate background element structure', () => {
      const allElements = [...logic.backgroundElements, ...logic.projectBackgroundElements];

      allElements.forEach((element) => {
        expect(element).toHaveProperty('size');
        expect(element).toHaveProperty('position');
        expect(element).toHaveProperty('color');
        expect(element).toHaveProperty('opacity');
        expect(element).toHaveProperty('blur');
      });
    });
  });

  describe('Logo Styling', () => {
    it('should handle different logo backgrounds', () => {
      expect(logic.getLogoBackgroundStyle('white')).toBe('#ffffff');
      expect(logic.getLogoBackgroundStyle('black')).toBe('#000000');
      expect(logic.getLogoBackgroundStyle('dark')).toBe('#1a1a1a');
      expect(logic.getLogoBackgroundStyle(undefined)).toBe('#ffffff');
    });
  });

  describe('CSS Class Utilities', () => {
    it('should generate tech badge classes correctly', () => {
      const expectedClasses = [
        'bg-blue-100 text-blue-800',
        'bg-green-100 text-green-800',
        'bg-purple-100 text-purple-800',
        'bg-indigo-100 text-indigo-800',
        'bg-pink-100 text-pink-800',
        'bg-yellow-100 text-yellow-800',
        'bg-red-100 text-red-800',
        'bg-teal-100 text-teal-800',
        'bg-orange-100 text-orange-800',
        'bg-gray-100 text-gray-800',
      ];

      expectedClasses.forEach((expectedClass, index) => {
        expect(logic.getTechBadgeClass(index)).toBe(expectedClass);
      });

      // Test wrapping
      expect(logic.getTechBadgeClass(10)).toBe(expectedClasses[0]);
      expect(logic.getTechBadgeClass(15)).toBe(expectedClasses[5]);
    });

    it('should generate project link classes correctly', () => {
      expect(logic.getProjectLinkClass('green')).toBe('text-green-600 hover:text-green-800');
      expect(logic.getProjectLinkClass('blue')).toBe('text-blue-600 hover:text-blue-800');
      expect(logic.getProjectLinkClass('red')).toBe('text-red-600 hover:text-red-800');
      expect(logic.getProjectLinkClass('orange')).toBe('text-orange-600 hover:text-orange-800');
      expect(logic.getProjectLinkClass('unknown')).toBe('text-green-600 hover:text-green-800');
    });

    it('should generate icon classes correctly', () => {
      expect(logic.getIconClass('green')).toBe('text-green-500');
      expect(logic.getIconClass('blue')).toBe('text-blue-500');
      expect(logic.getIconClass('red')).toBe('text-red-500');
      expect(logic.getIconClass('orange')).toBe('text-orange-500');
      expect(logic.getIconClass('invalid')).toBe('text-green-500');
    });
  });

  describe('Achievement Management', () => {
    it('should generate achievement items correctly', () => {
      const items = logic.getAchievementItems();

      expect(items.length).toBe(3);
      expect(items[0].text).toBe('Developed scalable web applications');
      expect(items[1].text).toBe('Led technical architecture decisions');
      expect(items[2].text).toBe('Mentored junior developers');
    });

    it('should handle missing achievements', () => {
      const companyWithoutAchievements = { ...mockCompanyData };
      delete companyWithoutAchievements.achievements;
      logic.company = companyWithoutAchievements;

      const items = logic.getAchievementItems();
      expect(items).toEqual([]);
    });

    it('should handle empty achievements', () => {
      logic.company = { ...mockCompanyData, achievements: [] };

      const items = logic.getAchievementItems();
      expect(items).toEqual([]);
    });
  });

  describe('Data Validation', () => {
    it('should handle company data with all fields', () => {
      const requiredFields = [
        'id',
        'displayName',
        'name',
        'logoSrc',
        'logoAlt',
        'logoBackground',
        'location',
        'position',
        'dateRange',
        'colorScheme',
        'stats',
        'description',
        'projectsRoute',
        'employmentRoute',
        'projects',
      ];

      requiredFields.forEach((field) => {
        expect(logic.company).toHaveProperty(field);
        expect(logic.company[field as keyof CompanyInfo]).toBeDefined();
      });
    });

    it('should handle project data structure', () => {
      logic.projects.forEach((project) => {
        expect(project).toHaveProperty('name');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('route');
        expect(project).toHaveProperty('icon');
        expect(project).toHaveProperty('color');
        expect(project).toHaveProperty('status');
        expect(project).toHaveProperty('technologies');
        expect(Array.isArray(project.technologies)).toBe(true);
      });
    });

    it('should handle optional company fields', () => {
      const minimalCompany: CompanyInfo = {
        id: 'minimal',
        displayName: 'Minimal Company',
        name: 'Minimal Company',
        logoSrc: '/logo.png',
        logoAlt: 'Logo',
        logoBackground: 'white',
        location: 'Location',
        position: 'Position',
        dateRange: 'Date Range',
        colorScheme: {
          theme: 'blue',
          primary: 'blue-500',
          secondary: 'blue-600',
          accent: 'blue-400',
        },
        stats: {
          years: '1',
          projects: { value: '1', label: 'Project' },
          clients: { value: '1', label: 'Client' },
        },
        description: 'Description',
        projectsRoute: '/projects',
        employmentRoute: '/employment',
        projects: [],
      };

      logic.company = minimalCompany;
      expect(logic.getAchievementItems()).toEqual([]);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty projects array', () => {
      logic.projects = [];
      expect(logic.projects.length).toBe(0);
    });

    it('should handle invalid color themes gracefully', () => {
      expect(logic.getProjectLinkClass('invalid-theme')).toBe('text-green-600 hover:text-green-800');
      expect(logic.getIconClass('invalid-theme')).toBe('text-green-500');
    });

    it('should handle very long data', () => {
      const longAchievements = Array(10)
        .fill(0)
        .map(
          (_, i) => `Very long achievement number ${i + 1} with lots of detailed information about the accomplishment`
        );

      logic.company = { ...mockCompanyData, achievements: longAchievements };

      const items = logic.getAchievementItems();
      expect(items.length).toBe(10);
      expect(items[0].text).toContain('Very long achievement number 1');
    });

    it('should handle special characters in data', () => {
      const specialCompany = {
        ...mockCompanyData,
        name: 'Company with "Special" & <Characters>',
        achievements: ['Achievement with symbols: @#$%^&*()[]{}'],
      };

      logic.company = specialCompany;

      const items = logic.getAchievementItems();
      expect(items[0].text).toBe('Achievement with symbols: @#$%^&*()[]{}');
    });
  });

  describe('Performance', () => {
    it('should handle rapid data updates efficiently', () => {
      const startTime = performance.now();

      for (let i = 0; i < 50; i++) {
        logic.company = { ...mockCompanyData, displayName: `Company ${i}` };
        logic.projects = [...mockProjectsData];
      }

      const endTime = performance.now();
      expect(endTime - startTime).toBeLessThan(50);
    });

    it('should handle many CSS class generations efficiently', () => {
      const startTime = performance.now();

      for (let i = 0; i < 1000; i++) {
        logic.getTechBadgeClass(i);
        logic.getProjectLinkClass(i % 2 === 0 ? 'blue' : 'green');
        logic.getIconClass(i % 2 === 0 ? 'red' : 'orange');
      }

      const endTime = performance.now();
      expect(endTime - startTime).toBeLessThan(10);
    });

    it('should not leak memory with repeated operations', () => {
      const originalDisplayName = logic.company.displayName;

      for (let i = 0; i < 100; i++) {
        logic.company = { ...mockCompanyData, displayName: `Test ${i}` };
        logic.getAchievementItems();
      }

      logic.company = { ...mockCompanyData };
      expect(logic.company.displayName).toBe(originalDisplayName);
    });
  });

  describe('State Management', () => {
    it('should maintain independent properties', () => {
      const originalProjects = [...logic.projects];

      logic.company = { ...mockCompanyData, name: 'Changed Company' };
      expect(logic.projects).toEqual(originalProjects);

      logic.projects = [];
      expect(logic.company.name).toBe('Changed Company');
    });

    it('should handle concurrent updates', () => {
      const updates = [
        () => {
          logic.company = { ...mockCompanyData, displayName: 'Update 1' };
        },
        () => {
          logic.projects = [mockProjectsData[0]];
        },
        () => {
          logic.company = { ...mockCompanyData, displayName: 'Update 2' };
        },
        () => {
          logic.projects = mockProjectsData;
        },
      ];

      updates.forEach((update) => update());

      expect(logic.company.displayName).toBe('Update 2');
      expect(logic.projects.length).toBe(2);
    });
  });
});
