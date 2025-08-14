import { Component } from '@angular/core';
import {
  CompanyProfileComponent,
  CompanyInfo,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getProjectsForCompany } from '../../../shared/data/projects';
import { getCompanyById } from '../../../shared/data/companies';

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
