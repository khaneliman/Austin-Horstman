import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getProjectsForCompany } from '../../../shared/data/projects';
import { getCompanyById } from '../../../shared/data/companies';

@Component({
  selector: 'app-nri-na',
  templateUrl: './nri-na.component.html',
  styleUrls: ['./nri-na.component.scss'],
  imports: [CompanyProfileComponent],
})
export class NriNaComponent {
  company: CompanyInfo = getCompanyById('nri-na');
  projects: ProjectInfo[] = getProjectsForCompany('nri-na');
}
