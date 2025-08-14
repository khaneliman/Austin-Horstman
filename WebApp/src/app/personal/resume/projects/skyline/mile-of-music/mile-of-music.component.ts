import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroSpeakerWave,
  heroLightBulb,
  heroDevicePhoneMobile,
  heroCog6Tooth,
  heroChartBarSquare,
  heroComputerDesktop,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  standalone: true,
  selector: 'app-mile-of-music',
  templateUrl: './mile-of-music.component.html',
  styleUrls: ['./mile-of-music.component.scss'],
  imports: [ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroSpeakerWave,
      heroLightBulb,
      heroDevicePhoneMobile,
      heroCog6Tooth,
      heroChartBarSquare,
      heroComputerDesktop,
    }),
  ],
})
export class MileOfMusicComponent {}
