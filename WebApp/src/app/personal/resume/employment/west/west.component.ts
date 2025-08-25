import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../../shared/data/companies';
import { getProjectsForEmployment } from '../../../../shared/data/projects';

@Component({
  selector: 'app-west',
  standalone: true,
  templateUrl: './west.component.html',
  styleUrls: ['./west.component.scss'],
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WestComponent {
  company: CompanyInfo = getCompanyById('west');
  projects: ProjectInfo[] = getProjectsForEmployment('west');
}
