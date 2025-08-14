import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChevronRight,
  heroShoppingBag,
  heroCog6Tooth,
  heroBookOpen,
  heroMusicalNote,
  heroDevicePhoneMobile,
  heroBeaker,
  heroArchiveBox,
  heroChartBarSquare,
} from '@ng-icons/heroicons/outline';

export interface ProjectCardData {
  name: string;
  description: string;
  route: string;
  icon: string; // Now expects ng-icon name instead of CSS class
  color: string;
  status: string;
  technologies: string[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroChevronRight,
      heroShoppingBag,
      heroCog6Tooth,
      heroBookOpen,
      heroMusicalNote,
      heroDevicePhoneMobile,
      heroBeaker,
      heroArchiveBox,
      heroChartBarSquare,
    }),
  ],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: ProjectCardData;
  @Input() buttonColor = 'blue'; // Theme color for the button
}
