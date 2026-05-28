import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroGlobeAlt,
  heroLightBulb,
} from '@ng-icons/heroicons/outline';
import { GITHUB_METRICS } from '../../../shared/data/github-metrics';
import {
  EnhancedFeature,
  EnhancedFeatureCardComponent,
} from '../../../shared/components/enhanced-feature-card/enhanced-feature-card.component';

const getRepoMergedPrs = (repoName: string): number =>
  GITHUB_METRICS.repoMetrics.find((metric) => metric.repo === repoName)?.mergedPrs ?? 0;

const homeManagerPrs = getRepoMergedPrs('Home Manager');
const nixvimPrs = getRepoMergedPrs('Nixvim');
const nixpkgsPrs = getRepoMergedPrs('Nixpkgs');

@Component({
  selector: 'app-technology',
  standalone: true,
  templateUrl: './technology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NgIconComponent, EnhancedFeatureCardComponent],
  providers: [
    provideIcons({
      heroCog6Tooth,
      heroGlobeAlt,
      heroCodeBracket,
      heroCommandLine,
      heroLightBulb,
    }),
  ],
})
export class TechnologyComponent {
  frontendTechnologies: EnhancedFeature[] = [
    {
      title: 'Angular',
      description:
        'Primary frontend framework with extensive experience in modern Angular development, state management, and component architecture.',
      icon: 'heroCodeBracket',
      badge: 'Expert Level',
      footer: 'Framework • SPA • TypeScript',
    },
    {
      title: 'TypeScript',
      description: 'Strong typing and modern JavaScript development with extensive use in enterprise applications.',
      icon: 'heroCodeBracket',
      badge: 'Advanced',
      footer: 'Language • Type Safety • Modern JS',
    },
    {
      title: 'HTML/CSS',
      description: 'Semantic markup and modern styling techniques including CSS Grid, Flexbox, and responsive design.',
      icon: 'heroCodeBracket',
      badge: 'Expert Level',
      footer: 'Markup • Styling • Responsive',
    },
  ];

  backendTechnologies: EnhancedFeature[] = [
    {
      title: 'C# / .NET',
      description: 'Extensive experience with .NET ecosystem, Web APIs, and enterprise application development.',
      icon: 'heroCog6Tooth',
      badge: 'Expert Level',
      footer: 'Backend • APIs • Enterprise',
    },
    {
      title: 'SQL Server',
      description: 'Database design, optimization, stored procedures, and complex query development.',
      icon: 'heroCog6Tooth',
      badge: 'Advanced',
      footer: 'Database • Optimization • Queries',
    },
    {
      title: 'Java',
      description: 'Enterprise Java development and Spring framework experience in consulting projects.',
      icon: 'heroCog6Tooth',
      badge: 'Intermediate',
      footer: 'Enterprise • Spring • JVM',
    },
  ];

  emergingTechnologies: EnhancedFeature[] = [
    {
      title: 'Nix Ecosystem',
      description: `Active maintainer/regular contributor across Nixpkgs, Home Manager, and Nixvim with ${homeManagerPrs}, ${nixvimPrs}, and ${nixpkgsPrs} merged PRs respectively (GitHub author search as of ${GITHUB_METRICS.asOf}). Focus on declarative environments, plugin/module quality, and reproducible builds.`,
      icon: 'heroLightBulb',
      badge: 'Maintainer',
      footer: 'Open Source • Declarative • Reproducible',
    },
    {
      title: 'Rust & C++',
      description:
        'Systems programming languages used in performance-critical applications and contributing to open source projects.',
      icon: 'heroLightBulb',
      badge: 'Growing',
      footer: 'Systems • Performance • Open Source',
    },
  ];

  devOpsTools: string[] = ['Docker', 'GitHub Actions', 'Git', 'Azure'];
}
