import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CompanyInfo,
  CompanyProfileComponent,
  ProjectInfo,
} from '../../../../shared/components/company-profile/company-profile.component';
import { getCompanyById } from '../../../../shared/data/companies';
import { getProjectsForEmployment } from '../../../../shared/data/projects';

@Component({
  selector: 'app-skyline',
  standalone: true,
  templateUrl: './skyline.component.html',
  styleUrls: ['./skyline.component.scss'],
  imports: [CompanyProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkylineComponent {
  company: CompanyInfo = getCompanyById('skyline');
  projects: ProjectInfo[] = getProjectsForEmployment('skyline');
}
