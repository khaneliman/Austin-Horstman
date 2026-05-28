import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorComponent {}
