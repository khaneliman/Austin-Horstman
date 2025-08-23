import { beforeEach, describe, expect, it } from 'bun:test';
import { LogoStylingService } from './logo-styling.service';

describe('LogoStylingService', () => {
  let service: LogoStylingService;

  beforeEach(() => {
    service = new LogoStylingService();
  });

  describe('getLogoBackgroundStyle', () => {
    it('should return white background for "white"', () => {
      expect(service.getLogoBackgroundStyle('white')).toBe('#ffffff');
    });

    it('should return black background for "black"', () => {
      expect(service.getLogoBackgroundStyle('black')).toBe('#000000');
    });

    it('should return dark background for "dark"', () => {
      expect(service.getLogoBackgroundStyle('dark')).toBe('#111827');
    });

    it('should return default white background for undefined', () => {
      expect(service.getLogoBackgroundStyle(undefined)).toBe('#ffffff');
    });
  });

  describe('getLogoBackgroundClasses', () => {
    it('should return correct CSS class for "white"', () => {
      expect(service.getLogoBackgroundClasses('white')).toBe('bg-white');
    });

    it('should return correct CSS class for "black"', () => {
      expect(service.getLogoBackgroundClasses('black')).toBe('bg-black');
    });

    it('should return correct CSS class for "dark"', () => {
      expect(service.getLogoBackgroundClasses('dark')).toBe('bg-gray-900');
    });

    it('should return default CSS class for undefined', () => {
      expect(service.getLogoBackgroundClasses(undefined)).toBe('bg-white');
    });
  });

  describe('service consistency', () => {
    it('should have consistent default values between methods', () => {
      const styleDefault = service.getLogoBackgroundStyle(undefined);
      const classDefault = service.getLogoBackgroundClasses(undefined);

      expect(styleDefault).toBe('#ffffff');
      expect(classDefault).toBe('bg-white');
    });

    it('should handle all valid logo background types', () => {
      const validTypes: ('white' | 'black' | 'dark' | undefined)[] = ['white', 'black', 'dark', undefined];

      validTypes.forEach((type) => {
        expect(() => service.getLogoBackgroundStyle(type)).not.toThrow();
        expect(() => service.getLogoBackgroundClasses(type)).not.toThrow();
        expect(service.getLogoBackgroundStyle(type)).toBeDefined();
        expect(service.getLogoBackgroundClasses(type)).toBeDefined();
      });
    });
  });
});
