import { Component, OnInit } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';

@Component({
  selector: 'app-doitbest',
  template: `<app-project-detail-template
    [config]="projectConfig"
  ></app-project-detail-template>`,
  styleUrls: ['./doitbest.component.scss'],
  standalone: true,
  imports: [ProjectDetailTemplateComponent],
})
export class DoItBestComponent implements OnInit {
  projectConfig!: ProjectDetailConfig;

  ngOnInit(): void {
    this.projectConfig = getProjectConfiguration('doitbest-platform')!;
  }
}
