import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TechTagComponent } from '../tech-tag/tech-tag.component';

export interface TechTag {
  name: string;
  color: string;
}

@Component({
  selector: 'app-tech-tag-list',
  standalone: true,
  imports: [CommonModule, TechTagComponent],
  template: `
    <div [class]="containerClasses">
      <app-tech-tag
        *ngFor="let tech of technologies"
        [name]="tech.name"
        [color]="tech.color"
        [size]="size"
        [variant]="variant"
      ></app-tech-tag>
    </div>
  `,
  styles: [],
})
export class TechTagListComponent {
  @Input() technologies: TechTag[] = [];
  @Input() justify: 'start' | 'center' | 'end' = 'center';
  @Input() size: 'sm' | 'md' = 'sm';
  @Input() variant: 'filled' | 'outline' | 'ghost' = 'filled';
  @Input() wrap = true;

  get containerClasses(): string {
    const classes = ['flex gap-2'];

    if (this.wrap) {
      classes.push('flex-wrap');
    }

    switch (this.justify) {
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
