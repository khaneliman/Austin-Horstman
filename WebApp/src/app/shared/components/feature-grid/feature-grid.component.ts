import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FeatureItemComponent } from '../feature-item/feature-item.component';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export type FeatureGridGap = '2' | '3' | '4' | '5' | '6' | '8' | '10';

const GAP_CLASSES: Record<FeatureGridGap, string> = {
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '8': 'gap-8',
  '10': 'gap-10',
};

@Component({
  selector: 'app-feature-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeatureItemComponent],
  template: `
    <div [class]="gridClasses()">
      @for (feature of features(); track feature.title) {
        <app-feature-item
          [icon]="feature.icon"
          [title]="feature.title"
          [description]="feature.description"
          [iconColor]="iconColor()"
          [size]="itemSize()"
        ></app-feature-item>
      }
    </div>
  `,
})
export class FeatureGridComponent {
  readonly features = input<Feature[]>([]);
  readonly columns = input<1 | 2>(2);
  readonly iconColor = input('blue');
  readonly itemSize = input<'sm' | 'md' | 'lg'>('md');
  readonly gap = input<FeatureGridGap>('6');

  readonly gridClasses = computed(() => {
    const classes = ['grid', GAP_CLASSES[this.gap()]];
    classes.push(this.columns() === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2');
    return classes.join(' ');
  });
}
