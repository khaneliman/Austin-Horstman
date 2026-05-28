import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCalendar,
  heroCodeBracket,
  heroCog6Tooth,
  heroComputerDesktop,
  heroCpuChip,
  heroGlobeAlt,
  heroHome,
  heroSparkles,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';
import { BulletListComponent, BulletListItem } from '../../../shared/components/bullet-list/bullet-list.component';
import {
  PersonalCaseStudyMeta,
  PersonalCaseStudyShellComponent,
  PersonalCaseStudyStat,
} from '../shared/personal-case-study-shell.component';

const aiFeatures: BulletListItem[] = [
  {
    text: 'GitHub Copilot integration for intelligent code completion.',
  },
  {
    text: 'Claude Code integration for advanced AI-powered development.',
  },
  {
    text: 'Avante completion engine with multiple AI providers.',
  },
  {
    text: 'Blink completion for fast and context-aware suggestions.',
  },
];

const languageSupport: BulletListItem[] = [
  {
    text: 'Language Server Protocol (LSP) for diverse language ecosystems.',
  },
  {
    text: 'Advanced Rust workflows through rust-analyzer.',
  },
  {
    text: 'TypeScript and JavaScript with comprehensive tooling.',
  },
  {
    text: 'Java development with eclipse.jdt.ls.',
  },
  {
    text: 'Nix language support with nil and associated helper tools.',
  },
  {
    text: 'Go, Python, C++, and many additional language integrations.',
  },
];

const developmentFeatures: BulletListItem[] = [
  {
    text: 'Fuzzy finding with Telescope for files, symbols, and text.',
  },
  {
    text: 'Git workflow support with LazyGit and Gitsigns.',
  },
  {
    text: 'Debugging and test execution with nvim-dap and related integrations.',
  },
  {
    text: 'File-manager and explorer workflows with Yazi and Neo-tree.',
  },
  {
    text: 'Theming, statusline, and interface ergonomics for long coding sessions.',
  },
];

const technicalHighlights: BulletListItem[] = [
  {
    text: 'Fully declarative configuration using Nix and Nixvim.',
  },
  {
    text: 'Reproducible setup across machines with stable startup behavior.',
  },
  {
    text: 'Modular plugin architecture for fast customization and reuse.',
  },
  {
    text: 'High-density tooling for navigation, search, and context switching.',
  },
];

const technologyStack = [
  'Nix',
  'Nixvim',
  'Neovim',
  'LSP',
  'GitHub Copilot',
  'Claude Code',
  'Avante',
  'Blink',
  'Telescope',
  'TreeSitter',
  'nvim-dap',
];

@Component({
  selector: 'app-khanelivim',
  standalone: true,
  templateUrl: './khanelivim.component.html',
  styleUrls: ['./khanelivim.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent, BulletListComponent, PersonalCaseStudyShellComponent],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCog6Tooth,
      heroCpuChip,
      heroGlobeAlt,
      heroHome,
      heroCalendar,
      heroSparkles,
      heroComputerDesktop,
      heroWrenchScrewdriver,
    }),
  ],
})
export class KhanelivimComponent {
  readonly title = 'Khanelivim';
  readonly description =
    'A declarative Neovim setup built with Nixvim, combining AI-assisted completion, LSP coverage, and curated plugin architecture for a repeatable developer workflow.';
  readonly repositoryUrl = 'https://github.com/khaneliman/khanelivim';
  readonly technologies = technologyStack;

  readonly evidence: PersonalCaseStudyMeta[] = [
    {
      label: 'Language Areas',
      value: `${languageSupport.length}+`,
      icon: 'heroCpuChip',
    },
    {
      label: 'AI Integrations',
      value: `${aiFeatures.length}`,
      icon: 'heroSparkles',
    },
    {
      label: 'Repository Type',
      value: 'Personal Workflow',
      icon: 'heroHome',
    },
    {
      label: 'Started',
      value: 'March 2023',
      icon: 'heroCalendar',
    },
  ];

  readonly sideStats: PersonalCaseStudyStat[] = [
    {
      label: 'Editor Architecture',
      value: `${technologyStack.length} integrated tool choices were selected for fast, composable editor behavior.`,
    },
    {
      label: 'Workflow Benefit',
      value: 'Keeps code completion, language tooling, and navigation consistent across machines.',
    },
    {
      label: 'Focus Area',
      value: 'A reproducible setup tuned for AI-assisted, high-throughput software engineering.',
    },
  ];

  readonly aiFeatures = aiFeatures;
  readonly languageSupport = languageSupport;
  readonly developmentFeatures = developmentFeatures;
  readonly technicalHighlights = technicalHighlights;
}
