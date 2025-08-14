import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-kroger',
  templateUrl: './kroger.component.html',
  styleUrls: ['./kroger.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent],
})
export class KrogerComponent {}
