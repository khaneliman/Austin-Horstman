import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../core/components/card/card.component';
import { WaveSeparatorComponent } from '../../shared/components/wave-separator/wave-separator.component';
import { FloatingCardComponent } from '../../core/components/floating-card/floating-card.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../../shared/components/decorative-background/decorative-background.component';
import {
  heroTrophy,
  heroCodeBracket,
  heroStar,
  heroAcademicCap,
  heroLightBulb,
  heroPencil,
  heroBuildingOffice,
  heroRectangleStack,
  heroCheck,
  heroGlobeAlt,
  heroCog6Tooth,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  imports: [
    CardComponent,
    WaveSeparatorComponent,
    RouterLink,
    FloatingCardComponent,
    NgIconComponent,
    DecorativeBackgroundComponent,
  ],
  providers: [
    provideIcons({
      heroTrophy,
      heroCodeBracket,
      heroStar,
      heroAcademicCap,
      heroLightBulb,
      heroPencil,
      heroBuildingOffice,
      heroRectangleStack,
      heroCheck,
      heroGlobeAlt,
      heroCog6Tooth,
    }),
  ],
})
export class ResumeComponent {
  educationBackgroundElements: BackgroundElement[] = [
    {
      size: 'w-32-h-32',
      position: 'top-20 left-10',
      color: 'white',
      opacity: 5,
      blur: 'xl',
      animate: true,
    },
    {
      size: 'xl',
      position: 'bottom-20 right-20',
      color: 'white',
      opacity: 10,
      blur: 'xl',
      animate: true,
      delay: 700,
    },
  ];

  employmentBackgroundElements: BackgroundElement[] = [
    {
      size: 'w-40-h-40',
      position: 'top-32 right-10',
      color: 'white',
      opacity: 5,
      blur: '2xl',
      animate: true,
      delay: 300,
    },
    {
      size: 'w-32-h-32',
      position: 'bottom-32 left-20',
      color: 'white',
      opacity: 10,
      blur: 'xl',
      animate: true,
      delay: 1000,
    },
  ];

  projectsBackgroundElements: BackgroundElement[] = [
    {
      size: 'w-40-h-40',
      position: 'top-20 right-32',
      color: 'purple-200',
      opacity: 30,
      blur: '2xl',
      animate: true,
      delay: 500,
    },
    {
      size: 'w-32-h-32',
      position: 'bottom-20 left-32',
      color: 'blue-200',
      opacity: 40,
      blur: 'xl',
      animate: true,
      delay: 1200,
    },
  ];

  technologyBackgroundElements: BackgroundElement[] = [
    {
      size: 'w-40-h-40',
      position: 'top-20 left-20',
      color: 'blue-500',
      opacity: 10,
      blur: '2xl',
      animate: true,
    },
    {
      size: 'w-32-h-32',
      position: 'bottom-20 right-20',
      color: 'green-500',
      opacity: 10,
      blur: 'xl',
      animate: true,
      delay: 700,
    },
    {
      size: 'w-48-h-48',
      position: 'top-1/2 left-1/2',
      color: 'purple-500',
      opacity: 5,
      blur: '3xl',
      animate: true,
      delay: 1000,
    },
  ];
}
