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
import { ProjectNavHeaderComponent } from '../../../../shared/components/project-nav-header/project-nav-header.component';

@Component({
  standalone: true,
  selector: 'app-quick-launch',
  templateUrl: './quick-launch.component.html',
  styleUrls: ['./quick-launch.component.scss'],
  imports: [NgIconComponent, ProjectNavHeaderComponent],
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
export class QuickLaunchComponent {
  backRoute = '/projects/professional/west';
  backLabel = 'Back to West Projects';
  hoverColor = 'red';
  companyKey = 'west';
}
