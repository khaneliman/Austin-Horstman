import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroComputerDesktop,
  heroGlobeAlt,
  heroHome,
  heroShieldCheck,
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
  selector: 'app-khanelinix',
  standalone: true,
  templateUrl: './khanelinix.component.html',
  styleUrls: ['./khanelinix.component.scss'],
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
      heroComputerDesktop,
      heroShieldCheck,
    }),
  ],
})
export class KhanelinixComponent {
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

  keyFeatures: BulletListItem[] = [
    {
      text: 'Modular system configuration across macOS, NixOS, and WSL platforms',
    },
    {
      text: 'Comprehensive Home Manager configurations for reproducible user environments',
    },
    {
      text: 'Custom Neovim configuration integration (Khanelivim)',
    },
    {
      text: 'Secret management with sops-nix for secure configuration',
    },
    {
      text: 'Continuous integration with Cachix for binary caching',
    },
    {
      text: 'Organized using flake-parts for maximum modularity and maintainability',
    },
  ];

  technicalHighlights: BulletListItem[] = [
    {
      text: 'Advanced declarative system configuration with Nix flakes',
    },
    {
      text: 'Cross-platform compatibility and consistency',
    },
    {
      text: 'Custom library functions extending nixpkgs functionality',
    },
    {
      text: 'Reproducible development environment setup',
    },
    {
      text: 'Modern desktop configurations with Hyprland and Wayland',
    },
  ];

  supportedPlatforms: BulletListItem[] = [
    {
      text: 'macOS with nix-darwin integration',
    },
    {
      text: 'NixOS with custom system configurations',
    },
    {
      text: 'Windows Subsystem for Linux (WSL)',
    },
    {
      text: 'Consistent Home Manager configurations across all platforms',
    },
  ];
}
