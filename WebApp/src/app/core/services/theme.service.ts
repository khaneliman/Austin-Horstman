import { effect, Injectable, inject, Renderer2, RendererFactory2, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private readonly storageKey = 'portfolio-theme';
  private rendererFactory = inject(RendererFactory2);

  // Signal to track current theme
  public theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // Effect to apply theme changes to DOM and localStorage
    effect(() => {
      const currentTheme = this.theme();
      console.log('ThemeService effect: applying theme', currentTheme);
      this.applyTheme(currentTheme);
      this.saveThemeToStorage(currentTheme);
    });
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }

  /**
   * Set a specific theme
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  /**
   * Get the current theme value
   */
  getCurrentTheme(): Theme {
    return this.theme();
  }

  /**
   * Check if current theme is dark
   */
  isDarkMode(): boolean {
    return this.theme() === 'dark';
  }

  /**
   * Get initial theme from localStorage or system preference
   */
  private getInitialTheme(): Theme {
    // Check localStorage first
    const savedTheme = this.getThemeFromStorage();
    if (savedTheme) {
      return savedTheme;
    }

    // Default to light mode instead of system preference for now
    return 'light';
  }

  /**
   * Get theme from localStorage
   */
  private getThemeFromStorage(): Theme | null {
    if (typeof window === 'undefined') return null;

    const saved = localStorage.getItem(this.storageKey);
    return saved === 'dark' || saved === 'light' ? saved : null;
  }

  /**
   * Save theme to localStorage
   */
  private saveThemeToStorage(theme: Theme): void {
    if (typeof window === 'undefined') return;

    localStorage.setItem(this.storageKey, theme);
  }

  /**
   * Get system theme preference
   */
  private getSystemPreference(): Theme {
    if (typeof window === 'undefined') return 'light';

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * Apply theme to DOM
   */
  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;

    const html = document.documentElement;

    // Remove both classes first to ensure clean state
    this.renderer.removeClass(html, 'dark');
    this.renderer.removeClass(html, 'light');

    if (theme === 'dark') {
      this.renderer.addClass(html, 'dark');
    } else {
      this.renderer.addClass(html, 'light');
    }

    // Set data attribute for CSS targeting
    this.renderer.setAttribute(html, 'data-theme', theme);
  }
}
