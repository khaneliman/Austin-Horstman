// Palette axis types + helpers, free of Angular imports so the logic is unit
// testable under Bun without pulling in the Angular DI runtime.

/** Palette axis — keep in sync with the themes defined in `_themes.scss`. */
export type ThemeName = 'classic' | 'catppuccin';

export interface ThemeOption {
  readonly id: ThemeName;
  readonly label: string;
}

/** Selectable palettes, surfaced by the theme picker. Order = display order. */
export const AVAILABLE_THEMES: readonly ThemeOption[] = [
  { id: 'classic', label: 'Classic' },
  { id: 'catppuccin', label: 'Catppuccin' },
];

export const DEFAULT_PALETTE: ThemeName = 'classic';

export function isThemeName(value: string | null | undefined): value is ThemeName {
  return value != null && AVAILABLE_THEMES.some((t) => t.id === value);
}

/** Coerce any stored/external value to a valid palette, falling back to the default. */
export function normalizeThemeName(value: string | null | undefined): ThemeName {
  return isThemeName(value) ? value : DEFAULT_PALETTE;
}
