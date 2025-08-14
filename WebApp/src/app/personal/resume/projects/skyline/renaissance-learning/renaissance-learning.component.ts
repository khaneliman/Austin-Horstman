import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';

@Component({
  selector: 'app-renaissance-learning',
  templateUrl: './renaissance-learning.component.html',
  styleUrls: ['./renaissance-learning.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent],
})
export class RenaissanceLearningComponent {}
