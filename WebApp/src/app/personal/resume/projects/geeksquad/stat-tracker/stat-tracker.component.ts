import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-stat-tracker',
  templateUrl: './stat-tracker.component.html',
  styleUrls: ['./stat-tracker.component.scss'],
  imports: [RouterLink],
})
export class StatTrackerComponent {}
