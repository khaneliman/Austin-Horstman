import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCap,
  heroCheckCircle,
  heroCodeBracket,
  heroEnvelope,
  heroPaperAirplane,
  heroRocketLaunch,
  heroUserPlus,
} from '@ng-icons/heroicons/outline';
import { SOCIAL_PROFILES } from '../../core/services/social-links.service';
import { BackgroundElement } from '../../shared/components/decorative-background/decorative-background.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { getPersonalSkills, PersonalSkill } from '../../shared/data/skills';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [NgClass, NgIconComponent, FormInputComponent, ReactiveFormsModule, HeroSectionComponent],
  providers: [
    provideIcons({
      heroAcademicCap,
      heroCodeBracket,
      heroCheckCircle,
      heroRocketLaunch,
      heroUserPlus,
      heroEnvelope,
      heroPaperAirplane,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contactForm: FormGroup;
  preparedMessage = '';
  submissionState: 'idle' | 'prepared' = 'idle';

  private readonly fb = inject(FormBuilder);

  heroTitle = "Let's Connect";
  heroSubtitle = "Ready to discuss your next project? I'd love to hear from you.";

  // Get personal skills to display
  personalSkills: PersonalSkill[] = getPersonalSkills();

  contactChannels = [
    {
      label: 'LinkedIn',
      description: 'Best place for project, consulting, or architecture conversations.',
      href: SOCIAL_PROFILES.links.linkedin,
      icon: 'heroEnvelope',
    },
    {
      label: 'GitHub',
      description: 'Useful for open-source, Nix, tooling, and portfolio-code context.',
      href: SOCIAL_PROFILES.links.github,
      icon: 'heroCodeBracket',
    },
  ];

  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-right',
      color: 'white',
      opacity: 10,
      blur: 'xl',
      animate: true,
      delay: 300,
    },
    {
      size: 'md',
      position: 'bottom-left',
      color: 'teal-300',
      opacity: 20,
      blur: 'lg',
      animate: true,
      delay: 700,
    },
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.getRawValue();
      this.preparedMessage = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
      this.submissionState = 'prepared';
    } else {
      // Mark all fields as touched to show validation errors
      this.contactForm.markAllAsTouched();
      this.submissionState = 'idle';
    }
  }
}
