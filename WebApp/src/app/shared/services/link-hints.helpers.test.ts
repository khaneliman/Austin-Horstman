import { describe, expect, it } from 'bun:test';
import { filterHintsByQuery, generateHintLabels, LINK_HINT_ALPHABET } from './link-hints.helpers';

describe('link-hints helpers', () => {
  describe('generateHintLabels', () => {
    it('returns an empty list for non-positive counts', () => {
      expect(generateHintLabels(0)).toEqual([]);
      expect(generateHintLabels(-3)).toEqual([]);
    });

    it('produces single-character labels when count fits in the alphabet', () => {
      const labels = generateHintLabels(4);
      expect(labels).toEqual(['a', 's', 'd', 'f']);
    });

    it('uses uniform-length labels when count exceeds the alphabet', () => {
      const labels = generateHintLabels(12);
      expect(labels.length).toBe(12);
      expect(new Set(labels.map((l) => l.length))).toEqual(new Set([2]));
    });

    it('produces unique labels', () => {
      const labels = generateHintLabels(50);
      expect(new Set(labels).size).toBe(50);
    });

    it('honours a custom alphabet', () => {
      const labels = generateHintLabels(3, 'xyz');
      expect(labels).toEqual(['x', 'y', 'z']);
    });

    it('keeps the prefix-free property within a uniform-length set', () => {
      const labels = generateHintLabels(LINK_HINT_ALPHABET.length + 5);
      for (const a of labels) {
        for (const b of labels) {
          if (a !== b) expect(b.startsWith(a)).toBe(false);
        }
      }
    });
  });

  describe('filterHintsByQuery', () => {
    const labels = ['aa', 'as', 'ad', 'sf', 'sg'];

    it('returns all labels when the query is empty', () => {
      const result = filterHintsByQuery(labels, '');
      expect(result.remaining).toEqual(labels);
      expect(result.exact).toBeNull();
    });

    it('keeps only labels with the query as a prefix', () => {
      const result = filterHintsByQuery(labels, 'a');
      expect(result.remaining).toEqual(['aa', 'as', 'ad']);
      expect(result.exact).toBeNull();
    });

    it('reports an exact match when one label uniquely equals the query', () => {
      const result = filterHintsByQuery(labels, 'sf');
      expect(result.exact).toBe('sf');
      expect(result.remaining).toEqual(['sf']);
    });

    it('returns no matches when the query has no prefix match', () => {
      const result = filterHintsByQuery(labels, 'q');
      expect(result.remaining).toEqual([]);
      expect(result.exact).toBeNull();
    });

    it('is case-insensitive on the query side', () => {
      const result = filterHintsByQuery(labels, 'AA');
      expect(result.exact).toBe('aa');
    });
  });
});
