import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroHeart,
  heroHeartPulse,
  heroStar,
  heroUser,
  heroClipboardDocumentList,
  heroUserGroup,
  heroCog6Tooth,
  heroIdentificationBadge,
  heroShieldCheck,
  heroCodeBracket,
  heroBuildingOffice2,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-network-health',
  templateUrl: './network-health.component.html',
  styleUrls: ['./network-health.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroHeart,
      heroHeartPulse,
      heroStar,
      heroUser,
      heroClipboardDocumentList,
      heroUserGroup,
      heroCog6Tooth,
      heroIdentificationBadge,
      heroShieldCheck,
      heroCodeBracket,
      heroBuildingOffice2,
    }),
  ],
})
export class NetworkHealthComponent {}
