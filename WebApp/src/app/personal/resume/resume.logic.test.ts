import { beforeEach, describe, expect, it } from 'bun:test';
import * as companiesModule from '../../shared/data/companies';
import * as technologiesModule from '../../shared/data/technologies';

// Mock the component class to test only the logic methods
class ResumeComponentLogic {
  constructor() {
    // Initialize the same way as the real component
    this.currentCompany = companiesModule.getCompanyWithCalculatedStats('nri-na');
    this.previousCompanies = [
      companiesModule.getCompanyWithCalculatedStats('corebts'),
      companiesModule.getCompanyWithCalculatedStats('skyline'),
      companiesModule.getCompanyWithCalculatedStats('west'),
      companiesModule.getCompanyWithCalculatedStats('bestbuy'),
    ];

    this.proficientTechnologies = technologiesModule
      .getProficientTechnologies()
      .sort((a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0));
    this.learnedTechnologies = technologiesModule
      .getLearnedTechnologies()
      .sort((a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0));
    this.interestedTechnologies = technologiesModule.getInterestedTechnologies();
  }

  currentCompany: companiesModule.CompanyInfo;
  previousCompanies: companiesModule.CompanyInfo[];
  proficientTechnologies: technologiesModule.TechnologySkill[];
  learnedTechnologies: technologiesModule.TechnologySkill[];
  interestedTechnologies: technologiesModule.TechnologySkill[];

  trackByCompanyId(index: number, company: companiesModule.CompanyInfo): string {
    return company.id;
  }

  trackByIndex(index: number): number {
    return index;
  }

  getCompanyColor(colorClass: string): string {
    const colorMap: Record<string, string> = {
      'blue-500': '#3b82f6',
      'blue-600': '#2563eb',
      'blue-800': '#1e40af',
      'emerald-600': '#059669',
      'green-500': '#22c55e',
      'red-600': '#dc2626',
      'orange-500': '#f97316',
      'orange-600': '#ea580c',
      'orange-800': '#9a3412',
      'indigo-600': '#4f46e5',
      'sky-400': '#38bdf8',
      'teal-500': '#14b8a6',
      'gray-900': '#111827',
    };
    return colorMap[colorClass] || '#3b82f6';
  }

  get portfolioStats() {
    const allCompanies = companiesModule.getAllCompanies();
    const totalProjects = allCompanies.reduce((sum, company) => {
      return sum + company.projects.length;
    }, 0);

    const totalTechnologies = technologiesModule.getAllTechnologyNames().length;

    return {
      totalProjects,
      totalCompanies: allCompanies.length,
      totalTechnologies,
    };
  }
}

describe('ResumeComponent Logic Tests', () => {
  let logic: ResumeComponentLogic;

  beforeEach(() => {
    logic = new ResumeComponentLogic();
  });

  describe('Component Logic', () => {
    it('should initialize with proper data', () => {
      expect(logic.currentCompany).toBeDefined();
      expect(logic.currentCompany.id).toBe('nri-na');
      expect(logic.previousCompanies).toBeDefined();
      expect(logic.previousCompanies.length).toBe(4);
    });

    it('should load technology data correctly', () => {
      expect(logic.proficientTechnologies.length).toBeGreaterThan(0);
      expect(logic.learnedTechnologies.length).toBeGreaterThan(0);
      expect(logic.interestedTechnologies.length).toBeGreaterThan(0);
    });

    it('should sort technologies by skill level', () => {
      const proficientSkills = logic.proficientTechnologies
        .map((tech) => tech.skillLevel || 0)
        .filter((level) => level > 0);

      for (let i = 1; i < proficientSkills.length; i++) {
        const currentSkill = proficientSkills[i];
        const previousSkill = proficientSkills[i - 1];
        if (currentSkill !== undefined && previousSkill !== undefined) {
          expect(currentSkill).toBeLessThanOrEqual(previousSkill);
        }
      }
    });
  });

  describe('Utility Methods', () => {
    it('should track by company id', () => {
      const company: companiesModule.CompanyInfo = {
        id: 'test-id',
        displayName: 'Test Company',
        name: 'Test',
        logoSrc: '/test.png',
        logoAlt: 'Test Logo',
        logoBackground: 'white',
        location: 'Test City',
        position: 'Test Position',
        dateRange: '2020-2021',
        colorScheme: {
          theme: 'blue',
          primary: '#000',
          secondary: '#111',
          accent: '#222',
        },
        stats: {
          years: '1',
          projects: { value: '1', label: 'project' },
          clients: { value: '1', label: 'client' },
        },
        description: 'Test company',
        projectsRoute: '/test',
        employmentRoute: '/employment/test',
        projects: [{ name: 'Test Project', route: 'test-project' }],
      };
      expect(logic.trackByCompanyId(0, company)).toBe('test-id');
    });

    it('should track by index', () => {
      expect(logic.trackByIndex(5)).toBe(5);
    });

    it('should map colors correctly', () => {
      expect(logic.getCompanyColor('blue-500')).toBe('#3b82f6');
      expect(logic.getCompanyColor('invalid')).toBe('#3b82f6');
    });
  });

  describe('Portfolio Statistics', () => {
    it('should calculate stats correctly', () => {
      const stats = logic.portfolioStats;

      expect(stats.totalProjects).toBeGreaterThan(0);
      expect(stats.totalCompanies).toBeGreaterThan(0);
      expect(stats.totalTechnologies).toBeGreaterThan(0);
    });

    it('should reflect actual data counts', () => {
      const stats = logic.portfolioStats;
      const actualCompanyCount = companiesModule.getAllCompanies().length;
      const actualTechnologyCount = technologiesModule.getAllTechnologyNames().length;

      expect(stats.totalCompanies).toBe(actualCompanyCount);
      expect(stats.totalTechnologies).toBe(actualTechnologyCount);
    });
  });

  describe('Data Integrity', () => {
    it('should maintain consistent data', () => {
      const proficientNames = new Set(logic.proficientTechnologies.map((t) => t.name));
      const learnedNames = new Set(logic.learnedTechnologies.map((t) => t.name));
      const interestedNames = new Set(logic.interestedTechnologies.map((t) => t.name));

      const overlaps = Array.from(proficientNames).filter(
        (name) => learnedNames.has(name) || interestedNames.has(name)
      );

      expect(overlaps.length).toBe(0);
    });

    it('should have valid company structure', () => {
      const allCompanies = [logic.currentCompany, ...logic.previousCompanies];

      allCompanies.forEach((company) => {
        expect(company.id).toBeDefined();
        expect(company.displayName).toBeDefined();
        expect(company.stats).toBeDefined();
        expect(company.projects).toBeDefined();
        expect(Array.isArray(company.projects)).toBe(true);
      });
    });
  });
});
