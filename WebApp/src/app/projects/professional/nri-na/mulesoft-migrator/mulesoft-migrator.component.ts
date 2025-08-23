import { Component, OnInit } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

@Component({
  selector: 'app-mulesoft-migrator',
  template: `<app-project-detail-template [config]="projectConfig"></app-project-detail-template>`,
  styleUrls: ['./mulesoft-migrator.component.scss'],
  standalone: true,
  imports: [ProjectDetailTemplateComponent],
})
export class MuleSoftMigratorComponent implements OnInit {
  projectConfig!: ProjectDetailConfig;

  ngOnInit(): void {
    this.projectConfig = getProjectConfiguration('mulesoft-migrator')!;
  }
}
