import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses" [attr.role]="role">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class BaseCardComponent {
  @Input() variant: 'small' | 'medium' | 'large' = 'medium';
  @Input() shadow: 'sm' | 'lg' | 'xl' | '2xl' = 'lg';
  @Input() hover = false;
  @Input() rounded: 'lg' | 'xl' | '2xl' | '3xl' = '2xl';
  @Input() padding = true;
  @Input() border = true;
  @Input() background = 'white';
  @Input() role = '';
  @Input() additionalClasses = '';

  get cardClasses(): string {
    const classes = ['bg-' + this.background];

    // Rounded corners
    classes.push('rounded-' + this.rounded);

    // Shadow
    classes.push('shadow-' + this.shadow);

    // Border
    if (this.border) {
      classes.push('border border-gray-100');
    }

    // Padding based on variant
    if (this.padding) {
      switch (this.variant) {
        case 'small':
          classes.push('p-4');
          break;
        case 'medium':
          classes.push('p-6');
          break;
        case 'large':
          classes.push('p-8');
          break;
      }
    }

    // Hover effects
    if (this.hover) {
      classes.push('hover:shadow-xl transition-all duration-300 hover:-translate-y-1');
    }

    // Additional classes
    if (this.additionalClasses) {
      classes.push(this.additionalClasses);
    }

    return classes.join(' ');
  }
}
