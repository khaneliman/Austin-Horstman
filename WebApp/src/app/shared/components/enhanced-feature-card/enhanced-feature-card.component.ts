import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRight, heroArrowTopRightOnSquare } from '@ng-icons/heroicons/outline';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowRight,
      heroArrowTopRightOnSquare,
    }),
  ],
  templateUrl: './enhanced-feature-card.component.html',
  styles: [],
})
export class EnhancedFeatureCardComponent {
  feature = input.required<EnhancedFeature>();
  variant = input<'default' | 'highlighted' | 'bordered' | 'minimal'>('default');
  size = input<'sm' | 'md' | 'lg'>('md');
  iconPosition = input<'top' | 'left' | 'background'>('top');
  colorTheme = input<string>('blue');
  hover = input<boolean>(true);
  clickable = input<boolean>(false);

  cardClick = output<EnhancedFeature>();

  handleClick(): void {
    if (this.isClickable) {
      const featureValue = this.feature();
      if (featureValue.action) {
        featureValue.action();
      }
      this.cardClick.emit(this.feature());
    }
  }

  get cardClasses(): string {
    const classes = ['relative', 'overflow-hidden', 'transition-all', 'duration-300'];

    // Base card styling
    classes.push('border');

    // Size and padding
    switch (this.size()) {
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
    switch (this.variant()) {
      case 'default':
        classes.push('bg-white', 'dark:bg-gray-800', 'border-gray-200', 'dark:border-gray-700', 'shadow-md');
        break;
      case 'highlighted':
        classes.push('bg-white', 'dark:bg-gray-800', 'border-gray-200', 'dark:border-gray-700', 'shadow-lg');
        break;
      case 'bordered':
        classes.push(
          `bg-white`,
          'dark:bg-gray-800',
          `shadow-md border-2 border-${this.colorTheme()}-200 dark:border-${this.colorTheme()}-700`
        );
        break;
      case 'minimal':
        classes.push('bg-white', 'dark:bg-gray-800', 'border-gray-200', 'dark:border-gray-700', 'shadow-sm');
        break;
    }

    // Hover effects
    if (this.hover()) {
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

    switch (this.size()) {
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

    if (this.iconPosition() === 'top') {
      classes.push('text-center', 'mb-4');
    }

    return classes.join(' ');
  }

  get iconContainerClasses(): string {
    const classes = [
      `bg-${this.colorTheme()}-100`,
      `dark:bg-${this.colorTheme()}-800`,
      'rounded-full',
      'flex',
      'items-center',
      'justify-center',
    ];

    if (this.iconPosition() === 'top') {
      classes.push('mx-auto', 'mb-4');
    }

    switch (this.size()) {
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
    return `w-8 h-8 bg-${this.colorTheme()}-100 dark:bg-${this.colorTheme()}-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`;
  }

  get contentClasses(): string {
    const classes = [];

    if (this.iconPosition() === 'left') {
      classes.push('flex', 'items-start');
    }

    return classes.join(' ');
  }

  get titleClasses(): string {
    const classes = ['font-bold', 'text-gray-900', 'dark:text-gray-100', 'mb-2'];

    switch (this.size()) {
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
    const classes = ['text-gray-600', 'dark:text-gray-300', 'leading-relaxed'];

    switch (this.size()) {
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

    if (this.feature().image) {
      classes.push(
        'absolute',
        'top-3',
        'right-3',
        'bg-white',
        'dark:bg-gray-800',
        'text-gray-800',
        'dark:text-gray-200',
        'shadow-md'
      );
    } else {
      classes.push(
        `bg-${this.colorTheme()}-100`,
        `dark:bg-${this.colorTheme()}-800`,
        `text-${this.colorTheme()}-800`,
        `dark:text-${this.colorTheme()}-200`,
        'mb-2'
      );
    }

    return classes.join(' ');
  }

  get footerClasses(): string {
    const classes = [
      'text-sm',
      'text-gray-500',
      'dark:text-gray-400',
      'mt-4',
      'pt-4',
      'border-t',
      'border-gray-100',
      'dark:border-gray-700',
    ];
    return classes.join(' ');
  }

  get backgroundIconClasses(): string {
    const classes = ['absolute', 'bottom-4', 'right-4', 'opacity-10'];
    return classes.join(' ');
  }

  get iconClasses(): string {
    return `text-${this.colorTheme()}-600 dark:text-${this.colorTheme()}-400`;
  }

  get isClickable(): boolean {
    return this.clickable() || !!this.feature().action || !!this.feature().href || !!this.feature().routerLink;
  }

  get iconSize(): string {
    switch (this.size()) {
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
    switch (this.size()) {
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

  readonly contentContainerClasses = 'relative z-10';

  get headerSectionClasses(): string {
    const classes = [];
    if (this.iconPosition() === 'left') {
      classes.push('flex', 'items-start', 'mb-3');
    }
    return classes.join(' ');
  }

  readonly footerSectionClasses =
    'flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700';

  readonly footerTextClasses = 'text-sm text-gray-500 dark:text-gray-400 font-medium';

  get actionIndicatorClasses(): string {
    return `w-6 h-6 rounded-full bg-${this.colorTheme()}-100 dark:bg-${this.colorTheme()}-800 text-${this.colorTheme()}-600 dark:text-${this.colorTheme()}-400 flex items-center justify-center`;
  }

  get actionIcon(): string {
    if (this.feature().href) {
      return 'heroArrowTopRightOnSquare';
    }
    return 'heroArrowRight';
  }
}
