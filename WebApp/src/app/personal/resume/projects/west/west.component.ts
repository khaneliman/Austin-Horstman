import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-west',
  templateUrl: './west.component.html',
  styleUrls: ['./west.component.scss'],
  imports: [RouterOutlet, RouterLink, CommonModule],
})
export class WestComponent {
  projects = [
    {
      name: 'IT Portal System',
      description: 'Internal IT service management and ticket tracking portal',
      route: 'it-portal',
      icon: 'ni ni-laptop',
      color: 'from-red-600 to-red-800',
      status: 'Production',
      technologies: ['VB.NET', 'ASP.NET', 'SQL Server', 'JavaScript'],
    },
    {
      name: 'Database Management Tool',
      description: 'Enterprise database administration and monitoring system',
      route: 'database-tool',
      icon: 'ni ni-chart-bar-32',
      color: 'from-orange-600 to-red-800',
      status: 'Legacy',
      technologies: ['C#', '.NET', 'Oracle', 'Crystal Reports'],
    },
  ];
}
