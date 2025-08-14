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
  selector: 'app-nri-na',
  templateUrl: './nri-na.component.html',
  styleUrls: ['./nri-na.component.scss'],
  imports: [CompanyProfileComponent],
})
export class NriNaComponent {
  company: CompanyInfo = getCompanyInfo('nriNa');

  projects: ProjectInfo[] = [getKrogerProject('nriNa'), getDoItBestProject()];
}
