import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsharpComponent {}
