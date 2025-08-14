import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroRocketLaunch,
  heroStar,
  heroMagnifyingGlass,
  heroClock,
  heroUser,
  heroBolt,
  heroWifi,
  heroShieldCheck,
  heroCog6Tooth,
  heroChevronRight,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-quick-launch',
  templateUrl: './quick-launch.component.html',
  styleUrls: ['./quick-launch.component.scss'],
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      heroRocketLaunch,
      heroStar,
      heroMagnifyingGlass,
      heroClock,
      heroUser,
      heroBolt,
      heroWifi,
      heroShieldCheck,
      heroCog6Tooth,
      heroChevronRight,
    }),
  ],
})
export class QuickLaunchComponent {}
