/** The canonical Konami code: ↑ ↑ ↓ ↓ ← → ← → B A. */
export const KONAMI_SEQUENCE: readonly string[] = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

/** Append a key to the rolling buffer, keeping only the last N for an N-length sequence. */
export function pushKey(
  buffer: readonly string[],
  key: string,
  sequence: readonly string[] = KONAMI_SEQUENCE
): string[] {
  return [...buffer, key].slice(-sequence.length);
}

/** True when the buffer's tail exactly matches the sequence (case-insensitive). */
export function matchesSequence(buffer: readonly string[], sequence: readonly string[] = KONAMI_SEQUENCE): boolean {
  if (buffer.length < sequence.length) return false;
  const tail = buffer.slice(-sequence.length);
  return sequence.every((key, i) => (tail[i] ?? '').toLowerCase() === key.toLowerCase());
}
