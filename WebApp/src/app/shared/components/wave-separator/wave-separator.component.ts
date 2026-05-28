import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type WaveStyle = 'wave' | 'curve' | 'zigzag' | 'slant' | 'triangle' | 'book';
export type WaveDirection = 'top' | 'bottom' | 'both';

@Component({
  selector: 'app-wave-separator',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgStyle],
  template: `
    @if (showTop()) {
      <div
        [class]="waveStyle() === 'slant' ? 'separator separator-top separator-skew' : 'overflow-hidden leading-none'"
      >
        @if (waveStyle() === 'slant') {
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              [attr.points]="getPolygonPoints('top')"
              [ngStyle]="pathStyle()"
              class="dark:!fill-gray-900"
            ></polygon>
          </svg>
        } @else {
          <svg
            class="relative block w-full"
            [attr.height]="svgHeight()"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              [attr.d]="getPathData('top')"
              [class]="pathClasses()"
              [ngStyle]="pathStyle()"
              class="dark:!fill-gray-900"
            ></path>
          </svg>
        }
      </div>
    }

    <ng-content></ng-content>

    @if (showBottom()) {
      <div
        [class]="
          waveStyle() === 'slant'
            ? 'separator separator-bottom separator-skew'
            : 'overflow-hidden leading-none rotate-180'
        "
      >
        @if (waveStyle() === 'slant') {
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              [attr.points]="getPolygonPoints('bottom')"
              [ngStyle]="pathStyle()"
              class="dark:!fill-gray-900"
            ></polygon>
          </svg>
        } @else {
          <svg
            class="relative block w-full"
            [attr.height]="svgHeight()"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              [attr.d]="getPathData('bottom')"
              [class]="pathClasses()"
              [ngStyle]="pathStyle()"
              class="dark:!fill-gray-900"
            ></path>
          </svg>
        }
      </div>
    }
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
  readonly waveStyle = input<WaveStyle>('wave');
  readonly direction = input<WaveDirection>('bottom');
  readonly height = input<'sm' | 'md' | 'lg' | 'xl'>('md');
  readonly color = input('white');
  readonly opacity = input(100);
  readonly animate = input(false);
  readonly flip = input(false);

  readonly showTop = computed(() => this.direction() === 'top' || this.direction() === 'both');
  readonly showBottom = computed(() => this.direction() === 'bottom' || this.direction() === 'both');

  readonly svgHeight = computed(() => {
    switch (this.height()) {
      case 'sm':
        return 40;
      case 'md':
        return 60;
      case 'lg':
        return 80;
      case 'xl':
        return 120;
    }
  });

  readonly pathClasses = computed(() => {
    const classes: string[] = [];
    if (this.opacity() !== 100) classes.push(`opacity-${this.opacity()}`);
    if (this.animate()) classes.push('animate-pulse');
    return classes.join(' ');
  });

  readonly pathStyle = computed<Record<string, string>>(() => ({ fill: this.color() }));

  getPolygonPoints(position: 'top' | 'bottom'): string {
    return position === 'top' ? '2560 100 2560 0 0 100' : '2560 0 2560 100 0 100';
  }

  getPathData(position: 'top' | 'bottom'): string {
    const shouldFlip = this.flip() !== (position === 'top');

    switch (this.waveStyle()) {
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
    }
  }
}
