import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheck } from '@ng-icons/heroicons/outline';

export interface BulletListItem {
  text: string;
  icon?: string;
  highlighted?: boolean;
  subItems?: BulletListItem[];
}

export type BulletStyle = 'dot' | 'arrow' | 'check' | 'dash' | 'number' | 'icon';
export type BulletVariant = 'default' | 'compact' | 'spacious';
export type BulletSize = 'sm' | 'md' | 'lg';
export type BulletSpacing = 'tight' | 'normal' | 'loose';

@Component({
  selector: 'app-bullet-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroCheck })],
  template: `
    <ul [class]="listClasses()" [attr.role]="role()">
      @for (item of items(); track item.text; let i = $index) {
        <li [class]="getItemClasses(item)">
          <div class="flex items-start">
            <div [class]="bulletContainerClasses()">
              @switch (bulletStyle()) {
                @case ('icon') {
                  @if (item.icon; as ic) {
                    <ng-icon [name]="ic" [size]="iconSize()" [class]="getBulletIconClasses(item)"></ng-icon>
                  }
                }
                @case ('check') {
                  <ng-icon name="heroCheck" [size]="iconSize()" [class]="getBulletIconClasses(item)"></ng-icon>
                }
                @case ('number') {
                  <span [class]="getNumberClasses(item)">{{ i + 1 }}.</span>
                }
                @case ('dot') {
                  <span [class]="getDotClasses(item)">•</span>
                }
                @case ('arrow') {
                  <span [class]="getArrowClasses(item)">→</span>
                }
                @case ('dash') {
                  <span [class]="getDashClasses(item)">–</span>
                }
              }
            </div>

            <div [class]="contentClasses()">
              <span [class]="getTextClasses(item)">{{ item.text }}</span>

              @if (item.subItems && item.subItems.length > 0) {
                <app-bullet-list
                  [items]="item.subItems"
                  [bulletStyle]="subBulletStyle() ?? 'dot'"
                  [variant]="variant()"
                  [size]="size()"
                  [spacing]="spacing()"
                  [colorTheme]="colorTheme()"
                  class="mt-2"
                ></app-bullet-list>
              }
            </div>
          </div>
        </li>
      }
    </ul>
  `,
})
export class BulletListComponent {
  readonly items = input<BulletListItem[]>([]);
  readonly bulletStyle = input<BulletStyle>('dot');
  readonly variant = input<BulletVariant>('default');
  readonly size = input<BulletSize>('md');
  readonly spacing = input<BulletSpacing>('normal');
  readonly colorTheme = input('blue');
  readonly role = input('list');
  readonly subBulletStyle = input<BulletStyle>();

  // Sets the `.palette-{color}` ancestor class that exposes --p-* variables
  // to all descendants. See src/_palettes.scss.
  private readonly paletteClass = computed(() => `palette-${this.colorTheme()}`);

  readonly listClasses = computed(() => {
    const classes = [this.paletteClass(), 'list-none'];
    switch (this.spacing()) {
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
    switch (this.variant()) {
      case 'compact':
        classes.push('text-sm');
        break;
      case 'spacious':
        classes.push('py-2');
        break;
      case 'default':
        break;
    }
    return classes.join(' ');
  });

  readonly bulletContainerClasses = computed(() => {
    const classes = ['flex-shrink-0', 'flex', 'items-center', 'justify-center'];
    switch (this.size()) {
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
  });

  readonly contentClasses = computed(() => {
    const classes = ['flex-1', 'min-w-0'];
    switch (this.size()) {
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
  });

  readonly iconSize = computed(() => {
    switch (this.size()) {
      case 'sm':
        return '0.875rem';
      case 'md':
        return '1rem';
      case 'lg':
        return '1.25rem';
    }
  });

  getItemClasses(item: BulletListItem): string {
    const classes = ['flex'];
    if (item.highlighted) {
      classes.push('bg-[var(--p-50)]', 'dark:bg-[var(--p-900-20)]', 'rounded-lg', 'p-3', '-mx-3');
    }
    return classes.join(' ');
  }

  getTextClasses(item: BulletListItem): string {
    const classes = ['leading-relaxed'];
    if (item.highlighted) {
      classes.push('text-[var(--p-900)]', 'dark:text-[var(--p-200)]', 'font-medium');
    } else {
      classes.push('text-gray-700', 'dark:text-gray-300');
    }
    return classes.join(' ');
  }

  getBulletIconClasses(item: BulletListItem): string {
    return item.highlighted
      ? 'text-[var(--p-600)] dark:text-[var(--p-400)]'
      : 'text-[var(--p-500)] dark:text-[var(--p-400)]';
  }

  getNumberClasses(item: BulletListItem): string {
    const tint = item.highlighted
      ? 'text-[var(--p-600)] dark:text-[var(--p-400)]'
      : 'text-[var(--p-500)] dark:text-[var(--p-400)]';
    return `font-semibold text-sm ${tint}`;
  }

  getDotClasses(item: BulletListItem): string {
    const tint = item.highlighted
      ? 'text-[var(--p-600)] dark:text-[var(--p-400)]'
      : 'text-[var(--p-500)] dark:text-[var(--p-400)]';
    return `font-bold ${tint}`;
  }

  getArrowClasses(item: BulletListItem): string {
    const tint = item.highlighted
      ? 'text-[var(--p-600)] dark:text-[var(--p-400)]'
      : 'text-[var(--p-500)] dark:text-[var(--p-400)]';
    return `font-medium ${tint}`;
  }

  getDashClasses(item: BulletListItem): string {
    const tint = item.highlighted ? 'text-[var(--p-600)] dark:text-[var(--p-400)]' : 'text-gray-400 dark:text-gray-500';
    return `font-medium ${tint}`;
  }
}
