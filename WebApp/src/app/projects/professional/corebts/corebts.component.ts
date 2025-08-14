import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getProjectsForCompany } from '../../../shared/data/projects';
import { getCompanyById } from '../../../shared/data/companies';

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
