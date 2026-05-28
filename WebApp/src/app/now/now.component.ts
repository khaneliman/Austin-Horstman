import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroBeaker,
  heroBookOpen,
  heroCodeBracket,
  heroCpuChip,
  heroSparkles,
} from '@ng-icons/heroicons/outline';
import { GITHUB_METRICS } from '../shared/data/github-metrics';
import { CountUpDirective } from '../shared/directives/count-up.directive';

interface FocusItem {
  eyebrow: string;
  title: string;
  body: string;
  icon: string;
}

interface RepoActivity {
  name: string;
  href: string;
  description: string;
  mergedPrs: number;
}

interface ShippedItem {
  title: string;
  repo: string;
  date: string; // ISO YYYY-MM-DD
  href: string;
  tag: 'release' | 'feature' | 'maintenance' | 'workflow' | 'upstream';
}

interface ExploringItem {
  title: string;
  body: string;
}

@Component({
  selector: 'app-now',
  standalone: true,
  templateUrl: './now.component.html',
  styleUrl: './now.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIconComponent, CountUpDirective],
  providers: [
    provideIcons({
      heroSparkles,
      heroCodeBracket,
      heroBeaker,
      heroBookOpen,
      heroCpuChip,
      heroArrowTopRightOnSquare,
    }),
  ],
})
export class NowComponent {
  readonly asOf = this.formatAsOf(GITHUB_METRICS.asOf);
  readonly totalMergedPrs = GITHUB_METRICS.totalMergedPrs;
  readonly githubUser = 'khaneliman';
  readonly githubProfileUrl = `https://github.com/${this.githubUser}`;
  // ghchart returns a static SVG, no API key required. Teal-500 (#14b8a6)
  // matches the site accent and reads cleanly on both paper and slate.
  readonly heatmapUrl = `https://ghchart.rshah.org/14b8a6/${this.githubUser}`;

  readonly focusItems: FocusItem[] = [
    {
      eyebrow: 'Day Job',
      title: 'Architecting an agentic legacy-modernization stack',
      body: 'Leading the SECURA Insurance MuleSoft → .NET migration at NRI-NA. Designing the analyze → document → implement → verify loop and the MCP servers, skills, and prompts that drive it.',
      icon: 'heroCpuChip',
    },
    {
      eyebrow: 'Open Source',
      title: 'Maintaining the Nix corner of the ecosystem',
      body: 'Steady contributions across Nixpkgs, Home Manager, and Nixvim — module reliability, updater workflows, and contributor-facing quality work over headline features.',
      icon: 'heroSparkles',
    },
    {
      eyebrow: 'Tinkering',
      title: 'Editorial portfolio rebuild',
      body: 'Refining this site into a print-grade case-study reader. Recent work: split/compact/ledger variants, command palette, scroll-driven career timeline.',
      icon: 'heroBeaker',
    },
    {
      eyebrow: 'Learning',
      title: 'Frontier-model behavior under repository-scale agents',
      body: 'Tracking how Claude Sonnet 4.x, GPT-5.x, and Codex CLI handle long-context migrations — what holds, what drifts, where deterministic tooling has to step in.',
      icon: 'heroBookOpen',
    },
  ];

  readonly recentlyShipped: ShippedItem[] = [
    {
      title: 'home-manager: set 26.05 as stable',
      repo: 'nix-community/home-manager',
      date: '2026-05-25',
      href: 'https://github.com/nix-community/home-manager/pull/9390',
      tag: 'release',
    },
    {
      title: 'kulala-core: init at 0.6.0; vimPlugins.kulala-nvim → 6.1.0',
      repo: 'NixOS/nixpkgs',
      date: '2026-05-24',
      href: 'https://github.com/NixOS/nixpkgs/pull/523733',
      tag: 'feature',
    },
    {
      title: 'fix(parser): parse implicit first request',
      repo: 'mistweaverco/kulala-core',
      date: '2026-05-26',
      href: 'https://github.com/mistweaverco/kulala-core/pull/45',
      tag: 'upstream',
    },
    {
      title: 'luarocks-packages-updater: normalize license metadata',
      repo: 'NixOS/nixpkgs',
      date: '2026-05-24',
      href: 'https://github.com/NixOS/nixpkgs/pull/523736',
      tag: 'workflow',
    },
    {
      title: 'yaziPlugins: commit updates separately',
      repo: 'NixOS/nixpkgs',
      date: '2026-05-25',
      href: 'https://github.com/NixOS/nixpkgs/pull/523689',
      tag: 'workflow',
    },
    {
      title: 'luaPackages + vimPlugins update burst (2026-05-24)',
      repo: 'NixOS/nixpkgs',
      date: '2026-05-26',
      href: 'https://github.com/NixOS/nixpkgs/pulls?q=is%3Apr+author%3Akhaneliman+is%3Amerged',
      tag: 'maintenance',
    },
  ];

  readonly tagLabels: Record<ShippedItem['tag'], string> = {
    release: 'Release cut',
    feature: 'New package',
    maintenance: 'Maintenance',
    workflow: 'Workflow',
    upstream: 'Upstream',
  };

  readonly exploring: ExploringItem[] = [
    {
      title: 'Separated updater commits',
      body: 'Splitting batch-package updates into per-package commits so reviewers can land them independently and updaters can resume mid-batch.',
    },
    {
      title: 'AI/LSP plugin coverage in Nixvim',
      body: 'Closing gaps in Nixvim module coverage for AI tooling (Copilot, Claude Code, Codex CLI) and recent LSP additions.',
    },
    {
      title: 'Portfolio reading-mode polish',
      body: 'Pushing this site toward a print-grade case-study reader — progress bar, takeaways, and print stylesheet just landed.',
    },
  ];

  readonly openSourceRepos: RepoActivity[] = [
    {
      name: 'Nixpkgs',
      href: 'https://github.com/NixOS/nixpkgs/pulls?q=is%3Apr+author%3Akhaneliman',
      description: 'Package update bursts, metadata, updater + changelog workflows',
      mergedPrs: GITHUB_METRICS.repoMetrics.find((r) => r.repo === 'Nixpkgs')?.mergedPrs ?? 0,
    },
    {
      name: 'Home Manager',
      href: 'https://github.com/nix-community/home-manager/pulls?q=is%3Apr+author%3Akhaneliman',
      description: 'Module reliability, legacy compat, release workflow polish',
      mergedPrs: GITHUB_METRICS.repoMetrics.find((r) => r.repo === 'Home Manager')?.mergedPrs ?? 0,
    },
    {
      name: 'Nixvim',
      href: 'https://github.com/nix-community/nixvim/pulls?q=is%3Apr+author%3Akhaneliman',
      description: 'New plugin modules (AI/LSP), startup + runtime stability',
      mergedPrs: GITHUB_METRICS.repoMetrics.find((r) => r.repo === 'Nixvim')?.mergedPrs ?? 0,
    },
  ];

  private formatAsOf(date: string): string {
    return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  formatShipDate(date: string): string {
    return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }
}
