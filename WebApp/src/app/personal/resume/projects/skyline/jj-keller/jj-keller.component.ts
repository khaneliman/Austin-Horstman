import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArchiveBox,
  heroLightBulb,
  heroCheck,
  heroCog6Tooth,
  heroChartBarSquare,
  heroComputerDesktop,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-jj-keller',
  templateUrl: './jj-keller.component.html',
  styleUrls: ['./jj-keller.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroArchiveBox,
      heroLightBulb,
      heroCheck,
      heroCog6Tooth,
      heroChartBarSquare,
      heroComputerDesktop,
    }),
  ],
})
export class JjKellerComponent {}
