import { Component } from '@angular/core';
import { KrogerProjectComponent } from '../../../../../shared/components/kroger-project/kroger-project.component';

@Component({
  selector: 'app-kroger',
  templateUrl: './kroger.component.html',
  styleUrls: ['./kroger.component.scss'],
  standalone: true,
  imports: [KrogerProjectComponent],
})
export class KrogerComponent {}
