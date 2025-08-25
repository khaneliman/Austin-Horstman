import { Component, input } from '@angular/core';

@Component({
  selector: 'app-base-card',
  standalone: true,
  imports: [],
  template: `
    <div [class]="cardClasses" [attr.role]="role()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class BaseCardComponent {
  variant = input<'small' | 'medium' | 'large'>('medium');
  shadow = input<'sm' | 'lg' | 'xl' | '2xl'>('lg');
  hover = input<boolean>(false);
  rounded = input<'lg' | 'xl' | '2xl' | '3xl'>('2xl');
  padding = input<boolean>(true);
  border = input<boolean>(true);
  background = input<string>('white');
  role = input<string>('');
  additionalClasses = input<string>('');

  get cardClasses(): string {
    const backgroundValue = this.background();
    const roundedValue = this.rounded();
    const shadowValue = this.shadow();
    const borderValue = this.border();
    const paddingValue = this.padding();
    const variantValue = this.variant();
    const hoverValue = this.hover();
    const additionalClassesValue = this.additionalClasses();

    const classes = ['bg-' + backgroundValue];

    // Add dark mode support for white background
    if (backgroundValue === 'white') {
      classes.push('dark:bg-gray-800');
    }

    // Rounded corners
    classes.push('rounded-' + roundedValue);

    // Shadow
    classes.push('shadow-' + shadowValue);

    // Border
    if (borderValue) {
      classes.push('border border-gray-100 dark:border-gray-700');
    }

    // Padding based on variant
    if (paddingValue) {
      switch (variantValue) {
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
    if (hoverValue) {
      classes.push('hover:shadow-xl transition-all duration-300 hover:-translate-y-1');
    }

    // Additional classes
    if (additionalClassesValue) {
      classes.push(additionalClassesValue);
    }

    return classes.join(' ');
  }
}
