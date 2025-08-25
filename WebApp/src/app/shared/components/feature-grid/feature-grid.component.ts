import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FeatureItemComponent } from '../feature-item/feature-item.component';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-feature-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, FeatureItemComponent],
  template: `
    <div [class]="gridClasses">
      <app-feature-item
        *ngFor="let feature of features"
        [icon]="feature.icon"
        [title]="feature.title"
        [description]="feature.description"
        [iconColor]="iconColor"
        [size]="itemSize"
      ></app-feature-item>
    </div>
  `,
  styles: [],
})
export class FeatureGridComponent {
  @Input() features: Feature[] = [];
  @Input() columns: 1 | 2 = 2;
  @Input() iconColor = 'blue';
  @Input() itemSize: 'sm' | 'md' | 'lg' = 'md';
  @Input() gap = '6';

  get gridClasses(): string {
    const classes = ['grid', `gap-${this.gap}`];

    if (this.columns === 1) {
      classes.push('grid-cols-1');
    } else {
      classes.push('grid-cols-1 md:grid-cols-2');
    }

    return classes.join(' ');
  }
}
