import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, NgIconComponent],
  template: `
    <div [ngSwitch]="level()" [class]="headerClasses">
      <h1 *ngSwitchCase="'h1'" [class]="titleClasses">
        <ng-icon *ngIf="icon()" [name]="icon()" [size]="iconSize" [class]="iconClasses"></ng-icon>
        {{ title() }}
      </h1>
      <h2 *ngSwitchCase="'h2'" [class]="titleClasses">
        <ng-icon *ngIf="icon()" [name]="icon()" [size]="iconSize" [class]="iconClasses"></ng-icon>
        {{ title() }}
      </h2>
      <h3 *ngSwitchDefault [class]="titleClasses">
        <ng-icon *ngIf="icon()" [name]="icon()" [size]="iconSize" [class]="iconClasses"></ng-icon>
        {{ title() }}
      </h3>
    </div>
    <p *ngIf="description()" [class]="descriptionClasses">
      {{ description() }}
    </p>
  `,
  styles: [],
})
export class SectionHeaderComponent {
  title = input.required<string>();
  icon = input<string>();
  iconColor = input<string>('blue');
  level = input<'h1' | 'h2' | 'h3'>('h2');
  description = input<string>();
  center = input<boolean>(false);
  marginBottom = input<string>('6');

  get headerClasses(): string {
    const classes = [`mb-${this.marginBottom()}`];
    if (this.center()) {
      classes.push('text-center');
    }
    return classes.join(' ');
  }

  get titleClasses(): string {
    const classes = ['font-bold text-gray-800 dark:text-gray-100 flex items-center'];
    const centerValue = this.center();
    const levelValue = this.level();

    if (centerValue) {
      classes.push('justify-center');
    }

    switch (levelValue) {
      case 'h1':
        classes.push('text-4xl');
        break;
      case 'h2':
        classes.push('text-2xl');
        break;
      case 'h3':
        classes.push('text-xl');
        break;
    }

    return classes.join(' ');
  }

  get iconClasses(): string {
    return `text-${this.iconColor()}-500 mr-3`;
  }

  get iconSize(): string {
    switch (this.level()) {
      case 'h1':
        return '1.5rem';
      case 'h2':
        return '1.125rem';
      case 'h3':
        return '1rem';
      default:
        return '1.125rem';
    }
  }

  get descriptionClasses(): string {
    const classes = ['text-gray-600 dark:text-gray-300 leading-relaxed mt-2'];
    if (this.center()) {
      classes.push('text-center');
    }
    return classes.join(' ');
  }
}
