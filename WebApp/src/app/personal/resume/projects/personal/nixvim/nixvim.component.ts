import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroGlobeAlt,
  heroDocument,
  heroUser,
  heroCalendar,
  heroStar,
  heroUsers,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-nixvim',
  templateUrl: './nixvim.component.html',
  styleUrls: ['./nixvim.component.scss'],
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowTopRightOnSquare,
      heroCodeBracket,
      heroCog6Tooth,
      heroCommandLine,
      heroGlobeAlt,
      heroDocument,
      heroUser,
      heroCalendar,
      heroStar,
      heroUsers,
      heroWrenchScrewdriver,
    }),
  ],
})
export class NixvimComponent {}
