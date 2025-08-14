import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corebts',
  templateUrl: './corebts.component.html',
  styleUrls: ['./corebts.component.scss'],
  imports: [RouterOutlet, RouterLink, CommonModule],
})
export class CorebtsComponent {
  projects = [
    {
      name: 'Kroger Solutions',
      description: 'Modern enterprise solutions for retail operations',
      route: 'kroger',
      icon: 'ni ni-shop',
      color: 'from-blue-600 to-blue-800',
      status: 'Production',
      technologies: ['Angular', 'C#', '.NET', 'SQL Server'],
    },
    {
      name: 'DoItBest Platform',
      description: 'Hardware retail management and analytics platform',
      route: 'doitbest',
      icon: 'ni ni-settings-gear-65',
      color: 'from-green-600 to-green-800',
      status: 'Production',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
  ];
}
