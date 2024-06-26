import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
    selector: 'app-west',
    templateUrl: './west.component.html',
    styleUrls: ['./west.component.css'],
    standalone: true,
    imports: [RouterOutlet, RouterLink],
})
export class WestComponent {}
