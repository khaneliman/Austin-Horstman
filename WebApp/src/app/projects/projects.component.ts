import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogueComponent } from './catalogue/catalogue.component';

@Component({
  selector: 'app-projects',
  imports: [CatalogueComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
