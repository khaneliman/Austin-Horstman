import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

export type HeadingLevel = 'h1' | 'h2' | 'h3';
export type SectionHeaderMargin = '0' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12';

const MARGIN_CLASSES: Record<SectionHeaderMargin, string> = {
  '0': 'mb-0',
  '2': 'mb-2',
  '3': 'mb-3',
  '4': 'mb-4',
  '5': 'mb-5',
  '6': 'mb-6',
  '8': 'mb-8',
  '10': 'mb-10',
  '12': 'mb-12',
};

@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent],
  template: `
    <div [class]="headerClasses()">
      @switch (level()) {
        @case ('h1') {
          <h1 [class]="titleClasses()">
            @if (icon(); as ic) {
              <ng-icon [name]="ic" [size]="iconSize()" [class]="iconClasses()"></ng-icon>
            }
            {{ title() }}
          </h1>
        }
        @case ('h2') {
          <h2 [class]="titleClasses()">
            @if (icon(); as ic) {
              <ng-icon [name]="ic" [size]="iconSize()" [class]="iconClasses()"></ng-icon>
            }
            {{ title() }}
          </h2>
        }
        @default {
          <h3 [class]="titleClasses()">
            @if (icon(); as ic) {
              <ng-icon [name]="ic" [size]="iconSize()" [class]="iconClasses()"></ng-icon>
            }
            {{ title() }}
          </h3>
        }
      }
    </div>
    @if (description(); as desc) {
      <p [class]="descriptionClasses()">{{ desc }}</p>
    }
  `,
})
export class SectionHeaderComponent {
  readonly title = input.required<string>();
  readonly icon = input<string>();
  readonly iconColor = input('blue');
  readonly level = input<HeadingLevel>('h2');
  readonly description = input<string>();
  readonly center = input(false);
  readonly marginBottom = input<SectionHeaderMargin>('6');

  // `palette-{iconColor}` (src/_palettes.scss) exposes --p-* shade variables
  // so the icon's static var-based class resolves correctly.
  readonly headerClasses = computed(() => {
    const classes = [`palette-${this.iconColor()}`, MARGIN_CLASSES[this.marginBottom()]];
    if (this.center()) classes.push('text-center');
    return classes.join(' ');
  });

  readonly titleClasses = computed(() => {
    const classes = ['font-bold text-gray-800 dark:text-gray-100 flex items-center'];
    if (this.center()) classes.push('justify-center');
    switch (this.level()) {
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
  });

  readonly iconClasses = computed(() => 'text-[var(--p-500)] mr-3');

  readonly iconSize = computed(() => {
    switch (this.level()) {
      case 'h1':
        return '1.5rem';
      case 'h2':
        return '1.125rem';
      case 'h3':
        return '1rem';
    }
  });

  readonly descriptionClasses = computed(() => {
    const classes = ['text-gray-600 dark:text-gray-300 leading-relaxed mt-2'];
    if (this.center()) classes.push('text-center');
    return classes.join(' ');
  });
}
