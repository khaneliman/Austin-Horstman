import { ChangeDetectionStrategy, Component } from '@angular/core';
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
import { GITHUB_METRICS } from '../../../shared/data/github-metrics';

const nixpkgsMergedPrs = GITHUB_METRICS.repoMetrics.find((metric) => metric.repo === 'Nixpkgs')?.mergedPrs ?? 0;
const nixpkgsUpdatedAt = new Date(`${GITHUB_METRICS.asOf}T00:00:00Z`).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

@Component({
  selector: 'app-nixpkgs',
  standalone: true,
  templateUrl: './nixpkgs.component.html',
  styleUrls: ['./nixpkgs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      text: 'Maintained high-volume package updates across `luaPackages`, `vimPlugins`, `yaziPlugins`, and related ecosystems.',
    },
    {
      text: 'Added and stabilized package metadata workflows, including changelog and updater integration for reproducible maintenance.',
    },
    {
      text: 'Automated maintenance throughput with commit-splitting and updater-helper patterns for large-scale dependency refreshes.',
    },
    {
      text: 'Contributed package quality improvements for Darwin/macOS-adjacent packages and tooling with user-facing impact.',
    },
    {
      text: 'Added requested packages and updates to keep toolchains current for editor and terminal workflows.',
    },
    {
      text: 'Contributed to broad ecosystem health by strengthening package metadata consistency and maintenance ergonomics.',
    },
  ];

  impactAndScale: BulletListItem[] = [
    {
      text: `Contributed ${nixpkgsMergedPrs} merged PRs in Nixpkgs as of ${nixpkgsUpdatedAt}, across package update and maintenance tracks.`,
    },
    {
      text: 'Improved package refresh cycles for high-velocity ecosystems used by language tooling and editors.',
    },
    {
      text: 'Strengthened package hygiene with standardized license and changelog metadata updates.',
    },
    {
      text: 'Contributed to reproducible multi-platform builds through consistent package definitions and metadata updates.',
    },
  ];

  notablePullRequests: { number: number; title: string; url: string; mergedAt: string; impact: string }[] = [
    {
      number: 352277,
      title: 'neovim-require-check-hook: auto discover modules to require',
      url: 'https://github.com/NixOS/nixpkgs/pull/352277',
      mergedAt: '2024-12-03',
      impact: 'High-discussion infrastructure PR that improved automated validation for Neovim plugin packaging.',
    },
    {
      number: 370445,
      title: 'treewide: unpin apple-sdk_11',
      url: 'https://github.com/NixOS/nixpkgs/pull/370445',
      mergedAt: '2025-01-03',
      impact: 'Treewide Darwin maintenance that moved packages away from older Apple SDK assumptions.',
    },
    {
      number: 396196,
      title: 'yaziPlugins: init',
      url: 'https://github.com/NixOS/nixpkgs/pull/396196',
      mergedAt: '2025-04-10',
      impact: 'Introduced a new plugin packaging area for the Yazi ecosystem.',
    },
    {
      number: 510468,
      title: 'nixpkgs-plugin-update: prefer release tags by default',
      url: 'https://github.com/NixOS/nixpkgs/pull/510468',
      mergedAt: '2026-04-19',
      impact: 'Improved update quality by preferring release artifacts over arbitrary source snapshots.',
    },
    {
      number: 405955,
      title:
        'pluginupdate.py: GITHUB_API_TOKEN -> GITHUB_TOKEN; nvim-treesitter/update.py: source from nurr; vimPlugins.nvim-treesitter: update grammars',
      url: 'https://github.com/NixOS/nixpkgs/pull/405955',
      mergedAt: '2025-05-18',
      impact:
        'Touched updater authentication and nvim-treesitter grammar maintenance, both active contributor workflows.',
    },
    {
      number: 513747,
      title: 'vimPluginsUpdater: generate plugin licenses',
      url: 'https://github.com/NixOS/nixpkgs/pull/513747',
      mergedAt: '2026-04-27',
      impact: 'Added license generation to reduce metadata drift across plugin updates.',
    },
    {
      number: 352621,
      title: 'yabai: refactor new sdk pattern; switch to apple-sdk_15; 7.1.4 -> 7.1.5',
      url: 'https://github.com/NixOS/nixpkgs/pull/352621',
      mergedAt: '2024-11-04',
      impact: 'High-engagement Darwin package work around newer Apple SDK packaging patterns.',
    },
    {
      number: 520106,
      title: 'yaziPlugins: support finalAttrs pattern; yazi{Plugins}: add meta.changelog',
      url: 'https://github.com/NixOS/nixpkgs/pull/520106',
      mergedAt: '2025-05-14',
      impact: 'Improved package structure and changelog metadata for the Yazi plugin set.',
    },
  ];
}
