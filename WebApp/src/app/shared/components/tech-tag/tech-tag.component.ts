import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        classes.push(`hover:bg-${this.color}-200`);
        break;
      case 'outline':
        classes.push(`border border-${this.color}-200 text-${this.color}-700`);
        classes.push(`hover:bg-${this.color}-50`);
        break;
      case 'ghost':
        classes.push(`text-${this.color}-600 hover:bg-${this.color}-50`);
        break;
    }

    return classes.join(' ');
  }
}
