import { Component, OnInit } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

@Component({
  selector: 'app-skyline-kroger',
  templateUrl: './kroger.component.html',
  styleUrls: ['./kroger.component.scss'],
  standalone: true,
  imports: [ProjectDetailTemplateComponent],
})
export class SkylineKrogerComponent implements OnInit {
  projectConfig!: ProjectDetailConfig;

  ngOnInit(): void {
    const krogerConfig = getProjectConfiguration('kroger-solutions');
    if (krogerConfig) {
      // Override configuration for Skyline-specific routing
      this.projectConfig = {
        ...krogerConfig,
        backRoute: '/projects/professional/skyline',
        backLabel: 'Back to Skyline Projects',
        companyKey: 'skyline',
        hoverColor: 'blue',
      };
    }
  }
}
