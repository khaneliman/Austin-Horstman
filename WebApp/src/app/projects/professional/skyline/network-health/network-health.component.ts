import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroHeart,
  heroStar,
  heroUser,
  heroClipboardDocumentList,
  heroUserGroup,
  heroCog6Tooth,
  heroIdentification,
  heroShieldCheck,
  heroCodeBracket,
  heroBuildingOffice2,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../../../../shared/components/project-nav-header/project-nav-header.component';

@Component({
  selector: 'app-network-health',
  templateUrl: './network-health.component.html',
  styleUrls: ['./network-health.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroHeart,
      heroStar,
      heroUser,
      heroClipboardDocumentList,
      heroUserGroup,
      heroCog6Tooth,
      heroIdentification,
      heroShieldCheck,
      heroCodeBracket,
      heroBuildingOffice2,
    }),
  ],
})
export class NetworkHealthComponent {}
