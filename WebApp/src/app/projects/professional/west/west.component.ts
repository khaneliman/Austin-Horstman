import { Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../shared/data/companies';
import { getProjectsForCompany } from '../../../shared/data/projects';

@Component({
  selector: 'app-west',
  templateUrl: './west.component.html',
  styleUrls: ['./west.component.scss'],
  imports: [CompanyProfileComponent],
})
export class WestComponent {
  company: CompanyInfo = getCompanyById('west');
  projects: ProjectInfo[] = getProjectsForCompany('west');
}
