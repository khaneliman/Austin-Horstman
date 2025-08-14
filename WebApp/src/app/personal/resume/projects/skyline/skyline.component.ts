import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skyline',
  templateUrl: './skyline.component.html',
  styleUrls: ['./skyline.component.scss'],
  imports: [RouterOutlet, RouterLink, CommonModule],
})
export class SkylineComponent {
  projects = [
    {
      name: 'Renaissance Learning Platform',
      description: 'Educational assessment and reading management platform',
      route: 'renaissance-learning',
      icon: 'ni ni-book-bookmark',
      color: 'from-blue-600 to-indigo-800',
      status: 'Production',
      technologies: ['C#', '.NET', 'SQL Server', 'JavaScript'],
    },
    {
      name: 'Mile of Music Festival',
      description: 'Music festival event management and ticketing system',
      route: 'mile-of-music',
      icon: 'ni ni-sound-wave',
      color: 'from-purple-600 to-pink-800',
      status: 'Legacy',
      technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    },
    {
      name: 'JJ Keller Compliance',
      description: 'Transportation compliance and safety management solutions',
      route: 'jj-keller',
      icon: 'ni ni-archive-2',
      color: 'from-green-600 to-teal-800',
      status: 'Production',
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'Web API'],
    },
    {
      name: 'Express Scripts Pharmacy',
      description:
        'Pharmaceutical benefit management and prescription processing',
      route: 'express-scripts',
      icon: 'ni ni-atom',
      color: 'from-red-600 to-orange-800',
      status: 'Production',
      technologies: ['Java', 'Spring', 'Oracle', 'REST API'],
    },
  ];
}
