import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  BulletListComponent,
  BulletListItem,
} from '../../../../shared/components/bullet-list/bullet-list.component';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../../../../shared/components/decorative-background/decorative-background.component';
import {
  heroArrowTopRightOnSquare,
  heroMapPin,
  heroAcademicCap,
  heroComputerDesktop,
  heroCodeBracket,
  heroRectangleStack,
  heroCalendar,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-foxvalley',
  templateUrl: './foxvalley.component.html',
  styleUrls: ['./foxvalley.component.scss'],
  imports: [
    RouterLink,
    NgIconComponent,
    BulletListComponent,
    DecorativeBackgroundComponent,
  ],
  providers: [
    provideIcons({
      heroArrowTopRightOnSquare,
      heroMapPin,
      heroAcademicCap,
      heroComputerDesktop,
      heroCodeBracket,
      heroRectangleStack,
      heroCalendar,
    }),
  ],
})
export class FoxvalleyComponent {
  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-4 right-4',
      color: 'red-500',
      opacity: 10,
      blur: 'xl',
    },
    {
      size: 'md',
      position: 'bottom-4 left-4',
      color: 'gray-500',
      opacity: 10,
      blur: 'lg',
    },
  ];

  curriculumHighlights: BulletListItem[] = [
    {
      text: 'Programming fundamentals and software development lifecycle',
    },
    {
      text: 'Database design, implementation, and management',
    },
    {
      text: 'Web development technologies and frameworks',
    },
    {
      text: 'Object-oriented programming concepts and practices',
    },
    {
      text: 'Software testing, debugging, and quality assurance',
    },
    {
      text: 'Project management and team collaboration skills',
    },
  ];
}
