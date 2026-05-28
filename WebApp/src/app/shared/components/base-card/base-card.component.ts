import { Component, input } from '@angular/core';

export type BaseCardBackground = 'white' | 'transparent' | 'slate-50' | 'gray-50';
export type BaseCardRounded = 'lg' | 'xl' | '2xl' | '3xl';
export type BaseCardShadow = 'sm' | 'lg' | 'xl' | '2xl';
export type BaseCardVariant = 'small' | 'medium' | 'large';

const BACKGROUND_CLASSES: Record<BaseCardBackground, string> = {
  white: 'bg-white dark:bg-gray-800',
  transparent: 'bg-transparent',
  'slate-50': 'bg-slate-50 dark:bg-slate-900',
  'gray-50': 'bg-gray-50 dark:bg-gray-900',
};

const ROUNDED_CLASSES: Record<BaseCardRounded, string> = {
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
};

const SHADOW_CLASSES: Record<BaseCardShadow, string> = {
  sm: 'shadow-sm',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
};

const VARIANT_PADDING: Record<BaseCardVariant, string> = {
  small: 'p-4',
  medium: 'p-6',
  large: 'p-8',
};

@Component({
  selector: 'app-base-card',
  standalone: true,
  imports: [],
  template: `
    <div [class]="cardClasses" [attr.role]="role()">
      <ng-content></ng-content>
    </div>
  `,
})
export class BaseCardComponent {
  variant = input<BaseCardVariant>('medium');
  shadow = input<BaseCardShadow>('lg');
  hover = input<boolean>(false);
  rounded = input<BaseCardRounded>('2xl');
  padding = input<boolean>(true);
  border = input<boolean>(true);
  background = input<BaseCardBackground>('white');
  role = input<string>('');
  additionalClasses = input<string>('');

  get cardClasses(): string {
    const classes = [
      BACKGROUND_CLASSES[this.background()],
      ROUNDED_CLASSES[this.rounded()],
      SHADOW_CLASSES[this.shadow()],
    ];

    if (this.border()) {
      classes.push('border border-gray-100 dark:border-gray-700');
    }

    if (this.padding()) {
      classes.push(VARIANT_PADDING[this.variant()]);
    }

    if (this.hover()) {
      classes.push('hover:shadow-xl transition-all duration-300 hover:-translate-y-1');
    }

    const additional = this.additionalClasses();
    if (additional) {
      classes.push(additional);
    }

    return classes.join(' ');
  }
}
