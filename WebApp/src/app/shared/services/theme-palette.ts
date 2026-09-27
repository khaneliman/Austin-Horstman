// Palette axis types + helpers, free of Angular imports so the logic is unit
// testable under Bun without pulling in the Angular DI runtime.

/** Palette axis — keep in sync with the themes defined in `_themes.scss`. */
export type ThemeName = 'classic' | 'catppuccin' | 'tokyo-night' | 'gruvbox' | 'solarized';

export interface ThemeOption {
  readonly id: ThemeName;
  readonly label: string;
  /** Signature accent hexes, shown as decorative swatches in the picker. */
  readonly swatches: readonly [string, string, string];
}

/**
 * Selectable palettes, surfaced by the theme picker. Order = display order.
 * Swatches use each colorscheme's signature accents in light and dark mode.
 */
export const AVAILABLE_THEMES: readonly ThemeOption[] = [
  { id: 'classic', label: 'Classic', swatches: ['#0d9488', '#6366f1', '#f43f5e'] },
  { id: 'catppuccin', label: 'Catppuccin', swatches: ['#89b4fa', '#cba6f7', '#a6e3a1'] },
  { id: 'tokyo-night', label: 'Tokyo Night', swatches: ['#7aa2f7', '#bb9af7', '#7dcfff'] },
  { id: 'gruvbox', label: 'Gruvbox', swatches: ['#fabd2f', '#fb4934', '#8ec07c'] },
  { id: 'solarized', label: 'Solarized', swatches: ['#268bd2', '#2aa198', '#b58900'] },
];

export const DEFAULT_PALETTE: ThemeName = 'classic';

export function isThemeName(value: string | null | undefined): value is ThemeName {
  return value != null && AVAILABLE_THEMES.some((t) => t.id === value);
}

/** Coerce any stored/external value to a valid palette, falling back to the default. */
export function normalizeThemeName(value: string | null | undefined): ThemeName {
  return isThemeName(value) ? value : DEFAULT_PALETTE;
}
