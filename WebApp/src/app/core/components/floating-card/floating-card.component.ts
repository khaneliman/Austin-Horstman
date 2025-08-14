import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, NgIconComponent],
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingCardComponent {
  @Input() icon: string | undefined;
  @Input() status: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() superText: string | undefined;
  @Input() link: string | undefined;
  @Input() linkText: string | undefined;
  @Input() tags: string[] | undefined;
}
