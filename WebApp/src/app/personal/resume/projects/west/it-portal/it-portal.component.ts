import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-it-portal',
  templateUrl: './it-portal.component.html',
  styleUrls: ['./it-portal.component.scss'],
  imports: [RouterLink],
})
export class ItPortalComponent {}
