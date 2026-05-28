import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommandPaletteComponent } from './core/components/command-palette/command-palette.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LinkHintsComponent } from './core/components/link-hints/link-hints.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ShortcutsHelpComponent } from './core/components/shortcuts-help/shortcuts-help.component';
import { TerminalEasterEggComponent } from './core/components/terminal-easter-egg/terminal-easter-egg.component';
import { KeyboardShortcutsService } from './shared/services/keyboard-shortcuts.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
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
})
export class AppComponent {
  title = 'test';
  private readonly themeService = inject(ThemeService);
  private readonly keyboardShortcuts = inject(KeyboardShortcutsService);

  constructor() {
    this.keyboardShortcuts.init();
  }
}
