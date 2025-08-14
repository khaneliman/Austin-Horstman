import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroShoppingBag,
  heroBuildingOffice,
  heroCalendarDays,
  heroBeaker,
  heroListBullet,
  heroCog6Tooth,
  heroChartBarSquare,
  heroTruck,
  heroChartPie,
  heroDevicePhoneMobile,
  heroLink,
  heroArrowRight,
  heroArchiveBox,
  heroGlobeAlt,
  heroCodeBracket,
  heroCircleStack,
  heroArrowPath,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-kroger',
  templateUrl: './kroger.component.html',
  styleUrls: ['./kroger.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroShoppingBag,
      heroBuildingOffice,
      heroCalendarDays,
      heroBeaker,
      heroListBullet,
      heroCog6Tooth,
      heroChartBarSquare,
      heroTruck,
      heroChartPie,
      heroDevicePhoneMobile,
      heroLink,
      heroArrowRight,
      heroArchiveBox,
      heroGlobeAlt,
      heroCodeBracket,
      heroCircleStack,
      heroArrowPath,
    }),
  ],
})
export class KrogerComponent {}
