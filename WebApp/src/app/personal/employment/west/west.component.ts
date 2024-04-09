import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-west',
  templateUrl: './west.component.html',
  styleUrls: ['./west.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterModule],
})
export class WestComponent {}
