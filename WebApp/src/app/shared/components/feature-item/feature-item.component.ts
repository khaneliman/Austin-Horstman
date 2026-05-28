import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

export type FeatureItemSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-feature-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent],
  template: `
    <div [class]="rootClasses()">
      <div [class]="iconContainerClasses()">
        <ng-icon [name]="icon()" [size]="iconSize()" [class]="iconClasses()"></ng-icon>
      </div>
      <div class="flex-1">
        <h3 [class]="titleClasses()">{{ title() }}</h3>
        <p [class]="descriptionClasses()">{{ description() }}</p>
      </div>
    </div>
  `,
})
export class FeatureItemComponent {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly iconColor = input('blue');
  readonly size = input<FeatureItemSize>('md');

  // `palette-{color}` (defined in src/_palettes.scss) exposes --p-* shade
  // variables so the icon's static var-based classes resolve correctly.
  readonly rootClasses = computed(() => `palette-${this.iconColor()} flex items-start space-x-4`);

  readonly iconContainerClasses = computed(() => {
    const classes = [
      'bg-[var(--p-100)]',
      'dark:bg-[var(--p-900-30)]',
      'rounded-full',
      'flex',
      'items-center',
      'justify-center',
      'flex-shrink-0',
    ];
    switch (this.size()) {
      case 'sm':
        classes.push('w-6 h-6');
        break;
      case 'md':
        classes.push('w-8 h-8');
        break;
      case 'lg':
        classes.push('w-10 h-10');
        break;
    }
    return classes.join(' ');
  });

  readonly iconClasses = computed(() => 'text-[var(--p-600)] dark:text-[var(--p-400)]');

  readonly iconSize = computed(() => {
    switch (this.size()) {
      case 'sm':
        return '0.75rem';
      case 'md':
        return '0.875rem';
      case 'lg':
        return '1rem';
    }
  });

  readonly titleClasses = computed(() => {
    const classes = ['font-semibold text-gray-800 dark:text-gray-100 mb-1'];
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
  });

  readonly descriptionClasses = computed(() => {
    const classes = ['text-gray-600 dark:text-gray-300'];
    switch (this.size()) {
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
  });
}
