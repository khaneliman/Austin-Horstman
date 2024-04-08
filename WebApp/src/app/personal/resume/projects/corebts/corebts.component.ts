import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
    selector: 'app-corebts',
    templateUrl: './corebts.component.html',
    styleUrls: ['./corebts.component.css'],
    standalone: true,
    imports: [RouterOutlet, RouterLink],
})
export class CorebtsComponent {}
