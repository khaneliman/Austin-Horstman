import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  standalone: true,
  templateUrl: './nixvim.component.html',
  styleUrls: ['./nixvim.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      text: 'Built and stabilized Nixvim plugin/module coverage by adding production-ready plugin modules for AI and LSP workflows.',
    },
    {
      text: 'Strengthened runtime reliability by preserving LSP event scope and loading wrapped configs via `VIMINIT`.',
    },
    {
      text: 'Standardized plugin authoring by reusing a shared plugin scaffold template in the contributor workflow.',
    },
    {
      text: 'Expanded integrations for AI-assisted tooling through dedicated `codecompanion` and `codex` modules.',
    },
    {
      text: 'Added modules for high-friction editor utilities like `neotab`, `sioyek-highlights`, and `lsp-progress`.',
    },
    {
      text: 'Improved contributor confidence for plugin onboarding via explicit `contributing` and plugin testing guidance.',
    },
  ];

  notablePullRequests: { number: number; title: string; url: string; mergedAt: string; impact: string }[] = [
    {
      number: 2602,
      title: 'mkNeovimPlugin: add lazyLoad with lz-n support',
      url: 'https://github.com/nix-community/nixvim/pull/2602',
      mergedAt: '2024-12-10',
      impact: 'Added lazy-loading support to the shared plugin abstraction used across Nixvim modules.',
    },
    {
      number: 2626,
      title: 'flake-modules/new-plugin: init',
      url: 'https://github.com/nix-community/nixvim/pull/2626',
      mergedAt: '2024-12-15',
      impact: 'Introduced contributor tooling for scaffolding new plugin modules.',
    },
    {
      number: 3302,
      title:
        'flake-modules/new-plugin: tweak template; support normalizing package name automatically; add maintainer support; dry run support',
      url: 'https://github.com/nix-community/nixvim/pull/3302',
      mergedAt: '2025-05-08',
      impact: 'Expanded plugin scaffolding into a practical maintainer workflow with dry-run support.',
    },
    {
      number: 3525,
      title: 'all-maintainers.nix: init; flake/dev/generate-all-maintainers: init',
      url: 'https://github.com/nix-community/nixvim/pull/3525',
      mergedAt: '2025-07-08',
      impact: 'Added maintainer metadata generation for ownership and review routing.',
    },
    {
      number: 3542,
      title: 'ci: add tag-maintainers workflow',
      url: 'https://github.com/nix-community/nixvim/pull/3542',
      mergedAt: '2025-07-09',
      impact: 'Added CI automation to route reviews to relevant maintainers.',
    },
    {
      number: 2283,
      title: 'treewide: iconsPackage -> plugins enabled',
      url: 'https://github.com/nix-community/nixvim/pull/2283',
      mergedAt: '2024-09-22',
      impact: 'Treewide option behavior change with high review activity across plugin modules.',
    },
    {
      number: 4084,
      title: 'plugins/treesitter: support new api',
      url: 'https://github.com/nix-community/nixvim/pull/4084',
      mergedAt: '2025-12-19',
      impact: 'Updated Treesitter integration for upstream API changes in a core editor feature.',
    },
    {
      number: 4333,
      title: 'modules/output: load wrapped config via VIMINIT',
      url: 'https://github.com/nix-community/nixvim/pull/4333',
      mergedAt: '2026-05-24',
      impact: 'Fixed wrapped configuration loading in the generated Neovim output path.',
    },
  ];

  impactAndCommunity: BulletListItem[] = [
    {
      text: 'Delivered plugin modules that reduce manual Lua setup and keep editor configuration reproducible.',
    },
    {
      text: 'Improved LSP startup reliability and reduced configuration brittleness for complex language-server setups.',
    },
    {
      text: 'Streamlined AI workflow onboarding through reusable plugin/module contribution patterns.',
    },
    {
      text: 'Expanded the ecosystem footprint by adding high-utility modules used in day-to-day Neovim workflows.',
    },
  ];
}
