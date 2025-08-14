import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowTopRightOnSquare,
  heroMapPin,
  heroAcademicCap,
  heroComputerDesktop,
  heroCodeBracket,
  heroRectangleStack,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-foxvalley',
  templateUrl: './foxvalley.component.html',
  styleUrls: ['./foxvalley.component.scss'],
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowTopRightOnSquare,
      heroMapPin,
      heroAcademicCap,
      heroComputerDesktop,
      heroCodeBracket,
      heroRectangleStack,
    }),
  ],
})
export class FoxvalleyComponent {}
