import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-express-scripts',
  templateUrl: './express-scripts.component.html',
  styleUrls: ['./express-scripts.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent],
})
export class ExpressScriptsComponent {}
