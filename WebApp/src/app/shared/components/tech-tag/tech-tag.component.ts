import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-tech-tag',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="tagClasses()">
      {{ name() }}
    </span>
  `,
})
export class TechTagComponent {
  name = input.required<string>();
  color = input<string>('blue');
  size = input<'sm' | 'md'>('sm');
  variant = input<'filled' | 'outline' | 'ghost'>('filled');

  // `palette-{color}` is defined in src/_palettes.scss and exposes the
  // --p-* shade variables that the variant classes below consume.
  readonly tagClasses = computed(() => {
    const classes = [`palette-${this.color()}`, 'font-medium rounded-full transition-colors duration-200'];

    if (this.size() === 'sm') {
      classes.push('px-3 py-1 text-xs');
    } else {
      classes.push('px-4 py-2 text-sm');
    }

    switch (this.variant()) {
      case 'filled':
        classes.push(
          'bg-[var(--p-100)] text-[var(--p-800)]',
          'dark:bg-[var(--p-900-30)] dark:text-[var(--p-300)]',
          'hover:bg-[var(--p-200)] dark:hover:bg-[var(--p-800-50)]'
        );
        break;
      case 'outline':
        classes.push(
          'border border-[var(--p-200)] text-[var(--p-700)]',
          'dark:border-[var(--p-600)] dark:text-[var(--p-300)]',
          'hover:bg-[var(--p-50)] dark:hover:bg-[var(--p-900-20)]'
        );
        break;
      case 'ghost':
        classes.push(
          'text-[var(--p-600)] hover:bg-[var(--p-50)]',
          'dark:text-[var(--p-400)] dark:hover:bg-[var(--p-900-20)]'
        );
        break;
    }

    return classes.join(' ');
  });
}
