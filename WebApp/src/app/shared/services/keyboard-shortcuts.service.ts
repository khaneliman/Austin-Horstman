import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommandPaletteService } from './command-palette.service';
import { isEditableTarget, resolveGPrefixRoute, SHORTCUT_PREFIX_TIMEOUT_MS } from './keyboard-shortcuts.helpers';
import { ShortcutsHelpService } from './shortcuts-help.service';

export {
  SHORTCUT_BINDINGS,
  SHORTCUT_GROUPS,
  type ShortcutBinding,
  type ShortcutGroup,
} from './keyboard-shortcuts.helpers';

@Injectable({ providedIn: 'root' })
export class KeyboardShortcutsService {
  private readonly router = inject(Router);
  private readonly palette = inject(CommandPaletteService);
  private readonly help = inject(ShortcutsHelpService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);

  private pendingPrefix: 'g' | null = null;
  private pendingTimer: ReturnType<typeof setTimeout> | null = null;
  private initialized = false;

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

    if (this.pendingPrefix === 'g') {
      const route = resolveGPrefixRoute(event.key);
      this.clearPrefix();
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

    if (event.key === '/') {
      event.preventDefault();
      this.palette.open();
      return;
    }

    if (event.key === '?') {
      event.preventDefault();
      this.help.toggle();
      return;
    }

    this.maybeWakeGrid(event);
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
    firstCard.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  private clearPrefix(): void {
    this.pendingPrefix = null;
    if (this.pendingTimer) {
      clearTimeout(this.pendingTimer);
      this.pendingTimer = null;
    }
  }
}
