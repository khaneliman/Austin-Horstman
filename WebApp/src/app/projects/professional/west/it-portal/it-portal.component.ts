import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

@Component({
  standalone: true,
  selector: 'app-it-portal',
  template: ` <app-project-detail-template [config]="projectConfig"> </app-project-detail-template> `,
  imports: [ProjectDetailTemplateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItPortalComponent implements OnInit {
  projectConfig!: ProjectDetailConfig;

  ngOnInit(): void {
    this.projectConfig = getProjectConfiguration('it-portal')!;
  }
}
