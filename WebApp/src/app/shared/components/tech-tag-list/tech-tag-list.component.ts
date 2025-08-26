import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TechTagComponent } from '../tech-tag/tech-tag.component';

export interface TechTag {
  name: string;
  color: string;
}

@Component({
  selector: 'app-tech-tag-list',
  standalone: true,
  imports: [TechTagComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="containerClasses">
      @for (tech of technologies(); track tech.name) {
        <app-tech-tag [name]="tech.name" [color]="tech.color" [size]="size()" [variant]="variant()"></app-tech-tag>
      }
    </div>
  `,
  styles: [],
})
export class TechTagListComponent {
  technologies = input<TechTag[]>([]);
  justify = input<'start' | 'center' | 'end'>('center');
  size = input<'sm' | 'md'>('sm');
  variant = input<'filled' | 'outline' | 'ghost'>('filled');
  wrap = input<boolean>(true);

  get containerClasses(): string {
    const classes = ['flex gap-2'];

    if (this.wrap()) {
      classes.push('flex-wrap');
    }

    switch (this.justify()) {
      case 'start':
        classes.push('justify-start');
        break;
      case 'center':
        classes.push('justify-center');
        break;
      case 'end':
        classes.push('justify-end');
        break;
    }

    return classes.join(' ');
  }
}
