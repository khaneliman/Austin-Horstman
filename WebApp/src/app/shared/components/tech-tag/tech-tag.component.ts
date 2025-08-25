import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-tag',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="tagClasses">
      {{ name() }}
    </span>
  `,
  styles: [],
})
export class TechTagComponent {
  name = input.required<string>();
  color = input<string>('blue');
  size = input<'sm' | 'md'>('sm');
  variant = input<'filled' | 'outline' | 'ghost'>('filled');

  get tagClasses(): string {
    const classes = ['font-medium rounded-full transition-colors duration-200'];

    // Size classes
    if (this.size() === 'sm') {
      classes.push('px-3 py-1 text-xs');
    } else {
      classes.push('px-4 py-2 text-sm');
    }

    // Color and variant classes
    const colorValue = this.color();
    switch (this.variant()) {
      case 'filled':
        classes.push(`bg-${colorValue}-100 text-${colorValue}-800`);
        classes.push(`dark:bg-${colorValue}-900/30 dark:text-${colorValue}-300`);
        classes.push(`hover:bg-${colorValue}-200 dark:hover:bg-${colorValue}-800/50`);
        break;
      case 'outline':
        classes.push(`border border-${colorValue}-200 text-${colorValue}-700`);
        classes.push(`dark:border-${colorValue}-600 dark:text-${colorValue}-300`);
        classes.push(`hover:bg-${colorValue}-50 dark:hover:bg-${colorValue}-900/20`);
        break;
      case 'ghost':
        classes.push(`text-${colorValue}-600 hover:bg-${colorValue}-50`);
        classes.push(`dark:text-${colorValue}-400 dark:hover:bg-${colorValue}-900/20`);
        break;
    }

    return classes.join(' ');
  }
}
