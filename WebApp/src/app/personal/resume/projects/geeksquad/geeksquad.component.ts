import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-geeksquad',
  templateUrl: './geeksquad.component.html',
  styleUrls: ['./geeksquad.component.scss'],
  imports: [RouterOutlet, RouterLink, CommonModule],
})
export class GeeksquadComponent {
  projects = [
    {
      name: 'Stat Tracker System',
      description:
        'Performance monitoring and statistics tracking application for repair operations',
      route: 'stat-tracker',
      icon: 'ni ni-chart-pie-35',
      color: 'from-blue-600 to-orange-800',
      status: 'Production',
      technologies: ['VB.NET', 'Windows Forms', 'SQLite', 'Excel Integration'],
    },
  ];
}
