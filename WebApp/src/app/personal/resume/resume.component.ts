import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../core/components/card/card.component';
import { SeparatorComponent } from '../../core/components/separator/separator.component';
import { FloatingCardComponent } from '../../core/components/floating-card/floating-card.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
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
    SeparatorComponent,
    RouterLink,
    FloatingCardComponent,
    NgIconComponent,
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
export class ResumeComponent {}
