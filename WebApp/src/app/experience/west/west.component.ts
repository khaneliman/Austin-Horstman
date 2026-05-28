import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../shared/components/company-profile/company-profile.component';
import { getCompanyWithCalculatedStats } from '../../shared/data/companies';
import { getProjectsForExperience } from '../../shared/data/projects';

@Component({
  selector: 'app-west',
  standalone: true,
  templateUrl: './west.component.html',
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WestComponent {
  company: CompanyInfo = getCompanyWithCalculatedStats('west');
  projects: ProjectInfo[] = getProjectsForExperience('west');
}
