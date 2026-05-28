import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LinkHintsService } from '../../../shared/services/link-hints.service';

interface RenderedHint {
  readonly label: string;
  readonly typed: string;
  readonly remaining: string;
  readonly top: number;
  readonly left: number;
}

@Component({
  selector: 'app-link-hints',
  standalone: true,
  templateUrl: './link-hints.component.html',
  styleUrl: './link-hints.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkHintsComponent {
  private readonly service = inject(LinkHintsService);

  readonly isActive = this.service.isActive;

  readonly renderedHints = computed<readonly RenderedHint[]>(() => {
    const q = this.service.query();
    return this.service.visibleHints().map((h) => ({
      label: h.label,
      typed: h.label.startsWith(q) ? q : '',
      remaining: h.label.startsWith(q) ? h.label.slice(q.length) : h.label,
      top: h.top,
      left: h.left,
    }));
  });

  trackHint(_index: number, item: RenderedHint): string {
    return item.label;
  }
}
