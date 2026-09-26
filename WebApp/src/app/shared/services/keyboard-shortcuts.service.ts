import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommandPaletteService } from './command-palette.service';
import {
  isEditableTarget,
  parseSingleKeyPreference,
  resolveGPrefixRoute,
  SHORTCUT_PREFIX_TIMEOUT_MS,
  SINGLE_KEY_SHORTCUTS_STORAGE_KEY,
} from './keyboard-shortcuts.helpers';
import { LinkHintsService } from './link-hints.service';
import { ShortcutsHelpService } from './shortcuts-help.service';

export {
  SHORTCUT_BINDINGS,
  SHORTCUT_GROUPS,
  type ShortcutBinding,
  type ShortcutGroup,
} from './keyboard-shortcuts.helpers';

const LINE_SCROLL_STEP_PX = 80;

@Injectable({ providedIn: 'root' })
export class KeyboardShortcutsService {
  private readonly router = inject(Router);
  private readonly palette = inject(CommandPaletteService);
  private readonly help = inject(ShortcutsHelpService);
  private readonly linkHints = inject(LinkHintsService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);

  private pendingPrefix: 'g' | null = null;
  private pendingTimer: ReturnType<typeof setTimeout> | null = null;
  private initialized = false;

  private readonly _singleKeysEnabled = signal(parseSingleKeyPreference(this.readPreference()));
  /** Whether single-character shortcuts (j, k, g, f, /, ?, ...) respond. Modifier shortcuts are unaffected. */
  readonly singleKeysEnabled = this._singleKeysEnabled.asReadonly();

  setSingleKeysEnabled(enabled: boolean): void {
    this._singleKeysEnabled.set(enabled);
    try {
      this.document.defaultView?.localStorage.setItem(SINGLE_KEY_SHORTCUTS_STORAGE_KEY, enabled ? 'on' : 'off');
    } catch {
      // Storage can be unavailable (privacy modes); the choice still applies for this visit.
    }
    if (!enabled) {
      this.clearPrefix();
      this.linkHints.deactivate();
    }
  }

  init(): void {
    if (this.initialized) return;
    this.initialized = true;
    const handler = (event: KeyboardEvent) => this.handleKey(event);
    this.document.addEventListener('keydown', handler);
    this.destroyRef.onDestroy(() => {
      this.document.removeEventListener('keydown', handler);
      this.clearPrefix();
    });
  }

  private handleKey(event: KeyboardEvent): void {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (isEditableTarget(event.target)) return;
    // The off switch covers character keys (WCAG 2.1.4); arrow keys still wake
    // the card grid.
    if (!this._singleKeysEnabled() && event.key.length === 1) return;

    if (this.linkHints.isActive()) {
      this.handleHintsKey(event);
      return;
    }

    if (this.pendingPrefix === 'g') {
      const key = event.key;
      this.clearPrefix();
      if (key === 'g') {
        event.preventDefault();
        this.scrollToTop();
        return;
      }
      const route = resolveGPrefixRoute(key);
      if (route) {
        event.preventDefault();
        void this.router.navigateByUrl(route);
      }
      return;
    }

    if (event.key === 'g') {
      event.preventDefault();
      this.pendingPrefix = 'g';
      this.pendingTimer = setTimeout(() => this.clearPrefix(), SHORTCUT_PREFIX_TIMEOUT_MS);
      return;
    }

    if (event.key === 'G') {
      event.preventDefault();
      this.scrollToBottom();
      return;
    }

    if (event.key === '/' || event.key === ':') {
      event.preventDefault();
      this.palette.open();
      return;
    }

    if (event.key === '?') {
      event.preventDefault();
      this.help.toggle();
      return;
    }

    if (event.key === 'j') {
      event.preventDefault();
      this.scrollBy(LINE_SCROLL_STEP_PX);
      return;
    }

    if (event.key === 'k') {
      event.preventDefault();
      this.scrollBy(-LINE_SCROLL_STEP_PX);
      return;
    }

    if (event.key === 'f') {
      event.preventDefault();
      this.linkHints.activate();
      return;
    }

    this.maybeWakeGrid(event);
  }

  private handleHintsKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.linkHints.deactivate();
      return;
    }
    if (event.key === 'Backspace') {
      event.preventDefault();
      this.linkHints.backspace();
      return;
    }
    if (event.key.length === 1) {
      event.preventDefault();
      const target = this.linkHints.appendKey(event.key);
      if (target) {
        this.activateHintTarget(target);
        this.linkHints.deactivate();
      }
    }
  }

  private activateHintTarget(el: HTMLElement): void {
    if (el.matches('[data-card-anchor]')) {
      const primary = el.querySelector<HTMLElement>('[data-card-primary]');
      primary?.click();
      return;
    }
    el.focus({ preventScroll: false });
    el.click();
  }

  /**
   * When the user presses an arrow key on a page that has a card grid, focus
   * the first card so the grid's keyboard nav directive takes over. Only fires
   * when nothing specific is focused (body or <main>), so it does not steal
   * arrow keys from inputs, links, the navbar, or overlays.
   */
  private maybeWakeGrid(event: KeyboardEvent): void {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowRight') return;
    if (this.palette.isOpen() || this.help.isOpen()) return;

    const active = this.document.activeElement;
    const tag = active?.tagName;
    const isUntargeted = !active || tag === 'BODY' || tag === 'MAIN';
    if (!isUntargeted) return;

    const firstCard = this.document.querySelector<HTMLElement>('[data-card-anchor]');
    if (!firstCard) return;

    event.preventDefault();
    firstCard.focus();
    firstCard.scrollIntoView({ block: 'nearest' });
  }

  // Scrolls inherit the root's CSS scroll-behavior, which is smooth unless the
  // visitor prefers reduced motion (see styles.scss).
  private scrollToTop(): void {
    const win = this.document.defaultView;
    win?.scrollTo({ top: 0 });
  }

  private scrollToBottom(): void {
    const win = this.document.defaultView;
    const height = this.document.documentElement.scrollHeight;
    win?.scrollTo({ top: height });
  }

  private scrollBy(deltaPx: number): void {
    this.document.defaultView?.scrollBy({ top: deltaPx });
  }

  private readPreference(): string | null {
    try {
      return this.document.defaultView?.localStorage.getItem(SINGLE_KEY_SHORTCUTS_STORAGE_KEY) ?? null;
    } catch {
      return null;
    }
  }

  private clearPrefix(): void {
    this.pendingPrefix = null;
    if (this.pendingTimer) {
      clearTimeout(this.pendingTimer);
      this.pendingTimer = null;
    }
  }
}
