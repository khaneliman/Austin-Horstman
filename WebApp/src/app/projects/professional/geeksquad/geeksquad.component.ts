import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../shared/data/companies';
import { getProjectsForCompany } from '../../../shared/data/projects';

@Component({
  selector: 'app-geeksquad',
  standalone: true,
  templateUrl: './geeksquad.component.html',
  styleUrls: ['./geeksquad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CompanyProfileComponent],
})
export class GeeksquadComponent {
  company: CompanyInfo = getCompanyById('bestbuy');
  projects: ProjectInfo[] = getProjectsForCompany('bestbuy');
}
