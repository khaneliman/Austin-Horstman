import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../shared/components/company-profile/company-profile.component';
import { getCompanyWithCalculatedStats } from '../../../shared/data/companies';
import { getProjectsForCompany } from '../../../shared/data/projects';

@Component({
  selector: 'app-skyline',
  standalone: true,
  templateUrl: './skyline.component.html',
  styleUrls: ['./skyline.component.scss'],
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkylineComponent {
  company: CompanyInfo = getCompanyWithCalculatedStats('skyline');
  projects: ProjectInfo[] = getProjectsForCompany('skyline');
}
