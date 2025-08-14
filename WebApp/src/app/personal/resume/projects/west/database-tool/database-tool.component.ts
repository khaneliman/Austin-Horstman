import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroCircleStack,
  heroCheckCircle,
  heroListBullet,
  heroCog6Tooth,
  heroChevronRight,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-database-tool',
  templateUrl: './database-tool.component.html',
  styleUrls: ['./database-tool.component.scss'],
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowLeft,
      heroCircleStack,
      heroCheckCircle,
      heroListBullet,
      heroCog6Tooth,
      heroChevronRight,
    }),
  ],
})
export class DatabaseToolComponent {}
