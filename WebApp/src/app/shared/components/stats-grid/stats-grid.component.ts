import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../stat-card/stat-card.component';

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats-grid',
  standalone: true,
  imports: [CommonModule, StatCardComponent],
  template: `
    <div [class]="containerClasses">
      <div [class]="gridClasses">
        <app-stat-card
          *ngFor="let stat of stats"
          [icon]="stat.icon"
          [value]="stat.value"
          [label]="stat.label"
          [color]="getStatColor($index)"
          [size]="itemSize"
          [center]="true"
          [background]="showBackground"
        ></app-stat-card>
      </div>
    </div>
  `,
  styles: [],
})
export class StatsGridComponent {
  @Input() stats: Stat[] = [];
  @Input() columns = 4;
  @Input() color = 'blue';
  @Input() colorVariation = true;
  @Input() itemSize: 'sm' | 'md' | 'lg' = 'md';
  @Input() gap = '6';
  @Input() showBackground = false;
  @Input() containerBackground = false;
  @Input() containerColor = 'blue';

  private colorVariations = [
    'blue',
    'green',
    'purple',
    'red',
    'indigo',
    'yellow',
    'pink',
    'teal',
  ];

  get containerClasses(): string {
    const classes = [];

    if (this.containerBackground) {
      classes.push(
        `bg-gradient-to-r from-${this.containerColor}-50 to-${this.containerColor}-100 rounded-2xl p-8`
      );
    }

    return classes.join(' ');
  }

  get gridClasses(): string {
    const classes = ['grid', `gap-${this.gap}`, 'text-center'];

    // Responsive grid columns based on stats count and desired columns
    const statCount = this.stats.length;

    if (statCount <= 2) {
      classes.push('grid-cols-2');
    } else if (statCount === 3) {
      classes.push('grid-cols-3');
    } else {
      classes.push(`grid-cols-2 md:grid-cols-${Math.min(this.columns, 4)}`);
    }

    return classes.join(' ');
  }

  getStatColor(index: number): string {
    if (!this.colorVariation) {
      return this.color;
    }

    return this.colorVariations[index % this.colorVariations.length];
  }
}
