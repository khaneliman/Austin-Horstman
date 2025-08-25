import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  standalone: true,
  imports: [RouterModule, NgClass, NgIconComponent],
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingCardComponent {
  icon = input<string>();
  status = input<string>();
  title = input<string>();
  description = input<string>();
  superText = input<string>();
  link = input<string>();
  linkText = input<string>();
  tags = input<string[]>();
}
