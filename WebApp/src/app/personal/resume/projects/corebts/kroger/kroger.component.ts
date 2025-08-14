import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kroger',
  templateUrl: './kroger.component.html',
  styleUrls: ['./kroger.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class KrogerComponent {}
