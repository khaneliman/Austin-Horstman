import { describe, it, expect } from 'bun:test';
import { SocialLinksService } from './social-links.service';

describe('SocialLinksService', () => {
  it('should create social links service', () => {
    const service = new SocialLinksService();
    expect(service).toBeDefined();
  });

  it('should return social links signal', () => {
    const service = new SocialLinksService();
    const links = service.socialLinks();

    expect(Array.isArray(links)).toBe(true);
    expect(links.length).toBeGreaterThan(0);
  });

  it('should have valid link structure', () => {
    const service = new SocialLinksService();
    const links = service.socialLinks();

    links.forEach(link => {
      expect(link).toHaveProperty('platform');
      expect(link).toHaveProperty('link');
      expect(link).toHaveProperty('iconName');
      expect(typeof link.platform).toBe('string');
      expect(typeof link.link).toBe('string');
      expect(typeof link.iconName).toBe('string');
    });
  });
});
