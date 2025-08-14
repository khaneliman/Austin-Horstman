import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-cleartrend',
  templateUrl: './cleartrend.component.html',
  styleUrls: ['./cleartrend.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent],
})
export class CleartrendComponent {}
