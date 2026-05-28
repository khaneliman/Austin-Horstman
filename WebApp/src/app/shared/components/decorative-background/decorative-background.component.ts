import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface BackgroundElement {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'w-24-h-24' | 'w-32-h-32' | 'w-40-h-40' | 'w-48-h-48';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | string;
  color: string;
  opacity?: number;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  animate?: boolean;
  delay?: number;
}

const SIZE_CLASSES: Record<BackgroundElement['size'], string> = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24',
  'w-24-h-24': 'w-24 h-24',
  'w-32-h-32': 'w-32 h-32',
  'w-40-h-40': 'w-40 h-40',
  'w-48-h-48': 'w-48 h-48',
};

const POSITION_CLASSES: Record<string, string> = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
};

@Component({
  selector: 'app-decorative-background',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      @for (element of elements(); track $index) {
        <div
          [class]="getElementClasses(element)"
          [style.animation-delay]="element.animate && element.delay ? element.delay + 'ms' : '0ms'"
        ></div>
      }
    </div>
  `,
})
export class DecorativeBackgroundComponent {
  readonly elements = input<BackgroundElement[]>([]);

  getElementClasses(element: BackgroundElement): string {
    const classes = ['absolute', SIZE_CLASSES[element.size]];
    classes.push(POSITION_CLASSES[element.position] ?? element.position);
    classes.push(`bg-${element.color}/${element.opacity ?? 10}`);
    classes.push('rounded-full');
    classes.push(`blur-${element.blur ?? 'xl'}`);
    if (element.animate) classes.push('animate-pulse');
    return classes.join(' ');
  }
}
