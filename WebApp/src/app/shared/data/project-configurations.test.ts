import { describe, expect, it } from 'bun:test';
import { PROJECT_CONFIGURATIONS } from './project-configurations';

describe('Project Configurations', () => {
  it('should have project configurations defined', () => {
    expect(PROJECT_CONFIGURATIONS).toBeDefined();
    expect(typeof PROJECT_CONFIGURATIONS).toBe('object');
    expect(Object.keys(PROJECT_CONFIGURATIONS).length).toBeGreaterThan(0);
  });

  it('should have valid project configuration structure', () => {
    Object.entries(PROJECT_CONFIGURATIONS).forEach(([key, config]) => {
      expect(typeof key).toBe('string');
      expect(key.length).toBeGreaterThan(0);

      // Required fields
      expect(config).toHaveProperty('title');
      expect(config).toHaveProperty('description');
      expect(config).toHaveProperty('technologies');
      expect(config).toHaveProperty('backRoute');
      expect(config).toHaveProperty('backLabel');
      expect(config).toHaveProperty('companyKey');

      expect(typeof config.title).toBe('string');
      expect(typeof config.description).toBe('string');
      expect(typeof config.backRoute).toBe('string');
      expect(typeof config.backLabel).toBe('string');
      expect(typeof config.companyKey).toBe('string');

      expect(Array.isArray(config.technologies)).toBe(true);
      expect(config.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should have valid technology items in configurations', () => {
    Object.values(PROJECT_CONFIGURATIONS).forEach((config) => {
      config.technologies.forEach((tech) => {
        expect(tech).toHaveProperty('name');
        expect(tech).toHaveProperty('color');
        expect(typeof tech.name).toBe('string');
        expect(typeof tech.color).toBe('string');
        expect(tech.name.length).toBeGreaterThan(0);
        expect(tech.color.length).toBeGreaterThan(0);
      });
    });
  });

  it('should have valid quick stats if present', () => {
    Object.values(PROJECT_CONFIGURATIONS).forEach((config) => {
      if (config.quickStats) {
        expect(Array.isArray(config.quickStats)).toBe(true);

        config.quickStats.forEach((stat) => {
          expect(stat).toHaveProperty('label');
          expect(stat).toHaveProperty('value');
          expect(stat).toHaveProperty('icon');
          expect(typeof stat.label).toBe('string');
          expect(typeof stat.value).toBe('string');
          expect(typeof stat.icon).toBe('string');
        });
      }
    });
  });

  it('should have valid back routes', () => {
    Object.values(PROJECT_CONFIGURATIONS).forEach((config) => {
      expect(config.backRoute.startsWith('/')).toBe(true);
      expect(config.backLabel.length).toBeGreaterThan(0);
    });
  });

  it('should have consistent company keys', () => {
    const validCompanyKeys = ['skyline', 'corebts', 'west', 'geeksquad', 'nri-na', 'bestbuy'];

    Object.values(PROJECT_CONFIGURATIONS).forEach((config) => {
      expect(validCompanyKeys).toContain(config.companyKey);
    });
  });

  it('should have unique project keys', () => {
    const keys = Object.keys(PROJECT_CONFIGURATIONS);
    const uniqueKeys = new Set(keys);
    expect(keys.length).toBe(uniqueKeys.size);
  });

  it('should have meaningful descriptions', () => {
    Object.values(PROJECT_CONFIGURATIONS).forEach((config) => {
      expect(config.description.length).toBeGreaterThan(50); // Should be descriptive
      expect(config.title.length).toBeGreaterThan(5);
    });
  });

  describe('specific project validations', () => {
    it('should have renaissance-learning project', () => {
      expect(PROJECT_CONFIGURATIONS['renaissance-learning']).toBeDefined();
      const renaissance = PROJECT_CONFIGURATIONS['renaissance-learning'];
      expect(renaissance.title).toContain('Renaissance');
      expect(renaissance.companyKey).toBe('skyline');
    });

    it('should have projects for multiple companies', () => {
      const companyKeys = Object.values(PROJECT_CONFIGURATIONS).map((config) => config.companyKey);
      const uniqueCompanies = new Set(companyKeys);
      expect(uniqueCompanies.size).toBeGreaterThan(1);
    });
  });
});
