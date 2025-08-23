import { Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../shared/data/companies';
import { getProjectsForCompany } from '../../../shared/data/projects';

@Component({
  selector: 'app-geeksquad',
  templateUrl: './geeksquad.component.html',
  styleUrls: ['./geeksquad.component.scss'],
  imports: [CompanyProfileComponent],
})
export class GeeksquadComponent {
  company: CompanyInfo = getCompanyById('bestbuy');
  projects: ProjectInfo[] = getProjectsForCompany('bestbuy');
}
