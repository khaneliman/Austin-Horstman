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

@Component({
  selector: 'app-now',
  standalone: true,
  templateUrl: './now.component.html',
  styleUrl: './now.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIconComponent],
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
}
