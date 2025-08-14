import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroUser,
  heroLightBulb,
  heroCodeBracket,
  heroCog6Tooth,
  heroFolder,
  heroGlobeAlt,
  heroBriefcase,
  heroComputerDesktop,
  heroArrowTopRightOnSquare,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  imports: [RouterOutlet, RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroUser,
      heroLightBulb,
      heroCodeBracket,
      heroCog6Tooth,
      heroFolder,
      heroGlobeAlt,
      heroBriefcase,
      heroComputerDesktop,
      heroArrowTopRightOnSquare,
    }),
  ],
})
export class PersonalComponent {}
