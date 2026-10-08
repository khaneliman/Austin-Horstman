import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'app-personal',
  imports: [CatalogueComponent],
  templateUrl: './personal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent {}
