export type ArrowDirection = 'left' | 'right' | 'up' | 'down';

/**
 * Compute the next index in a roving-tabindex grid given the current index,
 * arrow direction, total item count, and column count. Returns null when no
 * movement is appropriate (e.g. at boundaries with no wrap target).
 */
export function nextGridIndex(current: number, direction: ArrowDirection, count: number, cols: number): number | null {
  if (count <= 0 || cols <= 0) return null;
  if (current < 0 || current >= count) return null;

  switch (direction) {
    case 'right':
      return current + 1 < count ? current + 1 : null;
    case 'left':
      return current - 1 >= 0 ? current - 1 : null;
    case 'down': {
      const next = current + cols;
      return next < count ? next : null;
    }
    case 'up': {
      const next = current - cols;
      return next >= 0 ? next : null;
    }
  }
}

/**
 * Group anchors into rows by their top offset (within a 1px tolerance) and
 * return the count of items in the first row. Falls back to `anchors.length`
 * when grouping cannot be determined (e.g. zero-height elements during SSR).
 */
export function inferGridColumns(tops: readonly number[]): number {
  const firstTop = tops[0];
  if (firstTop === undefined) return 0;
  let cols = 0;
  for (const top of tops) {
    if (Math.abs(top - firstTop) <= 1) cols++;
    else break;
  }
  return cols || tops.length;
}
