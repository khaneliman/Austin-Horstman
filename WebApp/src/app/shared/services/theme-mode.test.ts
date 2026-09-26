import { describe, expect, it } from 'bun:test';
import { isTheme, resolveTheme } from './theme-mode';

describe('theme mode', () => {
  describe('isTheme', () => {
    it('accepts light and dark only', () => {
      expect(isTheme('light')).toBe(true);
      expect(isTheme('dark')).toBe(true);
      expect(isTheme('Dark')).toBe(false);
      expect(isTheme('')).toBe(false);
      expect(isTheme(null)).toBe(false);
      expect(isTheme(undefined)).toBe(false);
    });
  });

  describe('resolveTheme', () => {
    it('prefers a stored choice over the system setting', () => {
      expect(resolveTheme('light', true)).toBe('light');
      expect(resolveTheme('dark', false)).toBe('dark');
    });

    it('follows the system setting without a valid stored choice', () => {
      expect(resolveTheme(null, true)).toBe('dark');
      expect(resolveTheme(null, false)).toBe('light');
      expect(resolveTheme('sepia', true)).toBe('dark');
    });
  });
});
