import { describe, expect, it } from 'bun:test';
import { countUpValue, easeOutCubic, formatCount } from './count-up.helpers';

describe('easeOutCubic', () => {
  it('anchors at the endpoints', () => {
    expect(easeOutCubic(0)).toBe(0);
    expect(easeOutCubic(1)).toBe(1);
  });

  it('clamps out-of-range progress', () => {
    expect(easeOutCubic(-0.5)).toBe(0);
    expect(easeOutCubic(2)).toBe(1);
  });

  it('decelerates (past the midpoint by half time)', () => {
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.5);
  });
});

describe('countUpValue', () => {
  it('returns 0 at the start and the target at the end', () => {
    expect(countUpValue(0, 1000, 744)).toBe(0);
    expect(countUpValue(1000, 1000, 744)).toBe(744);
  });

  it('clamps elapsed beyond the duration to the target', () => {
    expect(countUpValue(5000, 1000, 744)).toBe(744);
  });

  it('returns the target immediately for a non-positive duration', () => {
    expect(countUpValue(0, 0, 744)).toBe(744);
    expect(countUpValue(0, -10, 744)).toBe(744);
  });

  it('produces a rounded integer mid-flight', () => {
    const mid = countUpValue(500, 1000, 744);
    expect(Number.isInteger(mid)).toBe(true);
    expect(mid).toBeGreaterThan(0);
    expect(mid).toBeLessThan(744);
  });
});

describe('formatCount', () => {
  it('groups thousands', () => {
    expect(formatCount(1395)).toBe((1395).toLocaleString());
  });

  it('appends a suffix when given', () => {
    expect(formatCount(12, '+')).toBe('12+');
  });
});
