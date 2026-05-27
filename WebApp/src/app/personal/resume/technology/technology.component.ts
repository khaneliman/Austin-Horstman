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
import {
  EnhancedFeature,
  EnhancedFeatureCardComponent,
} from '../../../shared/components/enhanced-feature-card/enhanced-feature-card.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
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
      description:
        'Active maintainer in Nixpkgs, Home Manager, and Nixvim projects. Specializes in declarative system configuration and reproducible builds.',
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
