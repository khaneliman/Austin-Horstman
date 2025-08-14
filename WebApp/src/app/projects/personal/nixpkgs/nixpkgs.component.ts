import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroCodeBracket,
  heroCog6Tooth,
  heroCommandLine,
  heroGlobeAlt,
  heroCubeTransparent,
  heroUser,
  heroCalendar,
  heroStar,
  heroUsers,
  heroWrenchScrewdriver,
  heroServerStack,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-nixpkgs',
  templateUrl: './nixpkgs.component.html',
  styleUrls: ['./nixpkgs.component.scss'],
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowTopRightOnSquare,
      heroCodeBracket,
      heroCog6Tooth,
      heroCommandLine,
      heroGlobeAlt,
      heroCubeTransparent,
      heroUser,
      heroCalendar,
      heroStar,
      heroUsers,
      heroWrenchScrewdriver,
      heroServerStack,
    }),
  ],
})
export class NixpkgsComponent {}
