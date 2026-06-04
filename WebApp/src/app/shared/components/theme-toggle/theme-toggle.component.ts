import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroSun, heroMoon })],
  template: `
    <button
      (click)="toggleTheme()"
      type="button"
      class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-all duration-200 hover:bg-stone-200/60 hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-[var(--color-surface)] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-200 dark:focus:ring-offset-slate-950"
      [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
      title="{{ themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode' }}"
    >
      @if (themeService.isDarkMode()) {
        <ng-icon name="heroSun" class="w-5 h-5" />
      } @else {
        <ng-icon name="heroMoon" class="w-5 h-5" />
      }
    </button>
  `,
})
export class ThemeToggleComponent {
  protected readonly themeService = inject(ThemeService);

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
