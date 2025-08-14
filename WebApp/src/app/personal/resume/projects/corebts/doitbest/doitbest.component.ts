import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-doitbest',
  templateUrl: './doitbest.component.html',
  styleUrls: ['./doitbest.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent],
})
export class DoItBestComponent {}
