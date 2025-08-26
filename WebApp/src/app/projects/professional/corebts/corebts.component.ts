import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getCompanyWithCalculatedStats } from '../../../shared/data/companies';
import { getProjectsForCompany } from '../../../shared/data/projects';

@Component({
  selector: 'app-corebts',
  standalone: true,
  templateUrl: './corebts.component.html',
  styleUrls: ['./corebts.component.scss'],
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorebtsComponent {
  company: CompanyInfo = getCompanyWithCalculatedStats('corebts');
  projects: ProjectInfo[] = getProjectsForCompany('corebts');
}
