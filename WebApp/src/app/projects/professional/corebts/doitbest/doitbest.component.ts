import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

@Component({
  selector: 'app-doitbest',
  template: `<app-project-detail-template [config]="projectConfig"></app-project-detail-template>`,
  styleUrls: ['./doitbest.component.scss'],
  standalone: true,
  imports: [ProjectDetailTemplateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoItBestComponent implements OnInit {
  projectConfig!: ProjectDetailConfig;

  ngOnInit(): void {
    this.projectConfig = getProjectConfiguration('doitbest-platform')!;
  }
}
