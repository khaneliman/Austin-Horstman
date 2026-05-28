export const LINK_HINT_ALPHABET = 'asdfghjkl';

export const LINK_HINT_SELECTOR =
  'a[href], button:not([disabled]), [role="button"]:not([disabled]), [data-card-anchor]';

/**
 * Generate `count` uniform-length labels from `alphabet`. Uniform length keeps
 * the prefix-free property so typing the first character narrows matches and
 * the second completes activation. Returns lowercase strings.
 */
export function generateHintLabels(count: number, alphabet: string = LINK_HINT_ALPHABET): string[] {
  if (count <= 0 || alphabet.length === 0) return [];

  const base = alphabet.length;
  let length = 1;
  let capacity = base;
  while (capacity < count) {
    length++;
    capacity *= base;
  }

  const labels: string[] = [];
  for (let i = 0; i < count; i++) {
    let n = i;
    let label = '';
    for (let pos = 0; pos < length; pos++) {
      label = alphabet[n % base] + label;
      n = Math.floor(n / base);
    }
    labels.push(label);
  }
  return labels;
}

/**
 * Filter labels down to the ones that still match a query prefix, and indicate
 * an exact match (consumer should activate). Inputs and outputs are lowercase.
 */
export interface HintFilterResult {
  remaining: string[];
  exact: string | null;
}

export function filterHintsByQuery(labels: readonly string[], query: string): HintFilterResult {
  const q = query.toLowerCase();
  if (!q) return { remaining: [...labels], exact: null };

  const remaining: string[] = [];
  let exact: string | null = null;
  for (const label of labels) {
    if (label === q) {
      exact = label;
      remaining.push(label);
    } else if (label.startsWith(q)) {
      remaining.push(label);
    }
  }
  return { remaining, exact: exact && remaining.length === 1 ? exact : null };
}
