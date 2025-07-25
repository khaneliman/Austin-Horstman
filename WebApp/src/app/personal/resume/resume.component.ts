import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../core/components/card/card.component';
import { SeparatorComponent } from '../../core/components/separator/separator.component';
import { FloatingCardComponent } from '../../core/components/floating-card/floating-card.component';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    imports: [
        CardComponent,
        SeparatorComponent,
        RouterLink,
        FloatingCardComponent,
    ]
})
export class ResumeComponent {}
