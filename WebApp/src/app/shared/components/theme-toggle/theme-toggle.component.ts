import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroSun, heroMoon } from '@ng-icons/heroicons/outline';
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
      class="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 transition-all duration-200"
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
