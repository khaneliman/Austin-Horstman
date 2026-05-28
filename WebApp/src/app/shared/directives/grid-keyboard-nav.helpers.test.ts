import { describe, expect, it } from 'bun:test';
import { inferGridColumns, nextGridIndex } from './grid-keyboard-nav.helpers';

describe('nextGridIndex', () => {
  it('moves right within bounds', () => {
    expect(nextGridIndex(0, 'right', 6, 2)).toBe(1);
    expect(nextGridIndex(4, 'right', 6, 2)).toBe(5);
  });

  it('returns null when right would overflow', () => {
    expect(nextGridIndex(5, 'right', 6, 2)).toBeNull();
  });

  it('moves left within bounds', () => {
    expect(nextGridIndex(3, 'left', 6, 2)).toBe(2);
  });

  it('returns null when left would underflow', () => {
    expect(nextGridIndex(0, 'left', 6, 2)).toBeNull();
  });

  it('jumps a row on down', () => {
    expect(nextGridIndex(0, 'down', 6, 2)).toBe(2);
    expect(nextGridIndex(1, 'down', 6, 2)).toBe(3);
    expect(nextGridIndex(2, 'down', 6, 3)).toBe(5);
  });

  it('returns null when down has no row to land on', () => {
    expect(nextGridIndex(4, 'down', 6, 2)).toBeNull();
    expect(nextGridIndex(5, 'down', 6, 2)).toBeNull();
  });

  it('jumps a row on up', () => {
    expect(nextGridIndex(4, 'up', 6, 2)).toBe(2);
    expect(nextGridIndex(2, 'up', 6, 2)).toBe(0);
  });

  it('returns null when up has no row to land on', () => {
    expect(nextGridIndex(0, 'up', 6, 2)).toBeNull();
    expect(nextGridIndex(1, 'up', 6, 2)).toBeNull();
  });

  it('returns null for invalid inputs', () => {
    expect(nextGridIndex(0, 'right', 0, 2)).toBeNull();
    expect(nextGridIndex(0, 'right', 4, 0)).toBeNull();
    expect(nextGridIndex(-1, 'right', 4, 2)).toBeNull();
    expect(nextGridIndex(4, 'right', 4, 2)).toBeNull();
  });
});

describe('inferGridColumns', () => {
  it('returns 0 for empty input', () => {
    expect(inferGridColumns([])).toBe(0);
  });

  it('counts items sharing the first row top', () => {
    expect(inferGridColumns([10, 10, 60, 60])).toBe(2);
    expect(inferGridColumns([10, 10, 10, 60, 60, 60])).toBe(3);
  });

  it('allows a 1px tolerance', () => {
    expect(inferGridColumns([10, 10.5, 60, 60])).toBe(2);
  });

  it('falls back to total length when all items share a row', () => {
    expect(inferGridColumns([10, 10, 10])).toBe(3);
  });
});
