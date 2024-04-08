import { Component } from '@angular/core';
import { FloatingCardComponent } from '../../shared/floating-card/floating-card.component';
import { RouterLink } from '@angular/router';
import { SeparatorComponent } from '../../shared/separator/separator.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    standalone: true,
    imports: [
        CardComponent,
        SeparatorComponent,
        RouterLink,
        FloatingCardComponent,
    ],
})
export class ResumeComponent {}
