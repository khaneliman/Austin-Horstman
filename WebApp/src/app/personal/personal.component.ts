import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.css'],
    standalone: true,
    imports: [RouterOutlet],
})
export class PersonalComponent {}
