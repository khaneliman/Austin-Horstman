import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogoStylingService {
  /**
   * Get the CSS background color value for a logo background type
   */
  getLogoBackgroundStyle(
    logoBackground: 'white' | 'black' | 'dark' | undefined
  ): string {
    switch (logoBackground) {
      case 'white':
        return '#ffffff';
      case 'black':
        return '#000000';
      case 'dark':
        return '#111827';
      default:
        return '#ffffff';
    }
  }

  /**
   * Get CSS classes for logo background
   */
  getLogoBackgroundClasses(
    logoBackground: 'white' | 'black' | 'dark' | undefined
  ): string {
    switch (logoBackground) {
      case 'white':
        return 'bg-white';
      case 'black':
        return 'bg-black';
      case 'dark':
        return 'bg-gray-900';
      default:
        return 'bg-white';
    }
  }
}
