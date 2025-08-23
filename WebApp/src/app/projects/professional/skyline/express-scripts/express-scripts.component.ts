import { Component, OnInit } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

@Component({
  selector: 'app-express-scripts',
  template: `<app-project-detail-template [config]="projectConfig"></app-project-detail-template>`,
  standalone: true,
  imports: [ProjectDetailTemplateComponent],
})
export class ExpressScriptsComponent implements OnInit {
  projectConfig!: ProjectDetailConfig;

  ngOnInit(): void {
    this.projectConfig = getProjectConfiguration('express-scripts')!;
  }
}
