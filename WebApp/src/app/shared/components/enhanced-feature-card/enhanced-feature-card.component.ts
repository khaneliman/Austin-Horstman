import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

export interface EnhancedFeature {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  badge?: string;
  footer?: string;
  href?: string;
  routerLink?: string;
  action?: () => void;
}

@Component({
  selector: 'app-enhanced-feature-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  template: `
    <div
      [class]="cardClasses"
      (click)="handleClick()"
      (keyup.enter)="handleClick()"
      (keyup.space)="handleClick()"
      [tabindex]="isClickable ? 0 : -1"
      [attr.role]="isClickable ? 'button' : null"
    >
      <!-- Image section -->
      <div *ngIf="feature.image" [class]="imageContainerClasses">
        <img [src]="feature.image" [alt]="feature.title" class="w-full h-full object-cover" />
        <div *ngIf="feature.badge" [class]="badgeClasses">
          {{ feature.badge }}
        </div>
      </div>

      <!-- Icon section (when no image) -->
      <div *ngIf="!feature.image && feature.icon" [class]="iconSectionClasses">
        <div [class]="iconContainerClasses">
          <ng-icon [name]="feature.icon" [size]="iconSize" [class]="iconClasses"> </ng-icon>
        </div>
        <div *ngIf="feature.badge && iconPosition === 'top'" [class]="badgeClasses">
          {{ feature.badge }}
        </div>
      </div>

      <!-- Content section -->
      <div [class]="contentClasses">
        <!-- Badge for left icon position -->
        <div *ngIf="feature.badge && (iconPosition === 'left' || iconPosition === 'background')" [class]="badgeClasses">
          {{ feature.badge }}
        </div>

        <!-- Icon for left position -->
        <div *ngIf="feature.icon && iconPosition === 'left'" [class]="leftIconClasses">
          <ng-icon [name]="feature.icon" [size]="iconSize" [class]="iconClasses"> </ng-icon>
        </div>

        <div class="flex-1">
          <h3 [class]="titleClasses">{{ feature.title }}</h3>
          <p [class]="descriptionClasses">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Footer section -->
      <div *ngIf="feature.footer" [class]="footerClasses">
        {{ feature.footer }}
      </div>

      <!-- Background icon for background position -->
      <div *ngIf="feature.icon && iconPosition === 'background'" [class]="backgroundIconClasses">
        <ng-icon [name]="feature.icon" [size]="backgroundIconSize" class="text-gray-100"> </ng-icon>
      </div>
    </div>
  `,
  styles: [],
})
export class EnhancedFeatureCardComponent {
  @Input() feature!: EnhancedFeature;
  @Input() variant: 'default' | 'highlighted' | 'bordered' | 'minimal' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() iconPosition: 'top' | 'left' | 'background' = 'top';
  @Input() colorTheme = 'blue';
  @Input() hover = true;
  @Input() clickable = false;

  @Output() cardClick = new EventEmitter<EnhancedFeature>();

  handleClick(): void {
    if (this.isClickable) {
      if (this.feature.action) {
        this.feature.action();
      }
      this.cardClick.emit(this.feature);
    }
  }

  get cardClasses(): string {
    const classes = ['relative', 'overflow-hidden', 'transition-all', 'duration-300'];

    // Base card styling
    classes.push('bg-white', 'border', 'border-gray-200');

    // Size and padding
    switch (this.size) {
      case 'sm':
        classes.push('rounded-lg', 'p-4');
        break;
      case 'md':
        classes.push('rounded-xl', 'p-6');
        break;
      case 'lg':
        classes.push('rounded-2xl', 'p-8');
        break;
    }

    // Variant styling
    switch (this.variant) {
      case 'default':
        classes.push('shadow-md');
        break;
      case 'highlighted':
        classes.push(`shadow-lg border-${this.colorTheme}-200 bg-gradient-to-br from-${this.colorTheme}-50 to-white`);
        break;
      case 'bordered':
        classes.push(`shadow-md border-2 border-${this.colorTheme}-200`);
        break;
      case 'minimal':
        classes.push('shadow-sm');
        break;
    }

    // Hover effects
    if (this.hover) {
      classes.push('hover:shadow-xl', 'hover:-translate-y-1');
    }

    // Clickable cursor
    if (this.isClickable) {
      classes.push('cursor-pointer');
    }

    return classes.join(' ');
  }

  get imageContainerClasses(): string {
    const classes = ['relative'];

    switch (this.size) {
      case 'sm':
        classes.push('h-32', 'mb-4');
        break;
      case 'md':
        classes.push('h-40', 'mb-6');
        break;
      case 'lg':
        classes.push('h-48', 'mb-8');
        break;
    }

    classes.push('rounded-lg', 'overflow-hidden');

    return classes.join(' ');
  }

  get iconSectionClasses(): string {
    const classes = [];

    if (this.iconPosition === 'top') {
      classes.push('text-center', 'mb-4');
    }

    return classes.join(' ');
  }

  get iconContainerClasses(): string {
    const classes = [`bg-${this.colorTheme}-100`, 'rounded-full', 'flex', 'items-center', 'justify-center'];

    if (this.iconPosition === 'top') {
      classes.push('mx-auto', 'mb-4');
    }

    switch (this.size) {
      case 'sm':
        classes.push('w-10', 'h-10');
        break;
      case 'md':
        classes.push('w-12', 'h-12');
        break;
      case 'lg':
        classes.push('w-16', 'h-16');
        break;
    }

    return classes.join(' ');
  }

  get leftIconClasses(): string {
    return `w-8 h-8 bg-${this.colorTheme}-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`;
  }

  get contentClasses(): string {
    const classes = [];

    if (this.iconPosition === 'left') {
      classes.push('flex', 'items-start');
    }

    return classes.join(' ');
  }

  get titleClasses(): string {
    const classes = ['font-bold', 'text-gray-900', 'mb-2'];

    switch (this.size) {
      case 'sm':
        classes.push('text-lg');
        break;
      case 'md':
        classes.push('text-xl');
        break;
      case 'lg':
        classes.push('text-2xl');
        break;
    }

    return classes.join(' ');
  }

  get descriptionClasses(): string {
    const classes = ['text-gray-600', 'leading-relaxed'];

    switch (this.size) {
      case 'sm':
        classes.push('text-sm');
        break;
      case 'md':
        classes.push('text-base');
        break;
      case 'lg':
        classes.push('text-lg');
        break;
    }

    return classes.join(' ');
  }

  get badgeClasses(): string {
    const classes = ['inline-block', 'px-3', 'py-1', 'text-xs', 'font-medium', 'rounded-full'];

    if (this.feature.image) {
      classes.push('absolute', 'top-3', 'right-3', 'bg-white', 'text-gray-800', 'shadow-md');
    } else {
      classes.push(`bg-${this.colorTheme}-100`, `text-${this.colorTheme}-800`, 'mb-2');
    }

    return classes.join(' ');
  }

  get footerClasses(): string {
    const classes = ['text-sm', 'text-gray-500', 'mt-4', 'pt-4', 'border-t', 'border-gray-100'];
    return classes.join(' ');
  }

  get backgroundIconClasses(): string {
    const classes = ['absolute', 'bottom-4', 'right-4', 'opacity-10'];
    return classes.join(' ');
  }

  get iconClasses(): string {
    return `text-${this.colorTheme}-600`;
  }

  get isClickable(): boolean {
    return this.clickable || !!this.feature.action || !!this.feature.href || !!this.feature.routerLink;
  }

  get iconSize(): string {
    switch (this.size) {
      case 'sm':
        return '1.25rem';
      case 'md':
        return '1.5rem';
      case 'lg':
        return '2rem';
      default:
        return '1.5rem';
    }
  }

  get backgroundIconSize(): string {
    switch (this.size) {
      case 'sm':
        return '3rem';
      case 'md':
        return '4rem';
      case 'lg':
        return '5rem';
      default:
        return '4rem';
    }
  }
}
