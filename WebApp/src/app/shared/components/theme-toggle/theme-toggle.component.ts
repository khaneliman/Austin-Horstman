import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroSun, heroMoon } from '@ng-icons/heroicons/outline';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ heroSun, heroMoon })],
  template: `
    <button
      (click)="toggleTheme()"
      [title]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
      class="relative p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      [attr.aria-label]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <div class="relative w-5 h-5">
        <!-- Sun icon (visible in dark mode) -->
        <ng-icon
          name="heroSun"
          class="absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 transform"
          [class.rotate-0]="isDarkMode()"
          [class.rotate-90]="!isDarkMode()"
          [class.scale-100]="isDarkMode()"
          [class.scale-0]="!isDarkMode()"
        ></ng-icon>

        <!-- Moon icon (visible in light mode) -->
        <ng-icon
          name="heroMoon"
          class="absolute inset-0 w-5 h-5 text-gray-600 dark:text-gray-200 transition-all duration-300 transform"
          [class.rotate-0]="!isDarkMode()"
          [class.-rotate-90]="isDarkMode()"
          [class.scale-100]="!isDarkMode()"
          [class.scale-0]="isDarkMode()"
        ></ng-icon>
      </div>
    </button>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);

  // Computed signal for reactivity
  isDarkMode = computed(() => this.themeService.theme() === 'dark');

  toggleTheme(): void {
    console.log('Toggle theme clicked - current theme:', this.themeService.getCurrentTheme());
    console.log('HTML element classes before toggle:', document.documentElement.className);
    this.themeService.toggleTheme();
    console.log('Theme after toggle:', this.themeService.getCurrentTheme());
    console.log('HTML element classes after toggle:', document.documentElement.className);
  }
}
