import { isPlatformBrowser } from '@angular/common';
import { effect, Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { AVAILABLE_THEMES, DEFAULT_PALETTE, isThemeName, normalizeThemeName, ThemeName } from './theme-palette';

export { AVAILABLE_THEMES, DEFAULT_PALETTE, isThemeName, normalizeThemeName } from './theme-palette';
export type { ThemeName, ThemeOption } from './theme-palette';

/** Light/dark axis. */
export type Theme = 'light' | 'dark';

const MODE_STORAGE_KEY = 'theme';
const PALETTE_STORAGE_KEY = 'theme-palette';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _theme = signal<Theme>('light');
  private readonly _palette = signal<ThemeName>(DEFAULT_PALETTE);

  /** Light/dark mode. */
  readonly theme = this._theme.asReadonly();
  readonly isDarkMode = signal(false);

  /** Active palette and the list of palettes available to pick from. */
  readonly palette = this._palette.asReadonly();
  readonly availableThemes = AVAILABLE_THEMES;

  constructor() {
    if (this.isBrowser) {
      this.initialize();
      this.setupEffects();
    }
  }

  private initialize(): void {
    const savedMode = localStorage.getItem(MODE_STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(savedMode || (prefersDark ? 'dark' : 'light'));

    this.setThemeName(normalizeThemeName(localStorage.getItem(PALETTE_STORAGE_KEY)));
  }

  private setupEffects(): void {
    effect(() => {
      const isDark = this._theme() === 'dark';
      this.isDarkMode.set(isDark);
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem(MODE_STORAGE_KEY, this._theme());
    });

    effect(() => {
      const palette = this._palette();
      document.documentElement.dataset['theme'] = palette;
      localStorage.setItem(PALETTE_STORAGE_KEY, palette);
    });
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
  }

  toggleTheme(): void {
    this.setTheme(this._theme() === 'light' ? 'dark' : 'light');
  }

  /** Switch palette; ignores unknown names. */
  setThemeName(name: ThemeName): void {
    if (isThemeName(name)) {
      this._palette.set(name);
    }
  }
}
