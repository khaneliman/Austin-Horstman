import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  focus?: boolean;
  focus1?: boolean;
}
