import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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

@Component({
  selector: 'app-hero-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgFor, RouterModule, NgIconComponent, DecorativeBackgroundComponent],
  template: `
    <section [class]="sectionClasses">
      <!-- Background decorations -->
      <app-decorative-background *ngIf="backgroundElements().length > 0" [elements]="backgroundElements()">
      </app-decorative-background>

      <!-- Additional background overlay -->
      <div *ngIf="overlayGradient()" [class]="overlayClasses"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div [class]="contentLayoutClasses">
          <!-- Left/Main Content -->
          <div [class]="contentClasses">
            <div class="space-y-8">
              <!-- Badge/Category -->
              <div *ngIf="badge()" class="flex justify-center lg:justify-start">
                <span [class]="badgeClasses">
                  {{ badge() }}
                </span>
              </div>

              <!-- Main Heading -->
              <div>
                <h1 [class]="headingClasses">
                  {{ title() }}
                </h1>
                <div *ngIf="showUnderline()" [class]="underlineClasses"></div>
              </div>

              <!-- Subtitle/Description -->
              <p *ngIf="subtitle()" [class]="subtitleClasses">
                {{ subtitle() }}
              </p>

              <!-- Buttons -->
              <div *ngIf="buttons().length > 0" [class]="buttonContainerClasses">
                <a
                  *ngFor="let button of buttons()"
                  [href]="button.href"
                  [routerLink]="button.routerLink"
                  [class]="getButtonClasses(button)"
                  (click)="button.action && button.action()"
                >
                  <ng-icon *ngIf="button.icon" [name]="button.icon" size="1.25rem" class="mr-2"> </ng-icon>
                  {{ button.text }}
                </a>
              </div>

              <!-- Additional content slot -->
              <div *ngIf="showContentSlot()" class="mt-8">
                <ng-content></ng-content>
              </div>
            </div>
          </div>

          <!-- Right side content (optional) -->
          <div *ngIf="showRightContent()" class="flex items-center justify-center">
            <ng-content select="[slot=right]"></ng-content>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HeroSectionComponent {
  title = input.required<string>();
  subtitle = input<string>();
  badge = input<string>();
  buttons = input<HeroButton[]>([]);
  variant = input<'default' | 'gradient' | 'minimal' | 'profile'>('default');
  size = input<'sm' | 'md' | 'lg' | 'xl'>('lg');
  alignment = input<'left' | 'center'>('center');
  layout = input<'single' | 'split'>('single');
  backgroundGradient = input<string>('from-blue-600 to-purple-600');
  backgroundElements = input<BackgroundElement[]>([]);
  overlayGradient = input<string>();
  showUnderline = input<boolean>(false);
  showContentSlot = input<boolean>(false);
  showRightContent = input<boolean>(false);
  minHeight = input<string>('min-h-screen');
  textColor = input<'light' | 'dark'>('light');

  get sectionClasses(): string {
    const classes = ['relative', this.minHeight(), 'overflow-hidden'];
    const variantValue = this.variant();
    const backgroundGradientValue = this.backgroundGradient();

    if (variantValue === 'gradient') {
      classes.push(`bg-gradient-to-br ${backgroundGradientValue}`);
    } else if (variantValue === 'minimal') {
      classes.push('bg-gradient-to-br from-slate-50 to-blue-50');
    } else if (variantValue === 'default') {
      classes.push(`bg-gradient-to-br ${backgroundGradientValue}`);
    }

    return classes.join(' ');
  }

  get overlayClasses(): string {
    return `absolute inset-0 ${this.overlayGradient()}`;
  }

  get contentLayoutClasses(): string {
    const classes = ['items-center'];
    const layoutValue = this.layout();
    const sizeValue = this.size();

    if (layoutValue === 'split') {
      classes.push('grid grid-cols-1 lg:grid-cols-2 gap-12');
    } else {
      classes.push('flex justify-center');
    }

    if (sizeValue === 'xl') {
      classes.push('min-h-[80vh]');
    }

    return classes.join(' ');
  }

  get contentClasses(): string {
    const classes = [];
    const alignmentValue = this.alignment();

    if (alignmentValue === 'center') {
      classes.push('text-center');
    } else {
      classes.push('text-center lg:text-left');
    }

    return classes.join(' ');
  }

  get headingClasses(): string {
    const baseClasses = [];
    const sizeValue = this.size();
    const textColorValue = this.textColor();

    // Size classes first
    switch (sizeValue) {
      case 'sm':
        baseClasses.push('text-3xl lg:text-4xl');
        break;
      case 'md':
        baseClasses.push('text-4xl lg:text-5xl');
        break;
      case 'lg':
        baseClasses.push('text-5xl lg:text-6xl');
        break;
      case 'xl':
        baseClasses.push('text-5xl lg:text-7xl');
        break;
    }

    // Typography and spacing
    baseClasses.push('font-bold', 'leading-tight', 'mb-4');

    // Color classes last
    if (textColorValue === 'light') {
      baseClasses.push('text-white');
    } else {
      baseClasses.push('text-gray-900');
    }

    return baseClasses.join(' ');
  }

  get subtitleClasses(): string {
    const baseClasses = ['leading-relaxed'];
    const sizeValue = this.size();
    const textColorValue = this.textColor();
    const alignmentValue = this.alignment();

    // Size classes
    switch (sizeValue) {
      case 'sm':
        baseClasses.push('text-lg');
        break;
      case 'md':
        baseClasses.push('text-xl');
        break;
      case 'lg':
        baseClasses.push('text-xl lg:text-2xl');
        break;
      case 'xl':
        baseClasses.push('text-xl lg:text-2xl');
        break;
    }

    // Color and constraints
    if (textColorValue === 'light') {
      baseClasses.push('text-blue-100 max-w-2xl');
    } else {
      baseClasses.push('text-gray-600 max-w-2xl');
    }

    if (alignmentValue === 'center') {
      baseClasses.push('mx-auto');
    }

    return baseClasses.join(' ');
  }

  get badgeClasses(): string {
    const classes = ['px-4 py-2 text-sm font-medium rounded-full'];
    const textColorValue = this.textColor();

    if (textColorValue === 'light') {
      classes.push('bg-white/20 text-white backdrop-blur-sm border border-white/20');
    } else {
      classes.push('bg-blue-100 text-blue-800');
    }

    return classes.join(' ');
  }

  get underlineClasses(): string {
    const classes = [];
    const sizeValue = this.size();
    const alignmentValue = this.alignment();

    // Width first
    switch (sizeValue) {
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

    // Height and background
    classes.push('h-1', 'bg-gradient-to-r', 'from-green-400', 'to-green-600', 'rounded-full');

    // Margin/positioning last
    if (alignmentValue === 'center') {
      classes.push('mx-auto');
    } else {
      classes.push('mx-auto', 'lg:mx-0');
    }

    return classes.join(' ');
  }

  get buttonContainerClasses(): string {
    const classes = ['flex flex-wrap gap-4'];
    const alignmentValue = this.alignment();

    if (alignmentValue === 'center') {
      classes.push('justify-center');
    } else {
      classes.push('justify-center lg:justify-start');
    }

    return classes.join(' ');
  }

  getButtonClasses(button: HeroButton): string {
    const baseClasses = [
      'inline-flex items-center px-8 py-4 font-semibold rounded-lg',
      'transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1',
    ];
    const textColorValue = this.textColor();

    switch (button.variant) {
      case 'primary':
        baseClasses.push('bg-green-500 hover:bg-green-600 text-white shadow-lg');
        break;
      case 'secondary':
        if (textColorValue === 'light') {
          baseClasses.push('bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40');
        } else {
          baseClasses.push('bg-blue-500 hover:bg-blue-600 text-white shadow-lg');
        }
        break;
      case 'outline':
        if (textColorValue === 'light') {
          baseClasses.push('border-2 border-white text-white hover:bg-white hover:text-blue-600');
        } else {
          baseClasses.push('border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white');
        }
        break;
    }

    return baseClasses.join(' ');
  }
}
