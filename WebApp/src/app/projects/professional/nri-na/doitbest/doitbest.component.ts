import { Component, OnInit } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

@Component({
  selector: 'app-nri-na-doitbest',
  template: `<app-project-detail-template [config]="projectConfig"></app-project-detail-template>`,
  styleUrls: ['./doitbest.component.scss'],
  standalone: true,
  imports: [ProjectDetailTemplateComponent],
})
export class NriNaDoItBestComponent implements OnInit {
  projectConfig!: ProjectDetailConfig;

  ngOnInit(): void {
    // Use the existing doitbest-platform configuration but with NRI-NA navigation
    this.projectConfig = {
      ...getProjectConfiguration('doitbest-platform')!,
      // Override navigation settings for NRI-NA context
      backRoute: '/projects/professional/nri-na',
      backLabel: 'Back to NRI-NA Projects',
      companyKey: 'nri-na',
    };
  }
}
