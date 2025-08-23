import { Component, OnInit } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

@Component({
  standalone: true,
  selector: 'app-mile-of-music',
  template: `<app-project-detail-template [config]="projectConfig"></app-project-detail-template>`,
  imports: [ProjectDetailTemplateComponent],
})
export class MileOfMusicComponent implements OnInit {
  projectConfig!: ProjectDetailConfig;

  ngOnInit(): void {
    this.projectConfig = getProjectConfiguration('mile-of-music')!;
  }
}
