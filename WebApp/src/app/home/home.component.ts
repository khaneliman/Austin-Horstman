import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCodeBracket,
  heroCog6Tooth,
  heroComputerDesktop,
  heroDocumentText,
  heroRocketLaunch,
  heroUser,
} from '@ng-icons/heroicons/outline';
import { BackgroundElement } from '../shared/components/decorative-background/decorative-background.component';
import {
  EnhancedFeature,
  EnhancedFeatureCardComponent,
} from '../shared/components/enhanced-feature-card/enhanced-feature-card.component';
import { HeroButton, HeroSectionComponent } from '../shared/components/hero-section/hero-section.component';
import { WaveSeparatorComponent } from '../shared/components/wave-separator/wave-separator.component';
import { getProficientTechnologies } from '../shared/data/technologies';

@Component({
  standalone: true,
  imports: [RouterModule, NgIconComponent, HeroSectionComponent, WaveSeparatorComponent, EnhancedFeatureCardComponent],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroComputerDesktop,
      heroDocumentText,
      heroRocketLaunch,
      heroCog6Tooth,
      heroUser,
    }),
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  heroTitle = 'Khaneliman';
  heroSubtitle =
    'Professional Software Engineer with expertise in modern technologies and a passion for building innovative solutions. Ready to adapt and excel in any development environment.';

  // Get top 6 proficient skills for display
  topSkills = getProficientTechnologies()
    .sort((a, b) => (b.skillLevel ?? 0) - (a.skillLevel ?? 0))
    .slice(0, 6)
    .map((skill) => skill.name);

  heroButtons: HeroButton[] = [
    {
      text: 'View Resume',
      variant: 'primary',
      routerLink: '/personal/resume',
      icon: 'heroDocumentText',
    },
    {
      text: 'View Projects',
      variant: 'secondary',
      routerLink: '/projects',
      icon: 'heroCodeBracket',
    },
  ];

  backgroundElements: BackgroundElement[] = [
    {
      size: 'w-32-h-32',
      position: 'top-20 left-10',
      color: 'white',
      opacity: 10,
      blur: 'xl',
      animate: true,
    },
    {
      size: 'w-48-h-48',
      position: 'top-40 right-20',
      color: 'purple-300',
      opacity: 20,
      blur: '2xl',
      animate: true,
      delay: 1000,
    },
    {
      size: 'xl',
      position: 'bottom-40 left-1/4',
      color: 'blue-300',
      opacity: 20,
      blur: 'xl',
      animate: true,
      delay: 500,
    },
    {
      size: 'w-40-h-40',
      position: 'bottom-20 right-1/3',
      color: 'white',
      opacity: 10,
      blur: '2xl',
      animate: true,
      delay: 700,
    },
  ];

  features: EnhancedFeature[] = [
    {
      title: 'Modern Development',
      description:
        'Expert in cutting-edge frameworks and technologies, delivering scalable and maintainable solutions using the latest best practices.',
      icon: 'heroCodeBracket',
      badge: 'Expert',
      footer: 'Angular • TypeScript • Modern',
    },
    {
      title: 'System Architecture',
      description:
        'Designing robust, scalable systems that grow with your business needs while maintaining high performance and reliability.',
      icon: 'heroCog6Tooth',
      badge: 'Advanced',
      footer: 'Scalable • Cloud • Reliable',
    },
    {
      title: 'Innovation Focus',
      description:
        'Passionate about exploring emerging technologies and implementing innovative solutions that drive business success.',
      icon: 'heroRocketLaunch',
      badge: 'Continuous',
      footer: 'Innovation • Research • Growth',
    },
  ];
}
