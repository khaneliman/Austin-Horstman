import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../shared/components/company-profile/company-profile.component';
import { getCompanyWithCalculatedStats } from '../../shared/data/companies';
import { getProjectsForEmployment } from '../../shared/data/projects';

@Component({
  selector: 'app-bestbuy',
  standalone: true,
  templateUrl: './bestbuy.component.html',
  styleUrls: ['./bestbuy.component.scss'],
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestbuyComponent {
  company: CompanyInfo = getCompanyWithCalculatedStats('bestbuy');
  projects: ProjectInfo[] = getProjectsForEmployment('bestbuy');
}
