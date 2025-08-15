import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../shared/components/project-nav-header/project-nav-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroDocumentText,
  heroSparkles,
  heroChartBarSquare,
  heroCog6Tooth,
  heroScale,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-tax-document-analysis',
  templateUrl: './tax-document-analysis.component.html',
  styleUrls: ['./tax-document-analysis.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectNavHeaderComponent,
    NgIconComponent,
  ],
  providers: [
    provideIcons({
      heroDocumentText,
      heroSparkles,
      heroChartBarSquare,
      heroCog6Tooth,
      heroScale,
    }),
  ],
})
export class TaxDocumentAnalysisComponent {}
