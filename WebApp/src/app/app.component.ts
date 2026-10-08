import { DOCUMENT } from '@angular/common';
import { afterEveryRender, ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommandPaletteComponent } from './core/components/command-palette/command-palette.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LinkHintsComponent } from './core/components/link-hints/link-hints.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ShortcutsHelpComponent } from './core/components/shortcuts-help/shortcuts-help.component';
import { TerminalEasterEggComponent } from './core/components/terminal-easter-egg/terminal-easter-egg.component';
import { KeyboardShortcutsService } from './shared/services/keyboard-shortcuts.service';
import { ThemeService } from './shared/services/theme.service';

const MODAL = '[role="dialog"][aria-modal="true"]';
const PAGE_REGIONS = ':scope > .skip-to-content, :scope > app-navbar, :scope > main, :scope > app-footer';
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    CommandPaletteComponent,
    ShortcutsHelpComponent,
    LinkHintsComponent,
    TerminalEasterEggComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:focusin)': 'onFocusIn($event)',
    '(document:focusout)': 'onFocusOut($event)',
    '(document:keydown.tab)': 'onTab($event)',
    '(document:keydown.shift.tab)': 'onTab($event)',
  },
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);
  private readonly keyboardShortcuts = inject(KeyboardShortcutsService);
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  private modalOpen = false;
  private lastFocused: HTMLElement | null = null;
  private returnFocus: HTMLElement | null = null;

  constructor() {
    this.keyboardShortcuts.init();
    afterEveryRender(() => this.syncModal());
  }

  onFocusIn(event: FocusEvent): void {
    if (event.target instanceof HTMLElement && !event.target.closest(MODAL)) this.lastFocused = event.target;
  }

  onFocusOut(event: FocusEvent): void {
    // Focus left for the page body (a click on blank space): nothing to return to.
    if (event.relatedTarget === null && event.target instanceof Element && !event.target.closest(MODAL)) {
      this.lastFocused = null;
    }
  }

  onTab(event: Event): void {
    if (!(event instanceof KeyboardEvent)) return;
    const dialog = this.host.nativeElement.querySelector<HTMLElement>(MODAL);
    if (!dialog) return;

    const targets = [...dialog.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
      (element) => element.tabIndex >= 0 && element.getClientRects().length > 0 && !element.closest('[inert]')
    );
    const first = targets[0];
    const last = targets.at(-1);
    const active = this.document.activeElement;

    if (!first || !last) {
      event.preventDefault();
      dialog.tabIndex = -1;
      dialog.focus();
    } else if (
      !dialog.contains(active) ||
      (event.shiftKey && active === first) ||
      (!event.shiftKey && active === last)
    ) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    }
  }

  // The overlays render dialogs as siblings of the page regions. While one is
  // open the page goes inert, so Tab and assistive tech stay in the dialog, and
  // focus returns to where it was once the dialog closes.
  private syncModal(): void {
    const root = this.host.nativeElement;
    const dialog = root.querySelector<HTMLElement>(MODAL);
    if ((dialog !== null) === this.modalOpen) return;
    this.modalOpen = dialog !== null;

    // Save the return target first: making its region inert blurs it.
    if (dialog) this.returnFocus = this.lastFocused;
    for (const region of root.querySelectorAll<HTMLElement>(PAGE_REGIONS)) region.inert = this.modalOpen;

    if (dialog) {
      if (!dialog.contains(this.document.activeElement)) dialog.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    } else if (this.returnFocus?.isConnected && this.document.activeElement === this.document.body) {
      this.returnFocus.focus({ preventScroll: true });
    }
  }
}
