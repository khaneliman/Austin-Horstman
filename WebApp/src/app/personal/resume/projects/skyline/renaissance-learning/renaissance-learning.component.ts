import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroBookOpen,
  heroLightBulb,
  heroChartBarSquare,
  heroCog6Tooth,
  heroComputerDesktop,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-renaissance-learning',
  templateUrl: './renaissance-learning.component.html',
  styleUrls: ['./renaissance-learning.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroBookOpen,
      heroLightBulb,
      heroChartBarSquare,
      heroCog6Tooth,
      heroComputerDesktop,
    }),
  ],
})
export class RenaissanceLearningComponent {}
