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
} from '@parlamentsdienste-components/angular';

// Custom validator function
import { AbstractControl } from '@angular/forms';
function lessThanSeventy(control: AbstractControl) {
    return control.value < 70 ? null : { tooHigh: true };
}

@Component({
    selector: 'app-formbuilder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.css'],
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
        name: new FormControl('1234', Validators.minLength(3)),
        name2: new FormControl('asdf'),
        checkbox: new FormControl(true),
        dropdown: new FormControl(1),
        combobox: new FormControl(this.items.slice(0, 2)),

        comboboxSelectable: new FormControl(this.items[2]),
        date: new FormControl('2025-07-23'),
        radio: new FormControl('2'),
        textarea: new FormControl('start Text textarea', Validators.maxLength(20)),
        slider: new FormControl(50, lessThanSeventy),
    });

    constructor() {
        console.log('FormbuilderComponent loaded');
        this.testForm.valueChanges.subscribe(value => {
            // console.log('Form value changed:', (value.dropdown as unknown as DropdownItem).id);
            console.log('Form value changed:', value);
        });
        // setTimeout(() => {
        //     // this.testForm.get('dropdown')?.setValue(2);
        //     this.testForm.patchValue({
        //         dropdown: 2,
        //         combobox: ['1', '2'],
        //         textarea: 'new text',
        //         name: 'new input',
        //         name2: 'new name2',
        //         slider: 60,
        //     });

        //     // this.testForm.get('slider')?.disable();
        //     // this.testForm.get('textarea')?.disable();
        // }, 2000);
    }

    buttonClicked() {
        console.log('Button clicked');
        this.testForm.get('name')?.disable();
        // this.testForm.get('name2')!.invalid = true;
    }
}
