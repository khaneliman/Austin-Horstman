import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  NgZone,
  numberAttribute,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { countUpValue, formatCount } from './count-up.helpers';

/**
 * Counts the host element's text from 0 up to a target the first time it
 * scrolls into view. Owns the element's text content, so the host should not
 * also interpolate a value. Honors prefers-reduced-motion and SSR by writing
 * the final value immediately. The rAF loop runs outside Angular since it
 * mutates textContent directly and needs no change detection.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit {
  readonly appCountUp = input.required<number, unknown>({ transform: numberAttribute });
  readonly countUpSuffix = input('');
  readonly countUpDuration = input(1100, { transform: numberAttribute });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const target = this.appCountUp();
    const suffix = this.countUpSuffix();

    if (
      !isPlatformBrowser(this.platformId) ||
      typeof IntersectionObserver === 'undefined' ||
      this.prefersReducedMotion()
    ) {
      this.write(target, suffix);
      return;
    }

    this.write(0, suffix);

    this.zone.runOutsideAngular(() => {
      const observer = new IntersectionObserver(
        (records) => {
          for (const record of records) {
            if (record.isIntersecting) {
              observer.unobserve(record.target);
              this.animate(target, suffix);
            }
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(this.el.nativeElement);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  private prefersReducedMotion(): boolean {
    return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private animate(target: number, suffix: string): void {
    const duration = this.countUpDuration();
    let start: number | null = null;

    const step = (now: number): void => {
      start ??= now;
      const elapsed = now - start;
      this.write(countUpValue(elapsed, duration, target), suffix);
      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  private write(value: number, suffix: string): void {
    this.el.nativeElement.textContent = formatCount(value, suffix);
  }
}
