import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  template: `
    <div [class]="containerClasses">
      <div [class]="iconContainerClasses">
        <ng-icon [name]="icon" [size]="iconSize" class="text-white"></ng-icon>
      </div>
      <div [class]="valueClasses">{{ value }}</div>
      <div [class]="labelClasses">{{ label }}</div>
    </div>
  `,
  styles: [],
})
export class StatCardComponent {
  @Input() icon!: string;
  @Input() value!: string;
  @Input() label!: string;
  @Input() color = 'blue';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() center = true;
  @Input() background = false;

  get containerClasses(): string {
    const classes = [];

    if (this.center) {
      classes.push('text-center');
    }

    if (this.background) {
      classes.push(`bg-${this.color}-50 rounded-xl p-4`);
    }

    return classes.join(' ');
  }

  get iconContainerClasses(): string {
    const classes = [
      `bg-${this.color}-500`,
      'rounded-xl',
      'flex',
      'items-center',
      'justify-center',
    ];

    if (this.center) {
      classes.push('mx-auto', 'mb-3');
    } else {
      classes.push('mb-2');
    }

    switch (this.size) {
      case 'sm':
        classes.push('w-8 h-8');
        break;
      case 'md':
        classes.push('w-12 h-12');
        break;
      case 'lg':
        classes.push('w-16 h-16');
        break;
    }

    return classes.join(' ');
  }

  get iconSize(): string {
    switch (this.size) {
      case 'sm':
        return '1rem';
      case 'md':
        return '1.25rem';
      case 'lg':
        return '1.5rem';
      default:
        return '1.25rem';
    }
  }

  get valueClasses(): string {
    const classes = [`text-${this.color}-600`, 'font-bold', 'mb-1'];

    switch (this.size) {
      case 'sm':
        classes.push('text-lg');
        break;
      case 'md':
        classes.push('text-2xl');
        break;
      case 'lg':
        classes.push('text-3xl');
        break;
    }

    return classes.join(' ');
  }

  get labelClasses(): string {
    const classes = ['text-gray-600'];

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
