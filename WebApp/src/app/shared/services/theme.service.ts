import { isPlatformBrowser } from '@angular/common';
import { computed, DestroyRef, effect, Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isTheme, resolveTheme, Theme } from './theme-mode';
import { AVAILABLE_THEMES, DEFAULT_PALETTE, isThemeName, normalizeThemeName, ThemeName } from './theme-palette';

export type { Theme } from './theme-mode';
export type { ThemeName, ThemeOption } from './theme-palette';
export { AVAILABLE_THEMES, DEFAULT_PALETTE, isThemeName, normalizeThemeName } from './theme-palette';

const MODE_STORAGE_KEY = 'theme';
const PALETTE_STORAGE_KEY = 'theme-palette';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly destroyRef = inject(DestroyRef);

  private readonly _theme = signal<Theme>('light');
  private readonly _palette = signal<ThemeName>(DEFAULT_PALETTE);

  /** Light/dark mode. */
  readonly theme = this._theme.asReadonly();
  readonly isDarkMode = computed(() => this._theme() === 'dark');

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
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    this._theme.set(resolveTheme(localStorage.getItem(MODE_STORAGE_KEY), systemDark.matches));

    // Only a mode the visitor picked is stored, so keep following the system
    // setting until they pick one.
    const followSystem = (event: MediaQueryListEvent) => {
      if (!isTheme(localStorage.getItem(MODE_STORAGE_KEY))) {
        this._theme.set(event.matches ? 'dark' : 'light');
      }
    };
    systemDark.addEventListener('change', followSystem);
    this.destroyRef.onDestroy(() => systemDark.removeEventListener('change', followSystem));

    this.setThemeName(normalizeThemeName(localStorage.getItem(PALETTE_STORAGE_KEY)));
  }

  private setupEffects(): void {
    effect(() => {
      document.documentElement.classList.toggle('dark', this._theme() === 'dark');
    });

    effect(() => {
      const palette = this._palette();
      document.documentElement.dataset['theme'] = palette;
      localStorage.setItem(PALETTE_STORAGE_KEY, palette);
    });
  }

  /** Apply and remember an explicit light/dark choice. */
  setTheme(theme: Theme): void {
    this._theme.set(theme);
    if (this.isBrowser) {
      localStorage.setItem(MODE_STORAGE_KEY, theme);
    }
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
