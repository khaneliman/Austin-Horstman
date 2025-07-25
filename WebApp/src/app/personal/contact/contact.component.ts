import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [NgClass],
})
export class ContactComponent {
  focus?: boolean;
  focus1?: boolean;
}
