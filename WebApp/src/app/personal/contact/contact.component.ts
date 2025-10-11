import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCap,
  heroCodeBracket,
  heroEnvelope,
  heroPaperAirplane,
  heroRocketLaunch,
  heroUserPlus,
} from '@ng-icons/heroicons/outline';
import { BackgroundElement } from '../../shared/components/decorative-background/decorative-background.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { getPersonalSkills, PersonalSkill } from '../../shared/data/skills';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [NgIconComponent, FormInputComponent, ReactiveFormsModule, HeroSectionComponent],
  providers: [
    provideIcons({
      heroAcademicCap,
      heroCodeBracket,
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

  private readonly fb = inject(FormBuilder);

  heroTitle = "Let's Connect";
  heroSubtitle = "Ready to discuss your next project? I'd love to hear from you.";

  // Get personal skills to display
  personalSkills: PersonalSkill[] = getPersonalSkills();

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
      color: 'blue-300',
      opacity: 20,
      blur: 'lg',
      animate: true,
      delay: 700,
    },
    {
      size: 'sm',
      position: 'center',
      color: 'purple-300',
      opacity: 15,
      blur: 'md',
      animate: true,
      delay: 1000,
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
      // Handle form submission
      console.log('Form submitted:', this.contactForm.value);
      // TODO: Implement actual form submission logic
    } else {
      // Mark all fields as touched to show validation errors
      this.contactForm.markAllAsTouched();
    }
  }
}
