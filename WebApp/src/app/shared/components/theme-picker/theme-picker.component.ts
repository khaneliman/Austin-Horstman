import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheck, heroSwatch } from '@ng-icons/heroicons/outline';
import { ThemeName, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroSwatch, heroCheck })],
  template: `
    <div class="relative">
      <button
        (click)="toggleOpen()"
        type="button"
        class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-all duration-200 hover:bg-stone-200/60 hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-[var(--color-surface)] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-200 dark:focus:ring-offset-slate-950"
        [attr.aria-expanded]="isOpen()"
        aria-haspopup="true"
        aria-label="Choose color theme"
        title="Choose color theme"
      >
        <ng-icon name="heroSwatch" class="w-5 h-5" />
      </button>

      @if (isOpen()) {
        <div
          class="absolute right-0 mt-2 w-44 rounded-xl bg-[var(--color-surface-raised)] py-2 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
          role="menu"
          aria-label="Color themes"
        >
          @for (option of themeService.availableThemes; track option.id) {
            <button
              (click)="select(option.id)"
              type="button"
              role="menuitemradio"
              [attr.aria-checked]="themeService.palette() === option.id"
              class="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-slate-700 transition-colors duration-150 hover:bg-stone-100 hover:text-teal-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-teal-200"
            >
              <span>{{ option.label }}</span>
              @if (themeService.palette() === option.id) {
                <ng-icon name="heroCheck" class="h-4 w-4 text-teal-600 dark:text-teal-300" />
              }
            </button>
          }
        </div>
      }
    </div>
  `,
})
export class ThemePickerComponent {
  protected readonly themeService = inject(ThemeService);
  private readonly host = inject(ElementRef<HTMLElement>);

  protected readonly isOpen = signal(false);

  protected toggleOpen(): void {
    this.isOpen.update((open) => !open);
  }

  protected select(name: ThemeName): void {
    this.themeService.setThemeName(name);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (this.isOpen() && !this.host.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.isOpen.set(false);
  }
}
