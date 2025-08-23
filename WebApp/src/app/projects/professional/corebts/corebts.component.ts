import { Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../shared/data/companies';
import { getProjectsForCompany } from '../../../shared/data/projects';

@Component({
  selector: 'app-corebts',
  templateUrl: './corebts.component.html',
  styleUrls: ['./corebts.component.scss'],
  imports: [CompanyProfileComponent],
})
export class CorebtsComponent {
  company: CompanyInfo = getCompanyById('corebts');
  projects: ProjectInfo[] = getProjectsForCompany('corebts');
}
