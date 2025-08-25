import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../../shared/data/companies';
import { getProjectsForEmployment } from '../../../../shared/data/projects';

@Component({
  selector: 'app-nri-na',
  standalone: true,
  templateUrl: './nri-na.component.html',
  styleUrls: ['./nri-na.component.scss'],
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NriNaComponent {
  company: CompanyInfo = getCompanyById('nri-na');

  projects: ProjectInfo[] = getProjectsForEmployment('nri-na');
}
