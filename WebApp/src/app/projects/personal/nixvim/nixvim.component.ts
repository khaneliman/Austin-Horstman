import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroDocument,
  heroGlobeAlt,
  heroUser,
  heroUsers,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';
import { BulletListComponent, BulletListItem } from '../../../shared/components/bullet-list/bullet-list.component';
import {
  PersonalCaseStudyMeta,
  PersonalCaseStudyShellComponent,
  PersonalCaseStudyStat,
} from '../shared/personal-case-study-shell.component';

const nixvimNotablePullRequests = [
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

const nixvimMergedPrs = nixvimNotablePullRequests.length;
const nixvimUpdatedAt = '2026-05-24';

@Component({
  selector: 'app-nixvim',
  standalone: true,
  templateUrl: './nixvim.component.html',
  styleUrls: ['./nixvim.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent, BulletListComponent, PersonalCaseStudyShellComponent],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCog6Tooth,
      heroDocument,
      heroGlobeAlt,
      heroUser,
      heroCalendar,
      heroUsers,
      heroWrenchScrewdriver,
    }),
  ],
})
export class NixvimComponent {
  readonly title = 'Nixvim';
  readonly description =
    'Nixvim is an open-source Neovim distribution in Nix form. I focus on contributor tooling, plugin module reliability, and onboarding patterns that keep editor setups reproducible.';

  readonly repositoryUrl = 'https://github.com/nix-community/nixvim';
  readonly technologies = ['Nix', 'Neovim', 'Lua', 'Nix Modules', 'GitHub Actions'];

  readonly evidence: PersonalCaseStudyMeta[] = [
    {
      label: 'Merged PRs',
      value: `${nixvimMergedPrs}`,
      icon: 'heroCodeBracket',
    },
    {
      label: 'Contributor Role',
      value: 'Active Maintainer',
      icon: 'heroUser',
    },
    {
      label: 'Project Scope',
      value: 'Neovim Configuration',
      icon: 'heroDocument',
    },
    {
      label: 'Active Through',
      value: nixvimUpdatedAt,
      icon: 'heroCalendar',
    },
  ];

  readonly sideStats: PersonalCaseStudyStat[] = [
    {
      label: 'Contribution Pattern',
      value: `${nixvimMergedPrs} PRs reflect practical work on module architecture, automation, and review-ready engineering.`,
    },
    {
      label: 'Technical Focus',
      value: 'Reducing editor customization friction through reusable module boundaries and stable startup behavior.',
    },
    {
      label: 'Outcome',
      value:
        'A maintained contributor pipeline that makes adding and testing new Neovim plugins simpler for the ecosystem.',
    },
  ];

  readonly contributionsAndAchievements: BulletListItem[] = [
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

  readonly notablePullRequests = nixvimNotablePullRequests;

  readonly impactAndCommunity: BulletListItem[] = [
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
