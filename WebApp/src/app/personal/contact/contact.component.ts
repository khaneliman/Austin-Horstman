import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCog6Tooth,
  heroPencil,
  heroBeaker,
  heroUserPlus,
  heroEnvelope,
  heroPaperAirplane,
} from '@ng-icons/heroicons/outline';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { BackgroundElement } from '../../shared/components/decorative-background/decorative-background.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    NgIconComponent,
    FormInputComponent,
    ReactiveFormsModule,
    HeroSectionComponent,
  ],
  providers: [
    provideIcons({
      heroCog6Tooth,
      heroPencil,
      heroBeaker,
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
  heroSubtitle =
    "Ready to discuss your next project? I'd love to hear from you.";

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
