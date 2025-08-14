import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface ProjectCardData {
  name: string;
  description: string;
  route: string;
  icon: string;
  color: string;
  status: string;
  technologies: string[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: ProjectCardData;
  @Input() buttonColor = 'blue'; // Theme color for the button
}
