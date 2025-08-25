import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroGlobeAlt,
  heroHome,
  heroStar,
  heroUser,
  heroUsers,
} from '@ng-icons/heroicons/outline';
import { BulletListComponent, BulletListItem } from '../../../shared/components/bullet-list/bullet-list.component';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../../../shared/components/decorative-background/decorative-background.component';

@Component({
  selector: 'app-home-manager',
  standalone: true,
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIconComponent, BulletListComponent, DecorativeBackgroundComponent],
  providers: [
    provideIcons({
      heroArrowTopRightOnSquare,
      heroCodeBracket,
      heroCog6Tooth,
      heroCommandLine,
      heroGlobeAlt,
      heroHome,
      heroUser,
      heroCalendar,
      heroStar,
      heroUsers,
    }),
  ],
})
export class HomeManagerComponent {
  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-4 right-4',
      color: 'indigo-500',
      opacity: 10,
      blur: 'xl',
    },
    {
      size: 'md',
      position: 'bottom-4 left-4',
      color: 'blue-500',
      opacity: 10,
      blur: 'lg',
    },
  ];

  contributionsAndFocusAreas: BulletListItem[] = [
    {
      text: 'Designed and improved Nix modules to enable declarative user environment configuration',
    },
    {
      text: 'Refactored existing modules to support freeform configuration inputs',
    },
    {
      text: 'Enhanced usability and extensibility for advanced use cases',
    },
    {
      text: 'Provided support and guidance to users via GitHub discussions',
    },
    {
      text: 'Contributed to system reproducibility and developer onboarding consistency',
    },
    {
      text: 'Helped grow the community and improve contributor experience',
    },
  ];

  impactAndCommunity: BulletListItem[] = [
    {
      text: 'Improved developer onboarding experience',
    },
    {
      text: 'Enhanced system reproducibility',
    },
    {
      text: 'Streamlined user environment management',
    },
    {
      text: 'Active community support and mentoring',
    },
  ];
}
