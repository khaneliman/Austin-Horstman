import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroComputerDesktop,
  heroGlobeAlt,
  heroUsers,
  heroHome,
  heroShieldCheck,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';
import { BulletListComponent, BulletListItem } from '../../../shared/components/bullet-list/bullet-list.component';
import {
  PersonalCaseStudyMeta,
  PersonalCaseStudyShellComponent,
  PersonalCaseStudyStat,
} from '../shared/personal-case-study-shell.component';

const keyFeatures: BulletListItem[] = [
  {
    text: 'Modular system configuration across macOS, NixOS, and Windows Subsystem for Linux (WSL).',
  },
  {
    text: 'Comprehensive Home Manager configurations for reproducible user environments.',
  },
  {
    text: 'Custom Neovim configuration integration (Khanelivim).',
  },
  {
    text: 'Secret management with sops-nix for secure configuration.',
  },
  {
    text: 'Continuous integration and caching support with Cachix.',
  },
  {
    text: 'Organization through flake-parts for modular maintainability.',
  },
];

const technicalHighlights: BulletListItem[] = [
  {
    text: 'Advanced declarative system configuration with Nix flakes.',
  },
  {
    text: 'Cross-platform consistency across Linux/macOS/WSL boundaries.',
  },
  {
    text: 'Custom library functions extending nixpkgs and system behavior.',
  },
  {
    text: 'Reproducible development environment setup for day-to-day workflows.',
  },
  {
    text: 'Modern desktop configurations using Hyprland and Wayland.',
  },
];

const supportedPlatforms: BulletListItem[] = [
  {
    text: 'macOS with nix-darwin integration.',
  },
  {
    text: 'NixOS with custom system configurations.',
  },
  {
    text: 'Windows Subsystem for Linux (WSL).',
  },
  {
    text: 'Consistent Home Manager behavior across all supported systems.',
  },
];

const khanelinixTechnologies = [
  'Nix',
  'NixOS',
  'Nix-Darwin',
  'Home Manager',
  'Flake Parts',
  'Hyprland',
  'Wayland',
  'sops-nix',
  'Cachix',
];

const khanelinixStarted = 'March 2023';

@Component({
  selector: 'app-khanelinix',
  standalone: true,
  templateUrl: './khanelinix.component.html',
  styleUrls: ['./khanelinix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent, BulletListComponent, PersonalCaseStudyShellComponent],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCog6Tooth,
      heroComputerDesktop,
      heroGlobeAlt,
      heroHome,
      heroShieldCheck,
      heroCalendar,
      heroUsers,
      heroWrenchScrewdriver,
    }),
  ],
})
export class KhanelinixComponent {
  readonly title = 'Khanelinix';
  readonly description =
    'A personal Nix system that unifies workstation and user environment management across macOS, NixOS, and WSL with explicit modular boundaries.';
  readonly repositoryUrl = 'https://github.com/khaneliman/khanelinix';
  readonly technologies = khanelinixTechnologies;

  readonly evidence: PersonalCaseStudyMeta[] = [
    {
      label: 'Platforms',
      value: `${supportedPlatforms.length}`,
      icon: 'heroGlobeAlt',
    },
    {
      label: 'Configuration Scope',
      value: 'System + User',
      icon: 'heroHome',
    },
    {
      label: 'Primary Domain',
      value: 'Infrastructure',
      icon: 'heroCodeBracket',
    },
    {
      label: 'Started',
      value: khanelinixStarted,
      icon: 'heroCalendar',
    },
  ];

  readonly sideStats: PersonalCaseStudyStat[] = [
    {
      label: 'Systems Focus',
      value: `${khanelinixTechnologies.length} technologies selected to support a consistent multi-platform workflow.`,
    },
    {
      label: 'Design Direction',
      value: 'Modular flakes and reusable patterns to keep environments predictable across OS boundaries.',
    },
    {
      label: 'Practical Impact',
      value: 'A single configuration model for desktop, terminal, and dotfiles that travels with your tools.',
    },
  ];

  readonly keyFeatures = keyFeatures;
  readonly technicalHighlights = technicalHighlights;
  readonly supportedPlatforms = supportedPlatforms;
}
