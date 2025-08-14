import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getProjectsForCompany } from '../../../shared/data/projects';
import { getCompanyById } from '../../../shared/data/companies';

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
