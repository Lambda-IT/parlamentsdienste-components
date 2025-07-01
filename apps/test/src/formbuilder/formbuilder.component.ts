import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    PdAlert,
    PdButton,
    PdCheckbox,
    PdCombobox,
    PdDatepicker,
    PdDropdownItem,
    PdIcon,
    PdInput,
} from '@parlamentsdienste-components/angular';

@Component({
    selector: 'app-formbuilder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.css'],
    imports: [
        CommonModule,
        PdAlert,
        PdInput,
        FormsModule,
        PdIcon,
        PdButton,
        PdCombobox,
        PdDropdownItem,
        PdCheckbox,
        ReactiveFormsModule,
        PdDatepicker,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormbuilderComponent {
    testForm = new FormGroup({
        name: new FormControl('1234'),
        checkbox: new FormControl(true),
        date: new FormControl('2025-07-23'),
    });

    constructor() {
        this.testForm.valueChanges.subscribe(value => {
            console.log('Form value changed:', value);
        });
    }
}
