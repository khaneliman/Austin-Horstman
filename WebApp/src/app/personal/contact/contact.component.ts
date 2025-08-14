import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCog6Tooth,
  heroPencil,
  heroBeaker,
  heroUserPlus,
  heroEnvelope,
  heroPaperAirplane,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      heroCog6Tooth,
      heroPencil,
      heroBeaker,
      heroUserPlus,
      heroEnvelope,
      heroPaperAirplane,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  focus?: boolean;
  focus1?: boolean;
}
