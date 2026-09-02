import { describe, expect, it } from 'bun:test';
import { COMPANIES, getAllCompanies } from './companies';

describe('Companies Data', () => {
  it('should have companies object defined', () => {
    expect(COMPANIES).toBeDefined();
    expect(typeof COMPANIES).toBe('object');
    expect(Object.keys(COMPANIES).length).toBeGreaterThan(0);
  });

  it('should have valid company structure', () => {
    Object.values(COMPANIES).forEach((company) => {
      expect(company).toHaveProperty('id');
      expect(company).toHaveProperty('displayName');
      expect(company).toHaveProperty('name');
      expect(typeof company.id).toBe('string');
      expect(typeof company.displayName).toBe('string');
      expect(typeof company.name).toBe('string');
    });
  });

  it('should have unique company ids', () => {
    const ids = Object.values(COMPANIES).map((company) => company.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  it('should get all companies as array', () => {
    const companies = getAllCompanies();
    expect(Array.isArray(companies)).toBe(true);
    expect(companies.length).toBeGreaterThan(0);
  });

  it('should include the FarmLink modernization in NRI-NA projects and achievements', () => {
    const nriNa = COMPANIES['nri-na'];
    const achievements = nriNa.achievements ?? [];

    expect(nriNa.projects).toContainEqual({ name: 'FarmLink Modernization', route: 'farmlink-modernization' });
    expect(achievements.some((achievement) => achievement.includes('90-day'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('six-person team'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('1,369 automated parity tests'))).toBe(true);
    expect(
      achievements.some((achievement) =>
        achievement.includes(
          'custom AI skills and plugins for FarmLink to support backlog management, legacy requirements extraction, migration work, and reviews'
        )
      )
    ).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('2026 Insurance Technology Impact Award'))).toBe(
      true
    );
  });

  it('should include the Underwriting Workbench in NRI-NA projects and achievements', () => {
    const nriNa = COMPANIES['nri-na'];
    const achievements = nriNa.achievements ?? [];

    expect(nriNa.projects).toContainEqual({ name: 'Underwriting Workbench', route: 'underwriting-workbench' });
    expect(achievements.some((achievement) => achievement.includes('front-end and API layers'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('email-based intake'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('manual data entry'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('manual approval workflows'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('AI classification pipeline'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('data-enrichment workflows'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('90-day proof of concept'))).toBe(true);
    expect(achievements.some((achievement) => achievement.includes('manual-processing costs'))).toBe(true);
  });
});
