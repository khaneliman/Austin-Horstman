import { describe, expect, it } from 'bun:test';
import { SOCIAL_PROFILES, SocialLinksService } from './social-links.service';

describe('SocialLinksService', () => {
  it('should create social links service', () => {
    const service = new SocialLinksService();
    expect(service).toBeDefined();
  });

  it('should return social links signal', () => {
    const service = new SocialLinksService();
    const links = service.getSocialLinks();

    expect(Array.isArray(links)).toBe(true);
    expect(links.length).toBeGreaterThan(0);
  });

  it('should have valid link structure', () => {
    const service = new SocialLinksService();
    const links = service.getSocialLinks();

    links.forEach((link) => {
      expect(link).toHaveProperty('platform');
      expect(link).toHaveProperty('link');
      expect(link).toHaveProperty('iconName');
      expect(typeof link.platform).toBe('string');
      expect(typeof link.link).toBe('string');
      expect(typeof link.iconName).toBe('string');
    });
  });

  it('should expose canonical social profile URLs', () => {
    const service = new SocialLinksService();
    const links = service.getSocialLinks();

    expect(links.find((link) => link.platform === 'github')?.link).toBe(SOCIAL_PROFILES.links.github);
    expect(links.find((link) => link.platform === 'gitlab')?.link).toBe(SOCIAL_PROFILES.links.gitlab);
    expect(links.find((link) => link.platform === 'linkedin')?.link).toBe(SOCIAL_PROFILES.links.linkedin);
    expect(SOCIAL_PROFILES.twitterHandle).toBe('@khaneliman12');
  });

  it('should only show GitHub and LinkedIn in navigation', () => {
    const service = new SocialLinksService();
    const navPlatforms = service.getNavSocialLinks().map((link) => link.platform);

    expect(navPlatforms).toEqual(['github', 'linkedin']);
  });

  it('should expose structured data links from canonical profiles', () => {
    const service = new SocialLinksService();

    expect(service.getStructuredDataLinks()).toEqual([
      SOCIAL_PROFILES.links.linkedin,
      SOCIAL_PROFILES.links.github,
      SOCIAL_PROFILES.links.gitlab,
    ]);
  });
});
