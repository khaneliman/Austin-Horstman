import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type WaveStyle = 'wave' | 'curve' | 'zigzag' | 'slant' | 'triangle' | 'book';
export type WaveDirection = 'top' | 'bottom' | 'both';

@Component({
  selector: 'app-wave-separator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top separator - Slant style uses polygon, others use path -->
    <div
      *ngIf="direction === 'top' || direction === 'both'"
      [ngClass]="waveStyle === 'slant' ? 'separator separator-top separator-skew' : 'overflow-hidden leading-none'"
    >
      <svg
        *ngIf="waveStyle === 'slant'"
        x="0"
        y="0"
        viewBox="0 0 2560 100"
        preserveAspectRatio="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon [attr.points]="getPolygonPoints('top')" [ngStyle]="getPathStyle('top')"></polygon>
      </svg>
      <svg
        *ngIf="waveStyle !== 'slant'"
        class="relative block w-full"
        [attr.height]="svgHeight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path [attr.d]="getPathData('top')" [class]="getPathClasses('top')" [ngStyle]="getPathStyle('top')"></path>
      </svg>
    </div>

    <!-- Content slot -->
    <ng-content></ng-content>

    <!-- Bottom separator - Slant style uses polygon, others use path -->
    <div
      *ngIf="direction === 'bottom' || direction === 'both'"
      [ngClass]="
        waveStyle === 'slant' ? 'separator separator-bottom separator-skew' : 'overflow-hidden leading-none rotate-180'
      "
    >
      <svg
        *ngIf="waveStyle === 'slant'"
        x="0"
        y="0"
        viewBox="0 0 2560 100"
        preserveAspectRatio="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon [attr.points]="getPolygonPoints('bottom')" [ngStyle]="getPathStyle('bottom')"></polygon>
      </svg>
      <svg
        *ngIf="waveStyle !== 'slant'"
        class="relative block w-full"
        [attr.height]="svgHeight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          [attr.d]="getPathData('bottom')"
          [class]="getPathClasses('bottom')"
          [ngStyle]="getPathStyle('bottom')"
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
    const classes: string[] = [];

    if (this.opacity !== 100) {
      classes.push(`opacity-${this.opacity}`);
    }

    if (this.animate) {
      classes.push('animate-pulse');
    }

    return classes.join(' ');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPathStyle(position: 'top' | 'bottom'): Record<string, string> {
    return {
      fill: this.color,
    };
  }

  getPolygonPoints(position: 'top' | 'bottom'): string {
    // Simple skewed separator - clean triangle/slant shape
    if (position === 'top') {
      return '2560 100 2560 0 0 100';
    } else {
      return '2560 0 2560 100 0 100';
    }
  }

  getPathData(position: 'top' | 'bottom'): string {
    const baseFlip = this.flip;
    const positionFlip = position === 'top';
    const shouldFlip = baseFlip !== positionFlip;

    switch (this.waveStyle) {
      case 'wave':
        return 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z';

      case 'curve':
        return shouldFlip ? 'M0,96L1200,64L1200,0L0,0Z' : 'M0,64L1200,96L1200,120L0,120Z';

      case 'zigzag':
        return shouldFlip
          ? 'M0,64L120,48L240,64L360,32L480,64L600,48L720,64L840,32L960,64L1080,48L1200,64L1200,0L0,0Z'
          : 'M0,32L120,48L240,32L360,64L480,32L600,48L720,32L840,64L960,32L1080,48L1200,32L1200,120L0,120Z';

      case 'slant':
        return shouldFlip ? 'M0,120L1200,80L1200,0L0,0Z' : 'M0,80L1200,120L1200,120L0,120Z';

      case 'triangle':
        return shouldFlip ? 'M0,120L600,80L1200,120L1200,0L0,0Z' : 'M0,80L600,120L1200,80L1200,120L0,120Z';

      case 'book':
        return shouldFlip
          ? 'M0,80L200,64L400,80L600,48L800,80L1000,64L1200,80L1200,0L0,0Z'
          : 'M0,64L200,80L400,64L600,80L800,64L1000,80L1200,64L1200,120L0,120Z';

      default:
        return 'M0,32L32,40C64,48,128,64,192,66.7C256,69,320,59,384,53.3C448,48,512,48,576,56C640,64,704,80,768,80C832,80,896,64,928,56L960,48L960,120L928,120C896,120,832,120,768,120C704,120,640,120,576,120C512,120,448,120,384,120C320,120,256,120,192,120C128,120,64,120,32,120L0,120Z';
    }
  }
}
