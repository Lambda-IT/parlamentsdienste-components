import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PdButton, PdCheckbox, PdDatepicker, PdDropdown, PdInput } from '@parlamentsdienste-components/angular';

@Component({
    selector: 'app-formbuilder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.css'],
    imports: [CommonModule, PdInput, FormsModule, PdButton, PdCheckbox, ReactiveFormsModule, PdDatepicker, PdDropdown],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormbuilderComponent {
    items = [
        {
            id: '1',
            label: 'Mitteilungen und Verschiedenes',
            value: 'a1',
        },
        {
            id: '2',
            label: 'Pa.Iv. Semadeni. Fakultatives',
            value: 'a2',
        },
        {
            id: '3',
            label: 'Obligatorisches',
            value: 'a3',
        },
    ];

    selectedItem = this.items[0];

    testForm = new FormGroup({
        name: new FormControl('1234', Validators.minLength(3)),
        name2: new FormControl('asdf'),
        checkbox: new FormControl(true),
        dropdown: new FormControl(this.items[1]),
        date: new FormControl('2025-07-23'),
    });

    constructor() {
        console.log('FormbuilderComponent loaded');
        this.testForm.valueChanges.subscribe(value => {
            console.log('Form value changed:', value);
        });
        setTimeout(() => {
            this.testForm.get('dropdown')?.setValue(this.items[0]);
            // this.testForm.get('dropdown')?.setErrors({ customError: true });
        }, 1000);
        setTimeout(() => {
            this.testForm.get('dropdown')?.setValue(this.items[2]);
        }, 2000);
    }

    buttonClicked() {
        console.log('Button clicked');
        this.testForm.get('name')?.disable();
        // this.testForm.get('name2')!.invalid = true;
    }
}
