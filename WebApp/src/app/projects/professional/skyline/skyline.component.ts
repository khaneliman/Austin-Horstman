import { Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../shared/data/companies';
import { getProjectsForCompany } from '../../../shared/data/projects';

@Component({
  selector: 'app-skyline',
  templateUrl: './skyline.component.html',
  styleUrls: ['./skyline.component.scss'],
  imports: [CompanyProfileComponent],
})
export class SkylineComponent {
  company: CompanyInfo = getCompanyById('skyline');
  projects: ProjectInfo[] = getProjectsForCompany('skyline');
}
