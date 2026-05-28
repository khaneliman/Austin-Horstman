import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroComputerDesktop,
  heroGlobeAlt,
  heroServerStack,
  heroUsers,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';
import { BulletListComponent, BulletListItem } from '../../../shared/components/bullet-list/bullet-list.component';
import { GITHUB_METRICS } from '../../../shared/data/github-metrics';
import {
  PersonalCaseStudyMeta,
  PersonalCaseStudyShellComponent,
  PersonalCaseStudyStat,
} from '../shared/personal-case-study-shell.component';

const waybarMergedPrs = GITHUB_METRICS.repoMetrics.find((metric) => metric.repo === 'Waybar')?.mergedPrs ?? 0;

function formatMetricDate(date: string): string {
  const [year = '0', month = '1', day = '1'] = date.split('-');

  return new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const waybarUpdatedAt = formatMetricDate(GITHUB_METRICS.asOf);

@Component({
  selector: 'app-waybar',
  standalone: true,
  templateUrl: './waybar.component.html',
  styleUrls: ['./waybar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent, BulletListComponent, PersonalCaseStudyShellComponent],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCog6Tooth,
      heroComputerDesktop,
      heroGlobeAlt,
      heroCalendar,
      heroUsers,
      heroWrenchScrewdriver,
      heroServerStack,
    }),
  ],
})
export class WaybarComponent {
  readonly title = 'Waybar Contributions';
  readonly description =
    'Sustained C++ contributions to Waybar, the highly customizable Wayland status bar, focused on Hyprland and niri compositor support, the shared module framework, and runtime stability.';
  readonly repositoryUrl = 'https://github.com/Alexays/Waybar';
  readonly technologies = ['C++', 'GTK', 'Wayland', 'Hyprland', 'Meson', 'CI/CD'];

  readonly evidence: PersonalCaseStudyMeta[] = [
    {
      label: 'Merged PRs',
      value: `${waybarMergedPrs}+`,
      icon: 'heroCodeBracket',
    },
    {
      label: 'Language',
      value: 'C++',
      icon: 'heroCog6Tooth',
    },
    {
      label: 'Specialty',
      value: 'Hyprland',
      icon: 'heroGlobeAlt',
    },
    {
      label: 'Active Since',
      value: 'Aug 2023',
      icon: 'heroCalendar',
    },
  ];

  readonly sideStats: PersonalCaseStudyStat[] = [
    {
      label: 'Contribution Record',
      value: `Contributed ${waybarMergedPrs} merged Waybar PRs as of ${waybarUpdatedAt}.`,
    },
    {
      label: 'Maintenance Focus',
      value:
        'Hyprland and niri modules, the shared module framework, and runtime stability for the Wayland status bar.',
    },
    {
      label: 'Why It Matters',
      value:
        'Public, inspectable C++ work in a widely used Wayland status bar with real users and a maintainer review process.',
    },
  ];

  contributionsAndSpecialization: BulletListItem[] = [
    {
      text: 'Extended compositor support across the Hyprland and niri modules, including workspace handling, urgent state, and socket-backed event flows.',
    },
    {
      text: 'Added features at the shared `AModule` base — such as a cursor configuration option — that affect interaction behavior across modules.',
    },
    {
      text: 'Hardened runtime behavior by bounding `SafeSignal` queue growth under burst load and handling empty Hyprland socket responses.',
    },
    {
      text: 'Improved configuration ergonomics, including standardizing `persistent_workspaces` to kebab-case `persistent-workspaces`.',
    },
    {
      text: 'Invested in project health: reorganized tests, bootstrapped Hyprland module testing, and maintained the Nix build, formatting, and CI workflows.',
    },
  ];

  impactAndScale: BulletListItem[] = [
    {
      text: `Contributed ${waybarMergedPrs} merged PRs to Waybar as of ${waybarUpdatedAt}, spanning features, fixes, and project tooling.`,
    },
    {
      text: 'Improved reliability of the Hyprland and niri integrations relied on by Wayland desktop users.',
    },
    {
      text: 'Reduced memory and stability risks in core utilities under high-frequency signal load.',
    },
    {
      text: 'Strengthened maintainability through test organization, clang/treefmt formatting, and a healthy Nix build.',
    },
  ];

  notablePullRequests: { number: number; title: string; url: string; mergedAt: string; impact: string }[] = [
    {
      number: 3398,
      title: 'AModule: Cursor config option',
      url: 'https://github.com/Alexays/Waybar/pull/3398',
      mergedAt: '2024-07-17',
      impact:
        'High-discussion change adding a cursor configuration option at the shared AModule base, affecting pointer behavior across modules.',
    },
    {
      number: 4890,
      title: 'fix(util): bound SafeSignal queue growth under burst load',
      url: 'https://github.com/Alexays/Waybar/pull/4890',
      mergedAt: '2026-03-01',
      impact: 'Bounded SafeSignal queue growth to prevent unbounded memory use under burst signal load.',
    },
    {
      number: 4834,
      title: 'feat(niri): niri depends on socket',
      url: 'https://github.com/Alexays/Waybar/pull/4834',
      mergedAt: '2026-02-23',
      impact: 'Wired the niri module to its socket dependency for reliable event handling on the niri compositor.',
    },
    {
      number: 2486,
      title: 'feat: hyprland workspaces add sort-by',
      url: 'https://github.com/Alexays/Waybar/pull/2486',
      mergedAt: '2023-09-11',
      impact: 'Added configurable workspace sort ordering to the Hyprland module.',
    },
    {
      number: 3389,
      title: 'modules/hyprland/backend: handle empty socket response',
      url: 'https://github.com/Alexays/Waybar/pull/3389',
      mergedAt: '2024-06-28',
      impact: 'Hardened the Hyprland backend against empty socket responses.',
    },
    {
      number: 2429,
      title: 'Hyprland urgent class support',
      url: 'https://github.com/Alexays/Waybar/pull/2429',
      mergedAt: '2023-08-24',
      impact: 'Added urgent-window class support to the Hyprland workspaces module.',
    },
    {
      number: 3345,
      title: 'Organize tests and start Hyprland testing',
      url: 'https://github.com/Alexays/Waybar/pull/3345',
      mergedAt: '2024-06-10',
      impact: 'Reorganized the test suite and bootstrapped Hyprland module testing.',
    },
    {
      number: 2468,
      title: 'deprecate persistent_workspaces in favor of persistent-workspaces',
      url: 'https://github.com/Alexays/Waybar/pull/2468',
      mergedAt: '2023-09-11',
      impact: 'Standardized workspace configuration naming to kebab-case while keeping the prior key working.',
    },
  ];
}
