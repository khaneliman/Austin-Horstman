import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  imports: [CommonModule, RouterModule, NgIconComponent, DecorativeBackgroundComponent],
  template: `
    <section [class]="sectionClasses">
      <!-- Background decorations -->
      <app-decorative-background *ngIf="backgroundElements.length > 0" [elements]="backgroundElements">
      </app-decorative-background>

      <!-- Additional background overlay -->
      <div *ngIf="overlayGradient" [class]="overlayClasses"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div [class]="contentLayoutClasses">
          <!-- Left/Main Content -->
          <div [class]="contentClasses">
            <div class="space-y-8">
              <!-- Badge/Category -->
              <div *ngIf="badge" class="flex justify-center lg:justify-start">
                <span [class]="badgeClasses">
                  {{ badge }}
                </span>
              </div>

              <!-- Main Heading -->
              <div>
                <h1 [class]="headingClasses">
                  {{ title }}
                </h1>
                <div *ngIf="showUnderline" [class]="underlineClasses"></div>
              </div>

              <!-- Subtitle/Description -->
              <p *ngIf="subtitle" [class]="subtitleClasses">
                {{ subtitle }}
              </p>

              <!-- Buttons -->
              <div *ngIf="buttons.length > 0" [class]="buttonContainerClasses">
                <a
                  *ngFor="let button of buttons"
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
              <div *ngIf="showContentSlot" class="mt-8">
                <ng-content></ng-content>
              </div>
            </div>
          </div>

          <!-- Right side content (optional) -->
          <div *ngIf="showRightContent" class="flex items-center justify-center">
            <ng-content select="[slot=right]"></ng-content>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HeroSectionComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() badge?: string;
  @Input() buttons: HeroButton[] = [];
  @Input() variant: 'default' | 'gradient' | 'minimal' | 'profile' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @Input() alignment: 'left' | 'center' = 'center';
  @Input() layout: 'single' | 'split' = 'single';
  @Input() backgroundGradient = 'from-blue-600 to-purple-600';
  @Input() backgroundElements: BackgroundElement[] = [];
  @Input() overlayGradient?: string;
  @Input() showUnderline = false;
  @Input() showContentSlot = false;
  @Input() showRightContent = false;
  @Input() minHeight = 'min-h-screen';
  @Input() textColor: 'light' | 'dark' = 'light';

  get sectionClasses(): string {
    const classes = ['relative', this.minHeight, 'overflow-hidden'];

    if (this.variant === 'gradient') {
      classes.push(`bg-gradient-to-br ${this.backgroundGradient}`);
    } else if (this.variant === 'minimal') {
      classes.push('bg-gradient-to-br from-slate-50 to-blue-50');
    } else if (this.variant === 'default') {
      classes.push(`bg-gradient-to-br ${this.backgroundGradient}`);
    }

    return classes.join(' ');
  }

  get overlayClasses(): string {
    return `absolute inset-0 ${this.overlayGradient}`;
  }

  get contentLayoutClasses(): string {
    const classes = ['items-center'];

    if (this.layout === 'split') {
      classes.push('grid grid-cols-1 lg:grid-cols-2 gap-12');
    } else {
      classes.push('flex justify-center');
    }

    if (this.size === 'xl') {
      classes.push('min-h-[80vh]');
    }

    return classes.join(' ');
  }

  get contentClasses(): string {
    const classes = [];

    if (this.alignment === 'center') {
      classes.push('text-center');
    } else {
      classes.push('text-center lg:text-left');
    }

    return classes.join(' ');
  }

  get headingClasses(): string {
    const baseClasses = ['font-bold leading-tight'];

    // Size classes
    switch (this.size) {
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

    // Color classes
    if (this.textColor === 'light') {
      baseClasses.push('text-white mb-4');
    } else {
      baseClasses.push('text-gray-900 mb-4');
    }

    return baseClasses.join(' ');
  }

  get subtitleClasses(): string {
    const baseClasses = ['leading-relaxed'];

    // Size classes
    switch (this.size) {
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
    if (this.textColor === 'light') {
      baseClasses.push('text-blue-100 max-w-2xl');
    } else {
      baseClasses.push('text-gray-600 max-w-2xl');
    }

    if (this.alignment === 'center') {
      baseClasses.push('mx-auto');
    }

    return baseClasses.join(' ');
  }

  get badgeClasses(): string {
    const classes = ['px-4 py-2 text-sm font-medium rounded-full'];

    if (this.textColor === 'light') {
      classes.push('bg-white/20 text-white backdrop-blur-sm border border-white/20');
    } else {
      classes.push('bg-blue-100 text-blue-800');
    }

    return classes.join(' ');
  }

  get underlineClasses(): string {
    const classes = ['h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full'];

    switch (this.size) {
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

    if (this.alignment === 'center') {
      classes.push('mx-auto');
    } else {
      classes.push('mx-auto lg:mx-0');
    }

    return classes.join(' ');
  }

  get buttonContainerClasses(): string {
    const classes = ['flex flex-wrap gap-4'];

    if (this.alignment === 'center') {
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

    switch (button.variant) {
      case 'primary':
        baseClasses.push('bg-green-500 hover:bg-green-600 text-white shadow-lg');
        break;
      case 'secondary':
        if (this.textColor === 'light') {
          baseClasses.push('bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40');
        } else {
          baseClasses.push('bg-blue-500 hover:bg-blue-600 text-white shadow-lg');
        }
        break;
      case 'outline':
        if (this.textColor === 'light') {
          baseClasses.push('border-2 border-white text-white hover:bg-white hover:text-blue-600');
        } else {
          baseClasses.push('border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white');
        }
        break;
    }

    return baseClasses.join(' ');
  }
}
