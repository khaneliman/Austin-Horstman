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
      text: 'Added and expanded modules for daily workflow support, including desktop tooling integrations and advanced SSH/authorization behavior.',
    },
    {
      text: 'Hardened option handling for edge cases (`syncthing`, `podman`, and quote-safe settings) to reduce fragile user environments.',
    },
    {
      text: 'Expanded support for system activation workflows and release-channel updates, including nix-darwin and stable-branch maintenance.',
    },
    {
      text: 'Improved module customization for browsers and Wayland-related setup through PR-backed option work.',
    },
    {
      text: 'Improved reproducibility by reducing drift in startup and activation behavior for complex user environments.',
    },
    {
      text: 'Added practical migration support for legacy configs and contributed maintainer-level review/coordination.',
    },
  ];

  notablePullRequests: { number: number; title: string; url: string; mergedAt: string; impact: string }[] = [
    {
      number: 8006,
      title: 'git: break out integrations into separate modules; rfc42 settings migration',
      url: 'https://github.com/nix-community/home-manager/pull/8006',
      mergedAt: '2025-10-19',
      impact: 'Broad Git module restructuring and migration work for RFC 42-style settings.',
    },
    {
      number: 7391,
      title: 'ci: split tests into chunks',
      url: 'https://github.com/nix-community/home-manager/pull/7391',
      mergedAt: '2025-07-28',
      impact: 'High-engagement CI scalability work for a large module test suite.',
    },
    {
      number: 7304,
      title: 'treewide: implement auto importing for programs/service modules',
      url: 'https://github.com/nix-community/home-manager/pull/7304',
      mergedAt: '2025-06-23',
      impact: 'Treewide contributor-workflow improvement that reduced manual module wiring.',
    },
    {
      number: 6664,
      title: 'treewide: zsh initExtra -> initContent',
      url: 'https://github.com/nix-community/home-manager/pull/6664',
      mergedAt: '2025-03-22',
      impact: 'Heavily discussed treewide option migration for shell initialization behavior.',
    },
    {
      number: 5341,
      title: 'lib/generators.nix: init toHyprconf generator',
      url: 'https://github.com/nix-community/home-manager/pull/5341',
      mergedAt: '2024-04-29',
      impact: 'Added shared generator infrastructure used by Hyprland-adjacent configuration modules.',
    },
    {
      number: 9331,
      title: 'ssh: add RFC 42 settings option',
      url: 'https://github.com/nix-community/home-manager/pull/9331',
      mergedAt: '2026-05-18',
      impact: 'Modernized SSH configuration toward structured settings with active review discussion.',
    },
    {
      number: 7399,
      title:
        'mkFirefoxModule: set NoDefaultBookmarks when bookmarks are enabled; librewolf: allow bookmark configuration',
      url: 'https://github.com/nix-community/home-manager/pull/7399',
      mergedAt: '2025-07-06',
      impact: 'High-discussion browser module behavior work with user-visible configuration effects.',
    },
    {
      number: 7561,
      title: 'zsh: fix regressions on env var handling; deprecate relative path usage; add news entry',
      url: 'https://github.com/nix-community/home-manager/pull/7561',
      mergedAt: '2025-07-28',
      impact: 'Regression fix and deprecation work around common shell environment handling.',
    },
  ];

  impactAndCommunity: BulletListItem[] = [
    {
      text: 'Reduced configuration breakage and made setups safer for users with legacy + mixed desktop configurations.',
    },
    {
      text: 'Increased adoption of Home Manager in complex shells/workflow setups by improving module ergonomics.',
    },
    {
      text: 'Improved reliability for cross-platform activation and package-manager workflows.',
    },
    {
      text: 'Raised PR quality through maintained review and module-shaping work in active maintainer workflows.',
    },
  ];
}
