import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroComputerDesktop,
  heroGlobeAlt,
  heroHome,
  heroUsers,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';
import { BulletListComponent, BulletListItem } from '../../../shared/components/bullet-list/bullet-list.component';
import {
  PersonalCaseStudyMeta,
  PersonalCaseStudyShellComponent,
  PersonalCaseStudyStat,
} from '../shared/personal-case-study-shell.component';

const homeManagerNotablePullRequests = [
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

const homeManagerMergedPrs = homeManagerNotablePullRequests.length;
const homeManagerUpdatedAt = homeManagerNotablePullRequests.at(-1)?.mergedAt ?? 'Present';

@Component({
  selector: 'app-home-manager',
  standalone: true,
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent, BulletListComponent, PersonalCaseStudyShellComponent],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCog6Tooth,
      heroGlobeAlt,
      heroHome,
      heroComputerDesktop,
      heroCalendar,
      heroUsers,
      heroWrenchScrewdriver,
    }),
  ],
})
export class HomeManagerComponent {
  readonly title = 'Home Manager';
  readonly description =
    'Community-maintained user environment management with Nix modules, focused on reproducible shell, activation, and application configuration workflows.';
  readonly repositoryUrl = 'https://github.com/nix-community/home-manager';
  readonly technologies = ['Nix', 'Home Manager', 'Module System', 'Shell', 'CI'];

  readonly evidence: PersonalCaseStudyMeta[] = [
    {
      label: 'Merged PRs',
      value: `${homeManagerMergedPrs}+`,
      icon: 'heroCodeBracket',
    },
    {
      label: 'Role',
      value: 'Open Source Maintainer',
      icon: 'heroHome',
    },
    {
      label: 'Repository Type',
      value: 'User Environments',
      icon: 'heroComputerDesktop',
    },
    {
      label: 'Active Through',
      value: homeManagerUpdatedAt,
      icon: 'heroCalendar',
    },
  ];

  readonly sideStats: PersonalCaseStudyStat[] = [
    {
      label: 'Contribution Record',
      value: `${homeManagerMergedPrs} PRs span module architecture, user-facing ergonomics, and CI reliability work.`,
    },
    {
      label: 'Impact Focus',
      value:
        'Improving onboarding for users with mixed shells and desktop workflows while reducing fragility during updates.',
    },
    {
      label: 'Why It Matters',
      value:
        'This is public, review-backed engineering in a widely used configuration system with real downstream impact.',
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
      text: 'Added practical migration support for legacy configs and contributed maintainer-level review coordination.',
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
      text: 'Raised PR quality through maintainer-level review and module-shaping contributions.',
    },
  ];

  readonly notablePullRequests = homeManagerNotablePullRequests;
}
