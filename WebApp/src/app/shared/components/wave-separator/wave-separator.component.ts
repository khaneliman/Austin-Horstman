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
    <div [class]="containerClasses">
      <!-- Top separator -->
      <div
        *ngIf="direction === 'top' || direction === 'both'"
        class="absolute top-0 left-0 w-full overflow-hidden leading-none"
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
      <div [class]="contentClasses">
        <ng-content></ng-content>
      </div>

      <!-- Bottom separator -->
      <div
        *ngIf="direction === 'bottom' || direction === 'both'"
        class="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180"
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

  get containerClasses(): string {
    const classes = ['relative'];

    if (this.minHeight !== '0px') {
      classes.push('min-h-[var(--min-height)]');
    }

    return classes.join(' ');
  }

  get contentClasses(): string {
    const classes = ['relative', 'z-10'];

    // Add padding to account for wave height
    if (this.direction === 'top' || this.direction === 'both') {
      classes.push(`pt-[${this.svgHeight}px]`);
    }
    if (this.direction === 'bottom' || this.direction === 'both') {
      classes.push(`pb-[${this.svgHeight}px]`);
    }

    return classes.join(' ');
  }

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
    const positionFlip = ((position === 'top') !== position) === 'bottom';
    const shouldFlip = baseFlip !== positionFlip;

    switch (this.waveStyle) {
      case 'wave':
        return shouldFlip
          ? 'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          : 'M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,106.7C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';

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
