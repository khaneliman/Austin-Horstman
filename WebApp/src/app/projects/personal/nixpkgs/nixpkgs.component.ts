import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroCubeTransparent,
  heroGlobeAlt,
  heroServerStack,
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
  selector: 'app-nixpkgs',
  templateUrl: './nixpkgs.component.html',
  styleUrls: ['./nixpkgs.component.scss'],
  imports: [RouterLink, NgIconComponent, BulletListComponent, DecorativeBackgroundComponent],
  providers: [
    provideIcons({
      heroArrowTopRightOnSquare,
      heroCodeBracket,
      heroCog6Tooth,
      heroCommandLine,
      heroGlobeAlt,
      heroCubeTransparent,
      heroUser,
      heroCalendar,
      heroStar,
      heroUsers,
      heroWrenchScrewdriver,
      heroServerStack,
    }),
  ],
})
export class NixpkgsComponent {
  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-4 right-4',
      color: 'violet-500',
      opacity: 10,
      blur: 'xl',
    },
    {
      size: 'md',
      position: 'bottom-4 left-4',
      color: 'purple-500',
      opacity: 10,
      blur: 'lg',
    },
  ];

  contributionsAndSpecialization: BulletListItem[] = [
    {
      text: 'Active involvement in the development and maintenance of the central package repository',
    },
    {
      text: 'Specialized in maintaining packages and infrastructure for the Darwin (macOS) platform',
    },
    {
      text: 'Regular package updates, security patches, and compatibility improvements',
    },
    {
      text: 'Cross-platform testing and validation of package builds',
    },
    {
      text: 'Community support for macOS-specific packaging challenges',
    },
    {
      text: 'Contributing to the largest package repository in the Linux ecosystem',
    },
  ];

  impactAndScale: BulletListItem[] = [
    {
      text: 'Contributing to 80,000+ package ecosystem',
    },
    {
      text: 'Supporting thousands of Darwin/macOS users',
    },
    {
      text: 'Maintaining critical system infrastructure',
    },
    {
      text: 'Enabling reproducible cross-platform builds',
    },
  ];
}
