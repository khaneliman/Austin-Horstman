import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type WaveStyle =
  | 'wave'
  | 'curve'
  | 'zigzag'
  | 'slant'
  | 'triangle'
  | 'book';
export type WaveDirection = 'top' | 'bottom' | 'both';

@Component({
  selector: 'app-wave-separator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top separator -->
    <div
      *ngIf="direction === 'top' || direction === 'both'"
      class="overflow-hidden leading-none"
    >
      <svg
        class="relative block w-full"
        [attr.height]="svgHeight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          [attr.d]="getPathData('top')"
          [class]="getPathClasses('top')"
        ></path>
      </svg>
    </div>

    <!-- Content slot -->
    <ng-content></ng-content>

    <!-- Bottom separator -->
    <div
      *ngIf="direction === 'bottom' || direction === 'both'"
      class="overflow-hidden leading-none rotate-180"
    >
      <svg
        class="relative block w-full"
        [attr.height]="svgHeight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          [attr.d]="getPathData('bottom')"
          [class]="getPathClasses('bottom')"
        ></path>
      </svg>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class WaveSeparatorComponent {
  @Input() waveStyle: WaveStyle = 'wave';
  @Input() direction: WaveDirection = 'bottom';
  @Input() height: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color = 'white';
  @Input() opacity = 100;
  @Input() animate = false;
  @Input() flip = false;
  @Input() minHeight = '0px';

  get svgHeight(): number {
    switch (this.height) {
      case 'sm':
        return 40;
      case 'md':
        return 60;
      case 'lg':
        return 80;
      case 'xl':
        return 120;
      default:
        return 60;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPathClasses(position: 'top' | 'bottom'): string {
    const classes = [`fill-${this.color}`];

    if (this.opacity !== 100) {
      classes.push(`opacity-${this.opacity}`);
    }

    if (this.animate) {
      classes.push('animate-pulse');
    }

    return classes.join(' ');
  }

  getPathData(position: 'top' | 'bottom'): string {
    const baseFlip = this.flip;
    const positionFlip = position === 'top';
    const shouldFlip = baseFlip !== positionFlip;

    switch (this.waveStyle) {
      case 'wave':
        return 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z';

      case 'curve':
        return shouldFlip
          ? 'M0,160L1440,96L1440,0L0,0Z'
          : 'M0,96L1440,160L1440,320L0,320Z';

      case 'zigzag':
        return shouldFlip
          ? 'M0,128L120,96L240,128L360,64L480,128L600,96L720,128L840,64L960,128L1080,96L1200,128L1200,0L0,0Z'
          : 'M0,64L120,96L240,64L360,128L480,64L600,96L720,64L840,128L960,64L1080,96L1200,64L1200,320L0,320Z';

      case 'slant':
        return shouldFlip
          ? 'M0,320L1440,160L1440,0L0,0Z'
          : 'M0,160L1440,320L1440,320L0,320Z';

      case 'triangle':
        return shouldFlip
          ? 'M0,320L720,160L1440,320L1440,0L0,0Z'
          : 'M0,160L720,320L1440,160L1440,320L0,320Z';

      case 'book':
        return shouldFlip
          ? 'M0,160L240,96L480,160L720,64L960,160L1200,96L1200,0L0,0Z'
          : 'M0,96L240,160L480,96L720,160L960,96L1200,160L1200,320L0,320Z';

      default:
        return 'M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,106.7C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';
    }
  }
}
