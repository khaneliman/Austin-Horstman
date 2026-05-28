import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

const COLOR_VARIATIONS = ['blue', 'green', 'purple', 'red', 'indigo', 'yellow', 'pink', 'teal'] as const;

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
  readonly columns = input(4);
  readonly color = input('blue');
  readonly colorVariation = input(true);
  readonly itemSize = input<'sm' | 'md' | 'lg'>('md');
  readonly gap = input('6');
  readonly showBackground = input(false);
  readonly containerBackground = input(false);
  readonly containerColor = input('blue');

  readonly containerClasses = computed(() => {
    if (!this.containerBackground()) return '';
    const c = this.containerColor();
    return `bg-gradient-to-r from-${c}-50 to-${c}-100 dark:from-${c}-900/20 dark:to-${c}-800/30 rounded-2xl p-8`;
  });

  readonly gridClasses = computed(() => {
    const classes = ['grid', `gap-${this.gap()}`, 'text-center'];
    const count = this.stats().length;
    if (count <= 2) classes.push('grid-cols-2');
    else if (count === 3) classes.push('grid-cols-3');
    else classes.push(`grid-cols-2 md:grid-cols-${Math.min(this.columns(), 4)}`);
    return classes.join(' ');
  });

  getStatColor(index: number): string {
    if (!this.colorVariation()) return this.color();
    return COLOR_VARIATIONS[index % COLOR_VARIATIONS.length] ?? 'blue';
  }
}
