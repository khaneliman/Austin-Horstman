import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  template: `
    <button
      *ngIf="!href; else linkTemplate"
      [class]="buttonClasses"
      [disabled]="disabled"
      [type]="type"
      (click)="handleClick($event)"
    >
      <ng-icon [name]="icon" [size]="iconSize" [class]="iconClasses"></ng-icon>
    </button>

    <ng-template #linkTemplate>
      <a [href]="href" [target]="target" [rel]="rel" [class]="buttonClasses">
        <ng-icon [name]="icon" [size]="iconSize" [class]="iconClasses"></ng-icon>
      </a>
    </ng-template>
  `,
  styles: [],
})
export class IconButtonComponent {
  @Input() icon!: string;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() variant: 'filled' | 'outline' | 'ghost' | 'gradient' = 'filled';
  @Input() color = 'blue';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() href?: string;
  @Input() target?: string;
  @Input() rel?: string;
  @Input() shadow = false;
  @Input() pulse = false;

  @Output() buttonClick = new EventEmitter<Event>();

  handleClick(event: Event): void {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }

  get buttonClasses(): string {
    const classes = [
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-full',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      `focus:ring-${this.color}-500`,
    ];

    // Size classes
    switch (this.size) {
      case 'xs':
        classes.push('w-6 h-6');
        break;
      case 'sm':
        classes.push('w-8 h-8');
        break;
      case 'md':
        classes.push('w-10 h-10');
        break;
      case 'lg':
        classes.push('w-12 h-12');
        break;
      case 'xl':
        classes.push('w-16 h-16');
        break;
    }

    // Variant classes
    if (!this.disabled) {
      switch (this.variant) {
        case 'filled':
          classes.push(`bg-${this.color}-500`, `hover:bg-${this.color}-600`, 'text-white');
          break;
        case 'outline':
          classes.push(
            `border-2 border-${this.color}-500`,
            `text-${this.color}-500`,
            `hover:bg-${this.color}-500`,
            'hover:text-white',
            'bg-transparent'
          );
          break;
        case 'ghost':
          classes.push(`text-${this.color}-500`, `hover:bg-${this.color}-100`, 'bg-transparent');
          break;
        case 'gradient':
          classes.push(
            `bg-gradient-to-r from-${this.color}-500 to-${this.color}-600`,
            `hover:from-${this.color}-600 hover:to-${this.color}-700`,
            'text-white'
          );
          break;
      }
    } else {
      classes.push('bg-gray-300 text-gray-500 cursor-not-allowed');
    }

    // Shadow
    if (this.shadow) {
      classes.push('shadow-lg hover:shadow-xl');
    }

    // Pulse animation
    if (this.pulse) {
      classes.push('animate-pulse');
    }

    // Hover transform
    if (!this.disabled) {
      classes.push('hover:scale-110');
    }

    return classes.join(' ');
  }

  get iconClasses(): string {
    return this.disabled ? 'opacity-50' : '';
  }

  get iconSize(): string {
    switch (this.size) {
      case 'xs':
        return '0.75rem';
      case 'sm':
        return '1rem';
      case 'md':
        return '1.25rem';
      case 'lg':
        return '1.5rem';
      case 'xl':
        return '2rem';
      default:
        return '1.25rem';
    }
  }
}
