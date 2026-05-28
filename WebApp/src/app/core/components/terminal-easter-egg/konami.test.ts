import { describe, expect, it } from 'bun:test';
import { KONAMI_SEQUENCE, matchesSequence, pushKey } from './konami';

describe('pushKey', () => {
  it('appends while the buffer is shorter than the sequence', () => {
    expect(pushKey(['ArrowUp'], 'ArrowUp')).toEqual(['ArrowUp', 'ArrowUp']);
  });

  it('drops the oldest key once at capacity', () => {
    const full = [...KONAMI_SEQUENCE];
    const next = pushKey(full, 'x');
    expect(next.length).toBe(KONAMI_SEQUENCE.length);
    expect(next.at(-1)).toBe('x');
    expect(next.at(0)).toBe('ArrowUp');
  });
});

describe('matchesSequence', () => {
  it('matches the full Konami code', () => {
    const buffer = KONAMI_SEQUENCE.reduce<string[]>((buf, key) => pushKey(buf, key), []);
    expect(matchesSequence(buffer)).toBe(true);
  });

  it('matches even when junk keys preceded the run', () => {
    const buffer = ['q', 'w', 'e', ...KONAMI_SEQUENCE].reduce<string[]>((buf, key) => pushKey(buf, key), []);
    expect(matchesSequence(buffer)).toBe(true);
  });

  it('is case-insensitive on the b/a tail', () => {
    const buffer = [...KONAMI_SEQUENCE.slice(0, 8), 'B', 'A'];
    expect(matchesSequence(buffer)).toBe(true);
  });

  it('rejects an incomplete or wrong sequence', () => {
    expect(matchesSequence(['ArrowUp', 'ArrowUp'])).toBe(false);
    const wrong = [...KONAMI_SEQUENCE.slice(0, 9), 'b'];
    expect(matchesSequence(wrong)).toBe(false);
  });
});
