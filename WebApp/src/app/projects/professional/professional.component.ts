import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'app-professional',
  imports: [CatalogueComponent],
  templateUrl: './professional.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalProjectsComponent {}
