/** Decelerating ease (easeOutCubic) over a normalized 0..1 progress. */
export function easeOutCubic(progress: number): number {
  const clamped = Math.min(Math.max(progress, 0), 1);
  return 1 - Math.pow(1 - clamped, 3);
}

/** Eased integer value at `elapsed` ms of a `duration`-ms count up to `target`. */
export function countUpValue(elapsed: number, duration: number, target: number): number {
  if (duration <= 0) return target;
  const progress = Math.min(elapsed / duration, 1);
  return Math.round(easeOutCubic(progress) * target);
}

/** Locale-grouped display string with an optional trailing unit (e.g. '+'). */
export function formatCount(value: number, suffix = ''): string {
  return value.toLocaleString() + suffix;
}
