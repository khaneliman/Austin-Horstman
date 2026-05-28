import { DOCUMENT } from '@angular/common';
import { computed, Injectable, inject, signal } from '@angular/core';
import { filterHintsByQuery, generateHintLabels, LINK_HINT_SELECTOR } from './link-hints.helpers';

export interface HintEntry {
  readonly label: string;
  readonly element: HTMLElement;
  readonly top: number;
  readonly left: number;
}

@Injectable({ providedIn: 'root' })
export class LinkHintsService {
  private readonly document = inject(DOCUMENT);

  private readonly _hints = signal<readonly HintEntry[]>([]);
  private readonly _query = signal('');
  readonly isActive = signal(false);
  readonly hints = this._hints.asReadonly();
  readonly query = this._query.asReadonly();

  readonly visibleHints = computed<readonly HintEntry[]>(() => {
    const q = this._query();
    if (!q) return this._hints();
    const allowed = new Set(
      filterHintsByQuery(
        this._hints().map((h) => h.label),
        q
      ).remaining
    );
    return this._hints().filter((h) => allowed.has(h.label));
  });

  activate(): void {
    if (this.isActive()) return;
    const targets = this.collectVisibleTargets();
    if (!targets.length) return;

    const labels = generateHintLabels(targets.length);
    const entries: HintEntry[] = targets.map((element, i) => {
      const rect = element.getBoundingClientRect();
      const label = labels[i];
      if (!label) throw new Error('hint label missing');
      return { label, element, top: rect.top, left: rect.left };
    });

    this._hints.set(entries);
    this._query.set('');
    this.isActive.set(true);
  }

  deactivate(): void {
    if (!this.isActive()) return;
    this.isActive.set(false);
    this._hints.set([]);
    this._query.set('');
  }

  /**
   * Append a typed character to the in-progress query. Returns the matched
   * element when the query uniquely identifies a hint; the caller is
   * responsible for activating it and then calling `deactivate`.
   */
  appendKey(char: string): HTMLElement | null {
    if (!this.isActive()) return null;
    const next = this._query() + char.toLowerCase();
    const result = filterHintsByQuery(
      this._hints().map((h) => h.label),
      next
    );
    if (result.remaining.length === 0) {
      this.deactivate();
      return null;
    }
    this._query.set(next);
    if (result.exact) {
      const match = this._hints().find((h) => h.label === result.exact);
      return match?.element ?? null;
    }
    return null;
  }

  backspace(): void {
    if (!this.isActive()) return;
    const q = this._query();
    if (!q) return;
    this._query.set(q.slice(0, -1));
  }

  private collectVisibleTargets(): HTMLElement[] {
    const win = this.document.defaultView;
    if (!win) return [];
    const viewportW = win.innerWidth;
    const viewportH = win.innerHeight;

    const candidates = Array.from(this.document.querySelectorAll<HTMLElement>(LINK_HINT_SELECTOR));
    return candidates.filter((el) => this.isVisible(el, viewportW, viewportH, win));
  }

  private isVisible(el: HTMLElement, viewportW: number, viewportH: number, win: Window): boolean {
    if (el.hasAttribute('hidden')) return false;
    if (el.getAttribute('aria-hidden') === 'true') return false;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return false;
    if (rect.bottom <= 0 || rect.top >= viewportH) return false;
    if (rect.right <= 0 || rect.left >= viewportW) return false;
    const style = win.getComputedStyle(el);
    if (style.visibility === 'hidden' || style.display === 'none') return false;
    if (parseFloat(style.opacity) === 0) return false;
    return true;
  }
}
