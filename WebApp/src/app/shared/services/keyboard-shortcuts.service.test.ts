import { describe, expect, it } from 'bun:test';
import { isEditableTarget, resolveGPrefixRoute, SHORTCUT_BINDINGS } from './keyboard-shortcuts.helpers';

describe('keyboard-shortcuts helpers', () => {
  describe('resolveGPrefixRoute', () => {
    it('maps known keys to routes', () => {
      expect(resolveGPrefixRoute('h')).toBe('/home');
      expect(resolveGPrefixRoute('a')).toBe('/personal/about');
      expect(resolveGPrefixRoute('c')).toBe('/personal/contact');
      expect(resolveGPrefixRoute('r')).toBe('/personal/resume');
      expect(resolveGPrefixRoute('p')).toBe('/projects');
      expect(resolveGPrefixRoute('n')).toBe('/now');
    });

    it('is case-insensitive', () => {
      expect(resolveGPrefixRoute('H')).toBe('/home');
    });

    it('returns undefined for unknown keys', () => {
      expect(resolveGPrefixRoute('z')).toBeUndefined();
      expect(resolveGPrefixRoute('')).toBeUndefined();
    });
  });

  describe('isEditableTarget', () => {
    const target = (tagName: string, isContentEditable = false): EventTarget =>
      ({ tagName, isContentEditable }) as unknown as EventTarget;

    it('returns false for null', () => {
      expect(isEditableTarget(null)).toBe(false);
    });

    it('returns true for inputs, textareas, and selects', () => {
      expect(isEditableTarget(target('INPUT'))).toBe(true);
      expect(isEditableTarget(target('TEXTAREA'))).toBe(true);
      expect(isEditableTarget(target('SELECT'))).toBe(true);
    });

    it('returns true for contentEditable elements', () => {
      expect(isEditableTarget(target('DIV', true))).toBe(true);
    });

    it('returns false for non-editable elements', () => {
      expect(isEditableTarget(target('DIV'))).toBe(false);
      expect(isEditableTarget(target('BUTTON'))).toBe(false);
    });
  });

  describe('SHORTCUT_BINDINGS', () => {
    it('exports a non-empty readonly list', () => {
      expect(SHORTCUT_BINDINGS.length).toBeGreaterThan(0);
      expect(SHORTCUT_BINDINGS.every((b) => b.sequence && b.description)).toBe(true);
    });
  });
});
