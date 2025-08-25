import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-personal',
  standalone: true,
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent {}
