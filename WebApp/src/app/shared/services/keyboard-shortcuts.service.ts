import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommandPaletteService } from './command-palette.service';
import { isEditableTarget, resolveGPrefixRoute, SHORTCUT_PREFIX_TIMEOUT_MS } from './keyboard-shortcuts.helpers';

export { SHORTCUT_BINDINGS, type ShortcutBinding } from './keyboard-shortcuts.helpers';

@Injectable({ providedIn: 'root' })
export class KeyboardShortcutsService {
  private readonly router = inject(Router);
  private readonly palette = inject(CommandPaletteService);
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
