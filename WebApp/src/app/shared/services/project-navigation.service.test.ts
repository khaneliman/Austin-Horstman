import { describe, expect, it } from 'bun:test';
import { ProjectNavigationService } from './project-navigation.service';

describe('ProjectNavigationService', () => {
  it('should create service', () => {
    const service = new ProjectNavigationService();
    expect(service).toBeDefined();
  });

  it('should get navigation items for valid company', () => {
    const service = new ProjectNavigationService();
    const navigation = service.getNavigationItems('corebts');

    expect(navigation).toBeDefined();
    expect(Array.isArray(navigation)).toBe(true);
    expect(navigation.length).toBeGreaterThan(0);
  });

  it('should return empty array for invalid company', () => {
    const service = new ProjectNavigationService();
    const navigation = service.getNavigationItems('invalid-company');

    expect(Array.isArray(navigation)).toBe(true);
    expect(navigation.length).toBe(0);
  });

  it('should have valid navigation item structure', () => {
    const service = new ProjectNavigationService();
    const navigation = service.getNavigationItems('corebts');

    navigation.forEach((item) => {
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('route');
      expect(item).toHaveProperty('isActive');
      expect(typeof item.name).toBe('string');
      expect(typeof item.route).toBe('string');
      expect(typeof item.isActive).toBe('boolean');
    });
  });

  it('should generate correct routes', () => {
    const service = new ProjectNavigationService();
    const navigation = service.getNavigationItems('corebts');

    navigation.forEach((item) => {
      expect(item.route).toMatch(/^\/projects\/professional\/corebts\//);
    });
  });
});
