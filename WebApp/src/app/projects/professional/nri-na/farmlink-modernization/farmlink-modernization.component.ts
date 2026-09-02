import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

const getFarmLinkProjectConfiguration = (): ProjectDetailConfig => {
  const projectConfig = getProjectConfiguration('farmlink-modernization');
  if (!projectConfig) {
    throw new Error('Missing FarmLink modernization project configuration');
  }

  return projectConfig;
};

@Component({
  selector: 'app-farmlink-modernization',
  template: `<app-project-detail-template [config]="projectConfig"></app-project-detail-template>`,
  standalone: true,
  imports: [ProjectDetailTemplateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmLinkModernizationComponent {
  protected readonly projectConfig = getFarmLinkProjectConfiguration();
}
