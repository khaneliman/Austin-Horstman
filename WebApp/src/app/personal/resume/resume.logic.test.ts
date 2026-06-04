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

  getCompanyColor(colorClass: string): string {
    const colorMap: Record<string, string> = {
      'blue-500': '#1e66f5',
      'blue-600': '#1e66f5',
      'blue-800': '#1445a7',
      'emerald-600': '#179299',
      'green-500': '#40a02b',
      'red-600': '#d20f39',
      'orange-500': '#fe640b',
      'orange-600': '#fe640b',
      'orange-800': '#d55409',
      'indigo-600': '#4e5cac',
      'sky-400': '#04a5e5',
      'teal-500': '#179299',
      'gray-900': '#4c4f69',
    };
    return colorMap[colorClass] || '#1e66f5';
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
    it('should map colors correctly', () => {
      expect(logic.getCompanyColor('blue-500')).toBe('#1e66f5');
      expect(logic.getCompanyColor('invalid')).toBe('#1e66f5');
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
