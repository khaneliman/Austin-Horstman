import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  focus?: boolean;
  focus1?: boolean;
}
