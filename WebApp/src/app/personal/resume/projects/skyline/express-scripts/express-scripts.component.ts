import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroLightBulb,
  heroChartPie,
  heroCheck,
  heroCodeBracket,
  heroCircleStack,
  heroTruck,
  heroHeart,
  heroComputerDesktop,
  heroCog8Tooth,
  heroCog6Tooth,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-express-scripts',
  templateUrl: './express-scripts.component.html',
  styleUrls: ['./express-scripts.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroLightBulb,
      heroChartPie,
      heroCheck,
      heroCodeBracket,
      heroCircleStack,
      heroTruck,
      heroHeart,
      heroComputerDesktop,
      heroCog8Tooth,
      heroCog6Tooth,
    }),
  ],
})
export class ExpressScriptsComponent {}
