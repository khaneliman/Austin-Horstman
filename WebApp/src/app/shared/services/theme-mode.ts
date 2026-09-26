// Light/dark axis helpers, free of Angular imports so the logic is unit
// testable under Bun. Keep in sync with the pre-paint script in index.html.

/** Light/dark axis. */
export type Theme = 'light' | 'dark';

export function isTheme(value: string | null | undefined): value is Theme {
  return value === 'light' || value === 'dark';
}

/** A stored choice wins; without one, follow the operating system setting. */
export function resolveTheme(stored: string | null | undefined, prefersDark: boolean): Theme {
  if (isTheme(stored)) return stored;
  return prefersDark ? 'dark' : 'light';
}
