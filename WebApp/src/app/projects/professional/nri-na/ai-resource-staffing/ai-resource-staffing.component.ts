import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../shared/components/project-nav-header/project-nav-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroWrench,
  heroUserGroup,
  heroBeaker,
  heroChartBarSquare,
  heroCog6Tooth,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-ai-resource-staffing',
  templateUrl: './ai-resource-staffing.component.html',
  styleUrls: ['./ai-resource-staffing.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectNavHeaderComponent,
    NgIconComponent,
  ],
  providers: [
    provideIcons({
      heroWrench,
      heroUserGroup,
      heroBeaker,
      heroChartBarSquare,
      heroCog6Tooth,
    }),
  ],
})
export class AiResourceStaffingComponent {}
