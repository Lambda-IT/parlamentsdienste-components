import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
    PdButton,
    PdCheckbox,
    PdCombobox,
    PdDatepicker,
    PdDropdown,
    PdInput,
    PdRadio,
    PdRadioGroup,
    PdSlider,
    PdTextarea,
} from '@parlamentsdienste/pdcomponents-angular';

// Custom validator function
import { AbstractControl } from '@angular/forms';
function lessThanSeventy(control: AbstractControl) {
    return control.value < 70 ? null : { tooHigh: true };
}

@Component({
    selector: 'app-root',
    templateUrl: './angular-form.component.html',
    styleUrls: ['./angular-form.component.css'],
    imports: [
        CommonModule,
        PdInput,
        FormsModule,
        PdButton,
        PdCheckbox,
        ReactiveFormsModule,
        PdDatepicker,
        PdDropdown,
        PdRadioGroup,
        PdRadio,
        PdCombobox,
        PdTextarea,
        PdSlider,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularFormComponent {
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
        {
            id: '4',
            label: 'Anfrage',
            value: 'a4',
        },
        {
            id: '5',
            label: 'Interpellation',
            value: 'a5',
        },
        {
            id: '6',
            label: 'Motion',
            value: 'a6',
        },
    ];

    selectedItem = this.items[0];

    testForm = new FormGroup({
        input: new FormControl('Some text...', [Validators.minLength(3)]),
        dropdown: new FormControl(this.items[5]),
        comboboxSelectable: new FormControl(this.items[2]),
        comboboxMultiselect: new FormControl(this.items.slice(0, 2)),
        date: new FormControl('2025-07-23'),
        checkbox: new FormControl(true),
        radio: new FormControl('2'),
        slider: new FormControl(50, lessThanSeventy),
        textarea: new FormControl('start Text textarea', Validators.maxLength(20)),
    });

    constructor() {
        console.log('AngularFormComponent constructor');

        this.testForm.valueChanges.subscribe(value => {
            console.log('Form value changed:', value);
        });
        // setTimeout(() => {
        //     this.testForm.patchValue({
        //         dropdown: this.items[1],
        //         comboboxMultiselect: this.items.slice(2, 4),
        //         textarea: 'new text',
        //         input: 'new input value',
        //         slider: 60,
        //     });
        // }, 2000);
    }

    buttonClicked() {
        console.log('Button clicked');
        this.testForm.get('input')?.disable();
    }
}
