import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-express-scripts',
  templateUrl: './express-scripts.component.html',
  styleUrls: ['./express-scripts.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class ExpressScriptsComponent {}
