import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

export interface BulletListItem {
  text: string;
  icon?: string;
  highlighted?: boolean;
  subItems?: BulletListItem[];
}

export type BulletStyle = 'dot' | 'arrow' | 'check' | 'dash' | 'number' | 'icon';

@Component({
  selector: 'app-bullet-list',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  template: `
    <ul [class]="listClasses" [attr.role]="role">
      <li *ngFor="let item of items; trackBy: trackByFn; index as i" [class]="getItemClasses(item, i)">
        <div class="flex items-start">
          <!-- Bullet/Icon/Number -->
          <div [class]="bulletContainerClasses">
            <ng-icon
              *ngIf="bulletStyle === 'icon' && item.icon"
              [name]="item.icon"
              [size]="iconSize"
              [class]="getBulletIconClasses(item)"
            >
            </ng-icon>
            <ng-icon
              *ngIf="bulletStyle === 'check'"
              name="heroCheck"
              [size]="iconSize"
              [class]="getBulletIconClasses(item)"
            >
            </ng-icon>
            <span *ngIf="bulletStyle === 'number'" [class]="getNumberClasses(item, i)"> {{ i + 1 }}. </span>
            <span *ngIf="bulletStyle === 'dot'" [class]="getDotClasses(item)"> • </span>
            <span *ngIf="bulletStyle === 'arrow'" [class]="getArrowClasses(item)"> → </span>
            <span *ngIf="bulletStyle === 'dash'" [class]="getDashClasses(item)"> – </span>
          </div>

          <!-- Content -->
          <div [class]="contentClasses">
            <span [class]="getTextClasses(item)">{{ item.text }}</span>

            <!-- Sub-items -->
            <app-bullet-list
              *ngIf="item.subItems && item.subItems.length > 0"
              [items]="item.subItems"
              [bulletStyle]="subBulletStyle || 'dot'"
              [variant]="variant"
              [size]="size"
              [spacing]="spacing"
              [colorTheme]="colorTheme"
              class="mt-2"
            >
            </app-bullet-list>
          </div>
        </div>
      </li>
    </ul>
  `,
  styles: [],
})
export class BulletListComponent {
  @Input() items: BulletListItem[] = [];
  @Input() bulletStyle: BulletStyle = 'dot';
  @Input() variant: 'default' | 'compact' | 'spacious' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() spacing: 'tight' | 'normal' | 'loose' = 'normal';
  @Input() colorTheme = 'blue';
  @Input() role = 'list';
  @Input() subBulletStyle?: BulletStyle;

  get listClasses(): string {
    const classes = ['list-none'];

    // Spacing between items
    switch (this.spacing) {
      case 'tight':
        classes.push('space-y-1');
        break;
      case 'normal':
        classes.push('space-y-2');
        break;
      case 'loose':
        classes.push('space-y-4');
        break;
    }

    // Variant-specific styles
    switch (this.variant) {
      case 'compact':
        classes.push('text-sm');
        break;
      case 'spacious':
        classes.push('py-2');
        break;
    }

    return classes.join(' ');
  }

  get bulletContainerClasses(): string {
    const classes = ['flex-shrink-0', 'flex', 'items-center', 'justify-center'];

    // Size-based dimensions
    switch (this.size) {
      case 'sm':
        classes.push('w-4', 'h-4', 'mr-2');
        break;
      case 'md':
        classes.push('w-5', 'h-5', 'mr-3');
        break;
      case 'lg':
        classes.push('w-6', 'h-6', 'mr-4');
        break;
    }

    return classes.join(' ');
  }

  get contentClasses(): string {
    const classes = ['flex-1', 'min-w-0'];

    // Size-based text
    switch (this.size) {
      case 'sm':
        classes.push('text-sm');
        break;
      case 'md':
        classes.push('text-base');
        break;
      case 'lg':
        classes.push('text-lg');
        break;
    }

    return classes.join(' ');
  }

  get iconSize(): string {
    switch (this.size) {
      case 'sm':
        return '0.875rem';
      case 'md':
        return '1rem';
      case 'lg':
        return '1.25rem';
      default:
        return '1rem';
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getItemClasses(item: BulletListItem, _index: number): string {
    const classes = ['flex'];

    if (item.highlighted) {
      classes.push(`bg-${this.colorTheme}-50`, 'rounded-lg', 'p-3', '-mx-3');
    }

    return classes.join(' ');
  }

  getTextClasses(item: BulletListItem): string {
    const classes = ['leading-relaxed'];

    if (item.highlighted) {
      classes.push(`text-${this.colorTheme}-900`, 'font-medium');
    } else {
      classes.push('text-gray-700');
    }

    return classes.join(' ');
  }

  getBulletIconClasses(item: BulletListItem): string {
    if (item.highlighted) {
      return `text-${this.colorTheme}-600`;
    }
    return `text-${this.colorTheme}-500`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getNumberClasses(item: BulletListItem, _index: number): string {
    const classes = ['font-semibold', 'text-sm'];

    if (item.highlighted) {
      classes.push(`text-${this.colorTheme}-600`);
    } else {
      classes.push(`text-${this.colorTheme}-500`);
    }

    return classes.join(' ');
  }

  getDotClasses(item: BulletListItem): string {
    const classes = ['font-bold'];

    if (item.highlighted) {
      classes.push(`text-${this.colorTheme}-600`);
    } else {
      classes.push(`text-${this.colorTheme}-500`);
    }

    return classes.join(' ');
  }

  getArrowClasses(item: BulletListItem): string {
    const classes = ['font-medium'];

    if (item.highlighted) {
      classes.push(`text-${this.colorTheme}-600`);
    } else {
      classes.push(`text-${this.colorTheme}-500`);
    }

    return classes.join(' ');
  }

  getDashClasses(item: BulletListItem): string {
    const classes = ['font-medium'];

    if (item.highlighted) {
      classes.push(`text-${this.colorTheme}-600`);
    } else {
      classes.push('text-gray-400');
    }

    return classes.join(' ');
  }

  readonly trackByFn = (index: number, item: BulletListItem): string | number => {
    return item.text || index;
  };
}
