import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { type ArrowDirection, inferGridColumns, nextGridIndex } from './grid-keyboard-nav.helpers';

const ARROW_DIRECTIONS: Readonly<Record<string, ArrowDirection>> = {
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
};

const ANCHOR_SELECTOR = '[data-card-anchor]';
const PRIMARY_SELECTOR = '[data-card-primary]';

@Directive({
  selector: '[appGridKeyboardNav]',
  standalone: true,
})
export class GridKeyboardNavDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (target?.matches(ANCHOR_SELECTOR)) {
        const primary = target.querySelector<HTMLElement>(PRIMARY_SELECTOR);
        if (primary) {
          event.preventDefault();
          primary.click();
        }
      }
      return;
    }

    const direction = ARROW_DIRECTIONS[event.key];
    if (!direction) return;

    const anchors = Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>(ANCHOR_SELECTOR));
    if (anchors.length < 2) return;

    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) return;
    const currentAnchor = anchors.find((anchor) => anchor === target || anchor.contains(target));
    if (!currentAnchor) return;

    const currentIndex = anchors.indexOf(currentAnchor);
    const cols = inferGridColumns(anchors.map((a) => a.getBoundingClientRect().top));
    const nextIndex = nextGridIndex(currentIndex, direction, anchors.length, cols);
    if (nextIndex === null) return;
    const target2 = anchors[nextIndex];
    if (!target2) return;

    event.preventDefault();
    target2.focus();
  }
}
