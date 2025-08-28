import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroCpuChip,
  heroGlobeAlt,
  heroHome,
  heroSparkles,
  heroStar,
  heroUser,
  heroUsers,
  heroWrench,
} from '@ng-icons/heroicons/outline';
import { BulletListComponent, BulletListItem } from '../../../shared/components/bullet-list/bullet-list.component';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../../../shared/components/decorative-background/decorative-background.component';

@Component({
  selector: 'app-khanelivim',
  standalone: true,
  templateUrl: './khanelivim.component.html',
  styleUrls: ['./khanelivim.component.scss'],
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
      heroSparkles,
      heroCpuChip,
      heroWrench,
    }),
  ],
})
export class KhanelivimComponent {
  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-4 right-4',
      color: 'emerald-500',
      opacity: 10,
      blur: 'xl',
    },
    {
      size: 'md',
      position: 'bottom-4 left-4',
      color: 'teal-500',
      opacity: 10,
      blur: 'lg',
    },
  ];

  aiFeatures: BulletListItem[] = [
    {
      text: 'GitHub Copilot integration for intelligent code completion',
    },
    {
      text: 'Claude Code integration for advanced AI-powered development',
    },
    {
      text: 'Avante completion engine with multiple AI providers',
    },
    {
      text: 'Blink completion for ultra-fast code suggestions',
    },
  ];

  languageSupport: BulletListItem[] = [
    {
      text: 'Language Server Protocol (LSP) for 20+ programming languages',
    },
    {
      text: 'Advanced Rust development with rust-analyzer',
    },
    {
      text: 'TypeScript/JavaScript with comprehensive tooling',
    },
    {
      text: 'Java development with eclipse.jdt.ls',
    },
    {
      text: 'Nix language support with nil LSP',
    },
    {
      text: 'Go, Python, C++, and many more languages',
    },
  ];

  developmentFeatures: BulletListItem[] = [
    {
      text: 'Fuzzy finding with Telescope for files, symbols, and text',
    },
    {
      text: 'Advanced Git integration with LazyGit and Gitsigns',
    },
    {
      text: 'Debugging support with nvim-dap',
    },
    {
      text: 'Testing framework integration',
    },
    {
      text: 'Multiple file managers (Yazi, Neo-tree)',
    },
    {
      text: 'Customizable UI with modern themes and statuslines',
    },
  ];

  technicalHighlights: BulletListItem[] = [
    {
      text: 'Fully declarative configuration using Nix and Nixvim',
    },
    {
      text: 'Reproducible setup across different machines and platforms',
    },
    {
      text: 'Modular plugin architecture for easy customization',
    },
    {
      text: 'Comprehensive keymapping and navigation optimization',
    },
    {
      text: '100+ carefully configured and integrated plugins',
    },
  ];
}
