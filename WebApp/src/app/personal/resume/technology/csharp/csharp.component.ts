import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsharpComponent {}
