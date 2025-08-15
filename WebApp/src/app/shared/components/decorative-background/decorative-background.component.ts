import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BackgroundElement {
  size:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'w-24-h-24'
    | 'w-32-h-32'
    | 'w-40-h-40'
    | 'w-48-h-48';
  position:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center'
    | string; // Allow custom positioning like 'top-20 left-10'
  color: string;
  opacity?: number;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  animate?: boolean;
  delay?: number;
}

@Component({
  selector: 'app-decorative-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        *ngFor="let element of elements"
        [class]="getElementClasses(element)"
        [style.animation-delay]="
          element.animate && element.delay ? element.delay + 'ms' : '0ms'
        "
      ></div>
    </div>
  `,
  styles: [],
})
export class DecorativeBackgroundComponent {
  @Input() elements: BackgroundElement[] = [];

  getElementClasses(element: BackgroundElement): string {
    const classes = ['absolute'];

    // Size classes
    switch (element.size) {
      case 'sm':
        classes.push('w-12 h-12');
        break;
      case 'md':
        classes.push('w-16 h-16');
        break;
      case 'lg':
        classes.push('w-20 h-20');
        break;
      case 'xl':
        classes.push('w-24 h-24');
        break;
      case 'w-24-h-24':
        classes.push('w-24 h-24');
        break;
      case 'w-32-h-32':
        classes.push('w-32 h-32');
        break;
      case 'w-40-h-40':
        classes.push('w-40 h-40');
        break;
      case 'w-48-h-48':
        classes.push('w-48 h-48');
        break;
    }

    // Position classes
    switch (element.position) {
      case 'top-left':
        classes.push('top-4 left-4');
        break;
      case 'top-right':
        classes.push('top-4 right-4');
        break;
      case 'bottom-left':
        classes.push('bottom-4 left-4');
        break;
      case 'bottom-right':
        classes.push('bottom-4 right-4');
        break;
      case 'center':
        classes.push(
          'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        );
        break;
      default:
        // Custom positioning - split by spaces and add each class
        classes.push(...element.position.split(' '));
        break;
    }

    // Color and opacity
    const opacity = element.opacity || 10;
    classes.push(`bg-${element.color}/${opacity}`);

    // Shape
    classes.push('rounded-full');

    // Blur effect
    const blur = element.blur || 'xl';
    classes.push(`blur-${blur}`);

    // Animation
    if (element.animate) {
      classes.push('animate-pulse');
    }

    return classes.join(' ');
  }
}
