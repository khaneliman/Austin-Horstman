import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { SHORTCUT_GROUPS } from '../../../shared/services/keyboard-shortcuts.helpers';
import { KeyboardShortcutsService } from '../../../shared/services/keyboard-shortcuts.service';
import { ShortcutsHelpService } from '../../../shared/services/shortcuts-help.service';

@Component({
  selector: 'app-shortcuts-help',
  standalone: true,
  templateUrl: './shortcuts-help.component.html',
  styleUrl: './shortcuts-help.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShortcutsHelpComponent {
  private readonly service = inject(ShortcutsHelpService);
  private readonly shortcuts = inject(KeyboardShortcutsService);

  readonly isOpen = this.service.isOpen;
  readonly groups = SHORTCUT_GROUPS;
  readonly singleKeysEnabled = this.shortcuts.singleKeysEnabled;

  onSingleKeysChange(event: Event): void {
    this.shortcuts.setSingleKeysEnabled((event.target as HTMLInputElement).checked);
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: Event): void {
    if (!this.isOpen()) return;
    event.preventDefault();
    this.service.close();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.service.close();
    }
  }

  close(): void {
    this.service.close();
  }
}
