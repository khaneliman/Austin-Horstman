import { describe, expect, it } from 'bun:test';
import { fuzzyMatch, highlightMatch } from './fuzzy-match';

describe('fuzzyMatch', () => {
  it('returns score with no indices for empty query', () => {
    const result = fuzzyMatch('', 'anything');
    expect(result).not.toBeNull();
    expect(result?.indices).toEqual([]);
  });

  it('returns null when no subsequence match', () => {
    expect(fuzzyMatch('xyz', 'Renaissance Learning')).toBeNull();
  });

  it('matches simple subsequence', () => {
    const result = fuzzyMatch('rl', 'Renaissance Learning');
    expect(result).not.toBeNull();
    expect(result?.indices).toEqual([0, 12]);
  });

  it('scores word-start matches higher than mid-word matches', () => {
    const wordStarts = fuzzyMatch('mom', 'Mile of Music');
    const midWord = fuzzyMatch('mom', 'mommoth');
    expect(wordStarts).not.toBeNull();
    expect(midWord).not.toBeNull();
    expect(wordStarts!.score).toBeGreaterThan(midWord!.score);
  });

  it('scores consecutive matches higher than gap-separated matches', () => {
    // both targets have 'b' and 'c' mid-word — only the gap differs
    const consecutive = fuzzyMatch('bc', 'abcdef');
    const gapped = fuzzyMatch('bc', 'abxxxxxxcd');
    expect(consecutive).not.toBeNull();
    expect(gapped).not.toBeNull();
    expect(consecutive!.score).toBeGreaterThan(gapped!.score);
  });

  it('is case-insensitive', () => {
    expect(fuzzyMatch('NRI', 'nri-na')).not.toBeNull();
    expect(fuzzyMatch('nri', 'NRI-NA')).not.toBeNull();
  });
});

describe('highlightMatch', () => {
  it('returns single unmatched segment when no indices', () => {
    expect(highlightMatch('hello', [])).toEqual([{ text: 'hello', matched: false }]);
  });

  it('splits text into matched and unmatched segments', () => {
    const segments = highlightMatch('Renaissance', [0, 1]);
    expect(segments).toEqual([
      { text: 'Re', matched: true },
      { text: 'naissance', matched: false },
    ]);
  });

  it('handles non-contiguous matches', () => {
    const segments = highlightMatch('abcde', [0, 2, 4]);
    expect(segments).toEqual([
      { text: 'a', matched: true },
      { text: 'b', matched: false },
      { text: 'c', matched: true },
      { text: 'd', matched: false },
      { text: 'e', matched: true },
    ]);
  });
});
