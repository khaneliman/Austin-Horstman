import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-network-health',
  templateUrl: './network-health.component.html',
  styleUrls: ['./network-health.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent],
})
export class NetworkHealthComponent {}
