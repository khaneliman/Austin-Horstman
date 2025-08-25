import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../shared/data/companies';
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
  company: CompanyInfo = getCompanyById('corebts');
  projects: ProjectInfo[] = getProjectsForCompany('corebts');
}
