import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCog6Tooth,
  heroGlobeAlt,
  heroCodeBracket,
  heroCommandLine,
  heroLightBulb,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  imports: [RouterOutlet, NgIconComponent],
  providers: [
    provideIcons({
      heroCog6Tooth,
      heroGlobeAlt,
      heroCodeBracket,
      heroCommandLine,
      heroLightBulb,
    }),
  ],
})
export class TechnologyComponent {}
