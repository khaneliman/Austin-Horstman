import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-geeksquad',
  templateUrl: './geeksquad.component.html',
  styleUrls: ['./geeksquad.component.css'],
  imports: [RouterOutlet, RouterLink],
})
export class GeeksquadComponent {}
