import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';

export interface HeroButton {
  text: string;
  variant: 'primary' | 'secondary' | 'outline';
  href?: string;
  routerLink?: string;
  icon?: string;
  action?: () => void;
}

export type HeroVariant = 'default' | 'gradient' | 'minimal' | 'profile';
export type HeroSize = 'sm' | 'md' | 'lg' | 'xl';
export type HeroAlignment = 'left' | 'center';
export type HeroLayout = 'single' | 'split';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgIconComponent, DecorativeBackgroundComponent],
  template: `
    <section [class]="sectionClasses()">
      @if (backgroundElements().length > 0) {
        <app-decorative-background [elements]="backgroundElements()"></app-decorative-background>
      }

      @if (overlayGradient(); as og) {
        <div [class]="'absolute inset-0 ' + og"></div>
      }

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div [class]="contentLayoutClasses()">
          <div [class]="contentClasses()">
            <div [class]="contentStackClasses()">
              @if (badge(); as b) {
                <div class="flex justify-center lg:justify-start">
                  <span [class]="badgeClasses()">{{ b }}</span>
                </div>
              }

              <div>
                <h1 [class]="headingClasses()">{{ title() }}</h1>
                @if (showUnderline()) {
                  <div [class]="underlineClasses()"></div>
                }
              </div>

              @if (subtitle(); as st) {
                <p [class]="subtitleClasses()">{{ st }}</p>
              }

              @if (buttons().length > 0) {
                <div [class]="buttonContainerClasses()">
                  @for (button of buttons(); track button.text) {
                    <a
                      [href]="button.href"
                      [routerLink]="button.routerLink"
                      [class]="getButtonClasses(button)"
                      (click)="button.action && button.action()"
                    >
                      @if (button.icon; as bi) {
                        <ng-icon [name]="bi" size="1.25rem" class="mr-2"></ng-icon>
                      }
                      {{ button.text }}
                    </a>
                  }
                </div>
              }

              @if (showContentSlot()) {
                <div class="mt-8">
                  <ng-content></ng-content>
                </div>
              }
            </div>
          </div>

          @if (showRightContent()) {
            <div class="flex items-center justify-center">
              <ng-content select="[slot=right]"></ng-content>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly badge = input<string>();
  readonly buttons = input<HeroButton[]>([]);
  readonly variant = input<HeroVariant>('default');
  readonly size = input<HeroSize>('lg');
  readonly alignment = input<HeroAlignment>('center');
  readonly layout = input<HeroLayout>('single');
  readonly backgroundGradient = input('from-blue-600 to-purple-600');
  readonly backgroundElements = input<BackgroundElement[]>([]);
  readonly overlayGradient = input<string>();
  readonly showUnderline = input(false);
  readonly showContentSlot = input(false);
  readonly showRightContent = input(false);
  readonly minHeight = input('min-h-screen');
  readonly textColor = input<'light' | 'dark'>('light');

  readonly sectionClasses = computed(() => {
    const classes = ['relative', this.minHeight(), 'overflow-hidden'];
    const v = this.variant();
    if (v === 'gradient' || v === 'default') classes.push(`bg-gradient-to-br ${this.backgroundGradient()}`);
    else if (v === 'minimal') classes.push('bg-[var(--color-paper)] dark:bg-slate-950');
    return classes.join(' ');
  });

  readonly contentLayoutClasses = computed(() => {
    const classes = ['items-center'];
    classes.push(
      this.layout() === 'split' ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16' : 'flex justify-center'
    );
    if (this.size() === 'xl') classes.push('min-h-[72vh] lg:min-h-[80vh]');
    return classes.join(' ');
  });

  readonly contentClasses = computed(() =>
    this.alignment() === 'center' ? 'text-center' : 'text-center lg:text-left'
  );

  readonly contentStackClasses = computed(() => {
    const classes = ['space-y-6'];
    const s = this.size();
    if (s === 'lg' || s === 'xl') classes.push('lg:space-y-8');
    return classes.join(' ');
  });

  readonly headingClasses = computed(() => {
    const classes: string[] = [];
    switch (this.size()) {
      case 'sm':
        classes.push('text-3xl lg:text-4xl');
        break;
      case 'md':
        classes.push('text-4xl lg:text-5xl');
        break;
      case 'lg':
        classes.push('text-4xl sm:text-5xl lg:text-6xl');
        break;
      case 'xl':
        classes.push('text-4xl sm:text-5xl lg:text-7xl');
        break;
    }
    classes.push('font-bold', 'leading-[1.05]', 'mb-4', 'tracking-normal');
    classes.push(this.textColor() === 'light' ? 'text-white' : 'text-slate-950 dark:text-slate-50');
    return classes.join(' ');
  });

  readonly subtitleClasses = computed(() => {
    const classes = ['leading-relaxed'];
    switch (this.size()) {
      case 'sm':
        classes.push('text-lg');
        break;
      case 'md':
        classes.push('text-xl');
        break;
      case 'lg':
      case 'xl':
        classes.push('text-lg sm:text-xl lg:text-2xl');
        break;
    }
    classes.push(
      this.textColor() === 'light' ? 'text-slate-100 max-w-2xl' : 'text-slate-600 dark:text-slate-300 max-w-2xl'
    );
    if (this.alignment() === 'center') classes.push('mx-auto');
    return classes.join(' ');
  });

  readonly badgeClasses = computed(() => {
    const classes = ['px-4 py-2 text-sm font-medium rounded-full'];
    classes.push(
      this.textColor() === 'light'
        ? 'bg-white/15 text-white backdrop-blur-sm border border-white/20'
        : 'bg-teal-100 text-teal-900 dark:bg-teal-950/60 dark:text-teal-200'
    );
    return classes.join(' ');
  });

  readonly underlineClasses = computed(() => {
    const classes: string[] = [];
    switch (this.size()) {
      case 'sm':
        classes.push('w-16');
        break;
      case 'md':
        classes.push('w-20');
        break;
      case 'lg':
      case 'xl':
        classes.push('w-24');
        break;
    }
    classes.push('h-1', 'bg-gradient-to-r', 'from-teal-300', 'to-amber-300', 'rounded-full');
    classes.push(this.alignment() === 'center' ? 'mx-auto' : 'mx-auto', 'lg:mx-0');
    return classes.join(' ');
  });

  readonly buttonContainerClasses = computed(() => {
    const classes = ['flex flex-wrap gap-4'];
    classes.push(this.alignment() === 'center' ? 'justify-center' : 'justify-center lg:justify-start');
    return classes.join(' ');
  });

  getButtonClasses(button: HeroButton): string {
    const classes = [
      'inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg',
      'transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5',
    ];
    const light = this.textColor() === 'light';
    switch (button.variant) {
      case 'primary':
        classes.push('bg-teal-700 hover:bg-teal-800 text-white shadow-lg shadow-teal-950/20');
        break;
      case 'secondary':
        classes.push(
          light
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
            : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg dark:bg-slate-100 dark:text-slate-950'
        );
        break;
      case 'outline':
        classes.push(
          light
            ? 'border-2 border-white/70 text-white hover:bg-white hover:text-teal-900'
            : 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:text-slate-100'
        );
        break;
    }
    return classes.join(' ');
  }
}
