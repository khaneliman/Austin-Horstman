import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

export type StatCardSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent],
  template: `
    <div [class]="containerClasses()">
      <div [class]="iconContainerClasses()">
        <ng-icon [name]="icon()" [size]="iconSize()" class="text-white"></ng-icon>
      </div>
      <div [class]="valueClasses()">{{ value() }}</div>
      <div [class]="labelClasses()">{{ label() }}</div>
    </div>
  `,
})
export class StatCardComponent {
  readonly icon = input.required<string>();
  readonly value = input.required<string>();
  readonly label = input.required<string>();
  readonly color = input('blue');
  readonly size = input<StatCardSize>('md');
  readonly center = input(true);
  readonly background = input(false);

  // `palette-{color}` (src/_palettes.scss) exposes the --p-* shade variables
  // that the static utility classes below consume.
  readonly containerClasses = computed(() => {
    const classes = [`palette-${this.color()}`];
    if (this.center()) classes.push('text-center');
    if (this.background()) classes.push('bg-[var(--p-50)] dark:bg-[var(--p-900-20)] rounded-xl p-4');
    return classes.join(' ');
  });

  readonly iconContainerClasses = computed(() => {
    const classes = ['bg-[var(--p-500)]', 'rounded-xl', 'flex', 'items-center', 'justify-center'];
    classes.push(...(this.center() ? ['mx-auto', 'mb-3'] : ['mb-2']));
    switch (this.size()) {
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
  });

  readonly iconSize = computed(() => {
    switch (this.size()) {
      case 'sm':
        return '1rem';
      case 'md':
        return '1.25rem';
      case 'lg':
        return '1.5rem';
    }
  });

  readonly valueClasses = computed(() => {
    const classes = ['text-[var(--p-600)]', 'dark:text-[var(--p-400)]', 'font-bold', 'mb-1'];
    switch (this.size()) {
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
  });

  readonly labelClasses = computed(() => {
    const classes = ['text-gray-600', 'dark:text-gray-300'];
    switch (this.size()) {
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
  });
}
