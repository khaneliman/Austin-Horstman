import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-skyline',
    templateUrl: './skyline.component.html',
    styleUrls: ['./skyline.component.css'],
    standalone: true,
    imports: [RouterLink],
})
export class SkylineComponent {}
