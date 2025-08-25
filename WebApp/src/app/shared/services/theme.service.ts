import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _theme = signal<Theme>('light');

  readonly theme = this._theme.asReadonly();
  readonly isDarkMode = signal(false);

  constructor() {
    if (this.isBrowser) {
      this.initializeTheme();
      this.setupThemeEffect();
    }
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme: Theme = savedTheme || (prefersDark ? 'dark' : 'light');
    this.setTheme(initialTheme);
  }

  private setupThemeEffect(): void {
    effect(() => {
      const currentTheme = this._theme();
      const isDark = currentTheme === 'dark';

      this.isDarkMode.set(isDark);

      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      localStorage.setItem('theme', currentTheme);
    });
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
  }

  toggleTheme(): void {
    const newTheme: Theme = this._theme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}
