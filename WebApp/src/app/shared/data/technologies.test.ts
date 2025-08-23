import { describe, it, expect } from 'bun:test';
import {
  TECHNOLOGY_SKILLS,
  getProficientTechnologies,
  getLearnedTechnologies,
  getInterestedTechnologies,
  getAllTechnologyNames,
  getTechnologyByName,
} from './technologies';

describe('Technologies Data', () => {
  describe('TECHNOLOGY_SKILLS data validation', () => {
    it('should have technology skills array defined', () => {
      expect(TECHNOLOGY_SKILLS).toBeDefined();
      expect(Array.isArray(TECHNOLOGY_SKILLS)).toBe(true);
      expect(TECHNOLOGY_SKILLS.length).toBeGreaterThan(0);
    });

    it('should have valid technology structure', () => {
      TECHNOLOGY_SKILLS.forEach(tech => {
        expect(tech).toHaveProperty('name');
        expect(typeof tech.name).toBe('string');
        expect(tech.name.length).toBeGreaterThan(0);

        if (tech.skillLevel !== undefined) {
          expect(tech.skillLevel).toBeGreaterThanOrEqual(1);
          expect(tech.skillLevel).toBeLessThanOrEqual(5);
          expect(Number.isInteger(tech.skillLevel)).toBe(true);
        }
      });
    });

    it('should have unique technology names', () => {
      const names = TECHNOLOGY_SKILLS.map(tech => tech.name.toLowerCase());
      const uniqueNames = new Set(names);
      expect(names.length).toBe(uniqueNames.size);
    });
  });

  describe('getProficientTechnologies', () => {
    it('should return technologies with skill level >= 4', () => {
      const proficient = getProficientTechnologies();
      expect(Array.isArray(proficient)).toBe(true);

      proficient.forEach(tech => {
        expect(tech.skillLevel).toBeDefined();
        expect(tech.skillLevel! >= 4).toBe(true);
      });
    });

    it('should include Angular and TypeScript as proficient', () => {
      const proficient = getProficientTechnologies();
      const names = proficient.map(tech => tech.name);

      expect(names).toContain('Angular');
      expect(names).toContain('TypeScript');
    });
  });

  describe('getLearnedTechnologies', () => {
    it('should return technologies with skill level 2-3', () => {
      const learned = getLearnedTechnologies();
      expect(Array.isArray(learned)).toBe(true);

      learned.forEach(tech => {
        expect(tech.skillLevel).toBeDefined();
        expect(tech.skillLevel! >= 2).toBe(true);
        expect(tech.skillLevel! <= 3).toBe(true);
      });
    });

    it('should include moderate skill technologies', () => {
      const learned = getLearnedTechnologies();
      const names = learned.map(tech => tech.name);

      expect(names.length).toBeGreaterThan(0);
      expect(names).toContain('Docker');
    });
  });

  describe('getInterestedTechnologies', () => {
    it('should return technologies without skill level or level 1', () => {
      const interested = getInterestedTechnologies();
      expect(Array.isArray(interested)).toBe(true);

      interested.forEach(tech => {
        expect(tech.skillLevel === undefined || tech.skillLevel === 1).toBe(
          true
        );
      });
    });

    it('should include interested technologies like Swift', () => {
      const interested = getInterestedTechnologies();
      const names = interested.map(tech => tech.name);

      expect(names).toContain('Swift');
      expect(names).toContain('Svelte');
    });
  });

  describe('getAllTechnologyNames', () => {
    it('should return array of all technology names', () => {
      const names = getAllTechnologyNames();

      expect(Array.isArray(names)).toBe(true);
      expect(names.length).toBe(TECHNOLOGY_SKILLS.length);

      names.forEach(name => {
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
      });
    });
  });

  describe('getTechnologyByName', () => {
    it('should find technology by exact name', () => {
      const angular = getTechnologyByName('Angular');

      expect(angular).toBeDefined();
      expect(angular!.name).toBe('Angular');
      expect(angular!.skillLevel).toBe(5);
    });

    it('should find technology by case-insensitive name', () => {
      const typescript = getTechnologyByName('typescript');

      expect(typescript).toBeDefined();
      expect(typescript!.name).toBe('TypeScript');
    });

    it('should return undefined for non-existent technology', () => {
      const nonExistent = getTechnologyByName('NonExistentTech');

      expect(nonExistent).toBeUndefined();
    });
  });

  describe('data consistency', () => {
    it('should have all technologies accounted for in categorization functions', () => {
      const proficient = getProficientTechnologies();
      const learned = getLearnedTechnologies();
      const interested = getInterestedTechnologies();

      const totalCategorized =
        proficient.length + learned.length + interested.length;
      expect(totalCategorized).toBe(TECHNOLOGY_SKILLS.length);
    });

    it('should have no overlap between categories', () => {
      const proficient = getProficientTechnologies().map(t => t.name);
      const learned = getLearnedTechnologies().map(t => t.name);
      const interested = getInterestedTechnologies().map(t => t.name);

      // Check no overlap between proficient and learned
      const proficientLearnedOverlap = proficient.filter(name =>
        learned.includes(name)
      );
      expect(proficientLearnedOverlap.length).toBe(0);

      // Check no overlap between learned and interested
      const learnedInterestedOverlap = learned.filter(name =>
        interested.includes(name)
      );
      expect(learnedInterestedOverlap.length).toBe(0);

      // Check no overlap between proficient and interested
      const proficientInterestedOverlap = proficient.filter(name =>
        interested.includes(name)
      );
      expect(proficientInterestedOverlap.length).toBe(0);
    });
  });
});
