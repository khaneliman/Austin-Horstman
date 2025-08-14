import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';
import { getCompanyInfo } from '../../../../shared/data/companies';
import {
  getDoItBestProject,
  getKrogerProject,
} from '../../../../shared/data/projects';

@Component({
  selector: 'app-corebts',
  templateUrl: './corebts.component.html',
  styleUrls: ['./corebts.component.scss'],
  imports: [CompanyProfileComponent],
})
export class CorebtsComponent {
  company: CompanyInfo = getCompanyInfo('corebts');

  projects: ProjectInfo[] = [getKrogerProject('corebts'), getDoItBestProject()];
}
