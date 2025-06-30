import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-formbuilder',
    imports: [CommonModule],
    templateUrl: './formbuilder.component.html',
    styleUrl: './formbuilder.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormbuilderComponent {}
