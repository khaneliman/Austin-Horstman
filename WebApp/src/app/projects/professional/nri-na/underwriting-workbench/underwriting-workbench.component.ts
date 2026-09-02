import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectDetailTemplateComponent } from '../../../../shared/components/project-detail-template/project-detail-template.component';
import { getProjectConfiguration } from '../../../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../../../shared/interfaces/project-detail.interface';

const getUnderwritingWorkbenchProjectConfiguration = (): ProjectDetailConfig => {
  const projectConfig = getProjectConfiguration('underwriting-workbench');
  if (!projectConfig) {
    throw new Error('Missing Underwriting Workbench project configuration');
  }

  return projectConfig;
};

@Component({
  selector: 'app-underwriting-workbench',
  template: `<app-project-detail-template [config]="projectConfig"></app-project-detail-template>`,
  standalone: true,
  imports: [ProjectDetailTemplateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderwritingWorkbenchComponent {
  protected readonly projectConfig = getUnderwritingWorkbenchProjectConfiguration();
}
