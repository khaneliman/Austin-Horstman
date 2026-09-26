import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetailTemplateComponent } from '../../shared/components/project-detail-template/project-detail-template.component';
import { CaseStudyRouteData, resolveCaseStudy } from './case-study';

/** Renders the case study named by its route's data (see caseStudyRoute). */
@Component({
  selector: 'app-project-case-study',
  template: `<app-project-detail-template [config]="config" />`,
  imports: [ProjectDetailTemplateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCaseStudyComponent {
  protected readonly config = resolveCaseStudy(inject(ActivatedRoute).snapshot.data as CaseStudyRouteData);
}
