import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../shared/components/company-profile/company-profile.component';
import { getCompanyWithCalculatedStats } from '../../shared/data/companies';
import { getProjectsForExperience } from '../../shared/data/projects';

@Component({
  selector: 'app-bestbuy',
  standalone: true,
  templateUrl: './bestbuy.component.html',
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestbuyComponent {
  company: CompanyInfo = getCompanyWithCalculatedStats('bestbuy');
  projects: ProjectInfo[] = getProjectsForExperience('bestbuy');
}
