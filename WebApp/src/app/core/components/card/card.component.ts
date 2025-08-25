import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  imgSrc = input<string>();
  imgDark = input<boolean>();
  title = input<string>();
  description = input<string>();
  superText = input<string>();
  link = input<string>();
  linkText = input<string>();
}
