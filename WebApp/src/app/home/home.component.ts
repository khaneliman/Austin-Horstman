import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCodeBracket,
  heroComputerDesktop,
  heroRocketLaunch,
  heroCog6Tooth,
  heroUser,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroComputerDesktop,
      heroRocketLaunch,
      heroCog6Tooth,
      heroUser,
    }),
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
