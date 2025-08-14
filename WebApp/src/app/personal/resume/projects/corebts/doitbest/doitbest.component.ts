import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCog6Tooth,
  heroBuildingOffice,
  heroCalendarDays,
  heroBeaker,
  heroListBullet,
  heroShoppingBag,
  heroArchiveBox,
  heroTruck,
  heroUsers,
  heroLink,
  heroArrowRight,
  heroGlobeAlt,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-doitbest',
  templateUrl: './doitbest.component.html',
  styleUrls: ['./doitbest.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroCog6Tooth,
      heroBuildingOffice,
      heroCalendarDays,
      heroBeaker,
      heroListBullet,
      heroShoppingBag,
      heroArchiveBox,
      heroTruck,
      heroUsers,
      heroLink,
      heroArrowRight,
      heroGlobeAlt,
    }),
  ],
})
export class DoItBestComponent {}
