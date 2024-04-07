import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-skyline',
    templateUrl: './skyline.component.html',
    styleUrls: ['./skyline.component.css'],
    standalone: true,
    imports: [RouterOutlet],
})
export class SkylineComponent {}
