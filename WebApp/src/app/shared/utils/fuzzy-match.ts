export interface FuzzyMatchResult {
  score: number;
  indices: readonly number[];
}

const WORD_BOUNDARY = /[\s\-_./:]/;

export function fuzzyMatch(query: string, text: string): FuzzyMatchResult | null {
  if (!query) return { score: 0, indices: [] };
  if (!text) return null;

  const q = query.toLowerCase();
  const t = text.toLowerCase();

  const indices: number[] = [];
  let score = 0;
  let qi = 0;
  let lastMatch = -2;

  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] !== q[qi]) continue;

    const curr = text[ti] ?? '';
    const prev = ti > 0 ? (text[ti - 1] ?? '') : '';
    const consecutive = ti === lastMatch + 1;
    const camelBoundary = prev !== '' && prev === prev.toLowerCase() && curr !== curr.toLowerCase();
    const wordStart = ti === 0 || (prev !== '' && WORD_BOUNDARY.test(prev)) || camelBoundary;

    let charScore = 1;
    if (consecutive) charScore += 4;
    if (wordStart) charScore += 8;
    if (ti === 0) charScore += 4;

    score += charScore;
    indices.push(ti);
    lastMatch = ti;
    qi++;
  }

  if (qi < q.length) return null;

  const last = indices[indices.length - 1] ?? 0;
  const first = indices[0] ?? 0;
  const remaining = text.length - last - 1;
  score -= Math.min(remaining, 10) * 0.2;
  score -= Math.min(first, 10) * 0.5;

  return { score, indices };
}

export function highlightMatch(text: string, indices: readonly number[]): { text: string; matched: boolean }[] {
  if (!indices.length) return [{ text, matched: false }];

  const segments: { text: string; matched: boolean }[] = [];
  const indexSet = new Set(indices);
  let buffer = '';
  let bufferMatched = indexSet.has(0);

  for (let i = 0; i < text.length; i++) {
    const ch = text[i] ?? '';
    const matched = indexSet.has(i);
    if (matched !== bufferMatched) {
      if (buffer) segments.push({ text: buffer, matched: bufferMatched });
      buffer = ch;
      bufferMatched = matched;
    } else {
      buffer += ch;
    }
  }
  if (buffer) segments.push({ text: buffer, matched: bufferMatched });

  return segments;
}
