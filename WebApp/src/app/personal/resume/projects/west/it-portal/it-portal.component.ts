import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroCheck,
  heroRectangleStack,
  heroCog6Tooth,
  heroCircleStack,
  heroListBullet,
  heroTicket,
  heroLink,
  heroCodeBracket,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-it-portal',
  templateUrl: './it-portal.component.html',
  styleUrls: ['./it-portal.component.scss'],
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowLeft,
      heroCheck,
      heroRectangleStack,
      heroCog6Tooth,
      heroCircleStack,
      heroListBullet,
      heroTicket,
      heroLink,
      heroCodeBracket,
    }),
  ],
})
export class ItPortalComponent {}
