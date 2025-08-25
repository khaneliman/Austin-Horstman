import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="tagClasses">
      {{ name }}
    </span>
  `,
  styles: [],
})
export class TechTagComponent {
  @Input() name!: string;
  @Input() color = 'blue';
  @Input() size: 'sm' | 'md' = 'sm';
  @Input() variant: 'filled' | 'outline' | 'ghost' = 'filled';

  get tagClasses(): string {
    const classes = ['font-medium rounded-full transition-colors duration-200'];

    // Size classes
    if (this.size === 'sm') {
      classes.push('px-3 py-1 text-xs');
    } else {
      classes.push('px-4 py-2 text-sm');
    }

    // Color and variant classes
    switch (this.variant) {
      case 'filled':
        classes.push(`bg-${this.color}-100 text-${this.color}-800`);
        classes.push(`dark:bg-${this.color}-900/30 dark:text-${this.color}-300`);
        classes.push(`hover:bg-${this.color}-200 dark:hover:bg-${this.color}-800/50`);
        break;
      case 'outline':
        classes.push(`border border-${this.color}-200 text-${this.color}-700`);
        classes.push(`dark:border-${this.color}-600 dark:text-${this.color}-300`);
        classes.push(`hover:bg-${this.color}-50 dark:hover:bg-${this.color}-900/20`);
        break;
      case 'ghost':
        classes.push(`text-${this.color}-600 hover:bg-${this.color}-50`);
        classes.push(`dark:text-${this.color}-400 dark:hover:bg-${this.color}-900/20`);
        break;
    }

    return classes.join(' ');
  }
}
