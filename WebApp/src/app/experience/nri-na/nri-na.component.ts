import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../shared/components/company-profile/company-profile.component';
import { getCompanyWithCalculatedStats } from '../../shared/data/companies';
import { getProjectsForExperience } from '../../shared/data/projects';

@Component({
  selector: 'app-nri-na',
  templateUrl: './nri-na.component.html',
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NriNaComponent {
  company: CompanyInfo = getCompanyWithCalculatedStats('nri-na');

  projects: ProjectInfo[] = getProjectsForExperience('nri-na');
}
