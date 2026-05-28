import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export type StatsGridGap = '2' | '3' | '4' | '5' | '6' | '8';
export type StatsGridColumns = 2 | 3 | 4;

const COLOR_VARIATIONS = ['blue', 'green', 'purple', 'red', 'indigo', 'yellow', 'pink', 'teal'] as const;

const GAP_CLASSES: Record<StatsGridGap, string> = {
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '8': 'gap-8',
};

const RESPONSIVE_COLUMNS: Record<StatsGridColumns, string> = {
  2: 'grid-cols-2 md:grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
};

@Component({
  selector: 'app-stats-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StatCardComponent],
  template: `
    <div [class]="containerClasses()">
      <div [class]="gridClasses()">
        @for (stat of stats(); track stat.label; let i = $index) {
          <app-stat-card
            [icon]="stat.icon"
            [value]="stat.value"
            [label]="stat.label"
            [color]="getStatColor(i)"
            [size]="itemSize()"
            [center]="true"
            [background]="showBackground()"
          ></app-stat-card>
        }
      </div>
    </div>
  `,
})
export class StatsGridComponent {
  readonly stats = input<Stat[]>([]);
  readonly columns = input<StatsGridColumns>(4);
  readonly color = input('blue');
  readonly colorVariation = input(true);
  readonly itemSize = input<'sm' | 'md' | 'lg'>('md');
  readonly gap = input<StatsGridGap>('6');
  readonly showBackground = input(false);
  readonly containerBackground = input(false);
  readonly containerColor = input('blue');

  // `palette-{containerColor}` exposes --p-* vars for the gradient.
  readonly containerClasses = computed(() => {
    if (!this.containerBackground()) return '';
    return `palette-${this.containerColor()} bg-gradient-to-r from-[var(--p-50)] to-[var(--p-100)] dark:from-[var(--p-900-20)] dark:to-[var(--p-900-30)] rounded-2xl p-8`;
  });

  readonly gridClasses = computed(() => {
    const classes = ['grid', GAP_CLASSES[this.gap()], 'text-center'];
    const count = this.stats().length;
    if (count <= 2) classes.push('grid-cols-2');
    else if (count === 3) classes.push('grid-cols-3');
    else classes.push(RESPONSIVE_COLUMNS[this.columns()]);
    return classes.join(' ');
  });

  getStatColor(index: number): string {
    if (!this.colorVariation()) return this.color();
    return COLOR_VARIATIONS[index % COLOR_VARIATIONS.length] ?? 'blue';
  }
}
