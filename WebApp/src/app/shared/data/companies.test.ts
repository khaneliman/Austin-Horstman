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
});
