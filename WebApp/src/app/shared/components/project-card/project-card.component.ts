import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArchiveBox,
  heroBeaker,
  heroBookOpen,
  heroChartBarSquare,
  heroChevronRight,
  heroCog6Tooth,
  heroDevicePhoneMobile,
  heroMusicalNote,
  heroShoppingBag,
} from '@ng-icons/heroicons/outline';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';

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
  imports: [RouterLink, NgIconComponent, DecorativeBackgroundComponent],
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
  project = input.required<ProjectCardData>();
  buttonColor = input<string>('blue'); // Theme color for the button

  backgroundElements: BackgroundElement[] = [
    {
      size: 'md',
      position: 'top-4 right-4',
      color: 'white',
      opacity: 10,
      blur: 'xl',
    },
  ];
}
