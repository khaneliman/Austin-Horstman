import { describe, expect, it } from 'bun:test';
import { AVAILABLE_THEMES, DEFAULT_PALETTE, isThemeName, normalizeThemeName } from './theme-palette';

describe('ThemeService palette logic', () => {
  describe('AVAILABLE_THEMES', () => {
    it('exposes the registered palettes', () => {
      expect(AVAILABLE_THEMES.map((t) => t.id)).toEqual(['classic', 'catppuccin', 'tokyo-night']);
    });

    it('defaults to classic', () => {
      expect(DEFAULT_PALETTE).toBe('classic');
      expect(AVAILABLE_THEMES.some((t) => t.id === DEFAULT_PALETTE)).toBe(true);
    });
  });

  describe('isThemeName', () => {
    it('accepts registered palettes', () => {
      expect(isThemeName('classic')).toBe(true);
      expect(isThemeName('catppuccin')).toBe(true);
    });

    it('rejects unknown / empty values', () => {
      expect(isThemeName('dracula')).toBe(false);
      expect(isThemeName('')).toBe(false);
      expect(isThemeName(null)).toBe(false);
      expect(isThemeName(undefined)).toBe(false);
    });
  });

  describe('normalizeThemeName', () => {
    it('passes through valid palettes', () => {
      expect(normalizeThemeName('catppuccin')).toBe('catppuccin');
      expect(normalizeThemeName('classic')).toBe('classic');
    });

    it('falls back to the default for invalid input', () => {
      expect(normalizeThemeName(null)).toBe(DEFAULT_PALETTE);
      expect(normalizeThemeName('nope')).toBe(DEFAULT_PALETTE);
    });
  });
});
