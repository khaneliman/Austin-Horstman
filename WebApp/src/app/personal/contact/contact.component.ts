import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [NgClass],
})
export class ContactComponent {
  focus: any;
  focus1: any;
}
