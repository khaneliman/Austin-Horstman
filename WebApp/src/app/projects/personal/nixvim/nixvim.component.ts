import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroDocument,
  heroGlobeAlt,
  heroStar,
  heroUser,
  heroUsers,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';
import { BulletListComponent, BulletListItem } from '../../../shared/components/bullet-list/bullet-list.component';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../../../shared/components/decorative-background/decorative-background.component';

@Component({
  selector: 'app-nixvim',
  templateUrl: './nixvim.component.html',
  styleUrls: ['./nixvim.component.scss'],
  imports: [RouterLink, NgIconComponent, BulletListComponent, DecorativeBackgroundComponent],
  providers: [
    provideIcons({
      heroArrowTopRightOnSquare,
      heroCodeBracket,
      heroCog6Tooth,
      heroCommandLine,
      heroGlobeAlt,
      heroDocument,
      heroUser,
      heroCalendar,
      heroStar,
      heroUsers,
      heroWrenchScrewdriver,
    }),
  ],
})
export class NixvimComponent {
  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-4 right-4',
      color: 'teal-500',
      opacity: 10,
      blur: 'xl',
    },
    {
      size: 'md',
      position: 'bottom-4 left-4',
      color: 'green-500',
      opacity: 10,
      blur: 'lg',
    },
  ];

  contributionsAndAchievements: BulletListItem[] = [
    {
      text: "Enhanced user experience for creating Neovim configurations using Nix's declarative approach",
    },
    {
      text: 'Resolved bugs and assisted new users with configuration challenges',
    },
    {
      text: 'Refactored existing plugin modules to support freeform configuration',
    },
    {
      text: 'Created new plugin modules to increase user satisfaction and adoption',
    },
    {
      text: 'Streamlined the process of customizing Neovim with the module system',
    },
    {
      text: 'Focused on making complex editor configurations more accessible',
    },
  ];

  impactAndCommunity: BulletListItem[] = [
    {
      text: 'Simplified Neovim configuration management',
    },
    {
      text: 'Improved accessibility for new users',
    },
    {
      text: 'Enhanced reproducible development environments',
    },
    {
      text: 'Active community support and education',
    },
  ];
}
