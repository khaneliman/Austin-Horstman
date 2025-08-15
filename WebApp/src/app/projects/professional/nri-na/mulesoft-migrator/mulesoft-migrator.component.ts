import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../shared/components/project-nav-header/project-nav-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowPathRoundedSquare,
  heroComputerDesktop,
  heroChartBarSquare,
  heroCog6Tooth,
  heroDocumentArrowUp,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-mulesoft-migrator',
  templateUrl: './mulesoft-migrator.component.html',
  styleUrls: ['./mulesoft-migrator.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectNavHeaderComponent,
    NgIconComponent,
  ],
  providers: [
    provideIcons({
      heroArrowPathRoundedSquare,
      heroComputerDesktop,
      heroChartBarSquare,
      heroCog6Tooth,
      heroDocumentArrowUp,
    }),
  ],
})
export class MuleSoftMigratorComponent {}
