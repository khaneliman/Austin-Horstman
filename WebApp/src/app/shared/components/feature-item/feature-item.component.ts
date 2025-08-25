import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-feature-item',
  standalone: true,
  imports: [NgIconComponent],
  template: `
    <div class="flex items-start space-x-4">
      <div [class]="iconContainerClasses">
        <ng-icon [name]="icon" [size]="iconSize" [class]="iconClasses"></ng-icon>
      </div>
      <div class="flex-1">
        <h3 [class]="titleClasses">
          {{ title }}
        </h3>
        <p [class]="descriptionClasses">
          {{ description }}
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class FeatureItemComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() iconColor = 'blue';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get iconContainerClasses(): string {
    const baseClasses = [
      `bg-${this.iconColor}-100`,
      `dark:bg-${this.iconColor}-900/30`,
      'rounded-full',
      'flex',
      'items-center',
      'justify-center',
      'flex-shrink-0',
    ];

    switch (this.size) {
      case 'sm':
        baseClasses.push('w-6 h-6');
        break;
      case 'md':
        baseClasses.push('w-8 h-8');
        break;
      case 'lg':
        baseClasses.push('w-10 h-10');
        break;
    }

    return baseClasses.join(' ');
  }

  get iconClasses(): string {
    return `text-${this.iconColor}-600 dark:text-${this.iconColor}-400`;
  }

  get iconSize(): string {
    switch (this.size) {
      case 'sm':
        return '0.75rem';
      case 'md':
        return '0.875rem';
      case 'lg':
        return '1rem';
      default:
        return '0.875rem';
    }
  }

  get titleClasses(): string {
    const classes = ['font-semibold text-gray-800 dark:text-gray-100 mb-1'];

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

  get descriptionClasses(): string {
    const classes = ['text-gray-600 dark:text-gray-300'];

    switch (this.size) {
      case 'sm':
        classes.push('text-xs');
        break;
      case 'md':
        classes.push('text-sm');
        break;
      case 'lg':
        classes.push('text-base');
        break;
    }

    return classes.join(' ');
  }
}
