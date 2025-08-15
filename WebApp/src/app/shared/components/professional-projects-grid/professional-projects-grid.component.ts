import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getCompanyEmploymentRoute } from '../../data/companies';
import { LogoStylingService } from '../../services/logo-styling.service';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';

export interface ProfessionalProject {
  title: string;
  description: string;
  company: string;
  route: string;
  logo: string;
  theme: string;
  logoBackground: 'white' | 'black' | 'dark';
  projects: {
    name: string;
    route: string;
  }[];
}

@Component({
  selector: 'app-professional-projects-grid',
  standalone: true,
  imports: [CommonModule, RouterModule, DecorativeBackgroundComponent],
  templateUrl: './professional-projects-grid.component.html',
  styleUrls: ['./professional-projects-grid.component.scss'],
})
export class ProfessionalProjectsGridComponent {
  @Input() projects: ProfessionalProject[] = [];
  @Input() showCompanyInfo = true;

  private readonly logoStylingService = inject(LogoStylingService);

  backgroundElements: BackgroundElement[] = [
    {
      size: 'md',
      position: 'top-4 right-4',
      color: 'white',
      opacity: 10,
      blur: 'xl',
    },
  ];

  getCompanyRoute(companyName: string): string {
    return getCompanyEmploymentRoute(companyName);
  }

  getLogoBackgroundStyle(logoBackground: 'white' | 'black' | 'dark'): string {
    return this.logoStylingService.getLogoBackgroundStyle(logoBackground);
  }
}
