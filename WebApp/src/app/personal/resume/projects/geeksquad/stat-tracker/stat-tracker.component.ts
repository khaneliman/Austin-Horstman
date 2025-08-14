import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChevronLeft,
  heroGlobeAlt,
  heroPresentationChartLine,
  heroStar,
  heroUsers,
  heroArrowUpTray,
  heroChartBar,
  heroCalendarDays,
  heroCog6Tooth,
  heroArrowDownTray,
  heroCodeBracket,
  heroWrench,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-stat-tracker',
  templateUrl: './stat-tracker.component.html',
  styleUrls: ['./stat-tracker.component.scss'],
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroChevronLeft,
      heroGlobeAlt,
      heroPresentationChartLine,
      heroStar,
      heroUsers,
      heroArrowUpTray,
      heroChartBar,
      heroCalendarDays,
      heroCog6Tooth,
      heroArrowDownTray,
      heroCodeBracket,
      heroWrench,
    }),
  ],
})
export class StatTrackerComponent {}
