import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-jj-keller',
  templateUrl: './jj-keller.component.html',
  styleUrls: ['./jj-keller.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent],
})
export class JjKellerComponent {}
