import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PdButton, PdCheckbox, PdDatepicker, PdInput } from '@parlamentsdienste-components/angular';

@Component({
    selector: 'app-formbuilder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.css'],
    imports: [CommonModule, PdInput, FormsModule, PdButton, PdCheckbox, ReactiveFormsModule, PdDatepicker],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormbuilderComponent {
    testForm = new FormGroup({
        name: new FormControl('1234', Validators.minLength(3)),
        name2: new FormControl('asdf'),
        checkbox: new FormControl(true),
        date: new FormControl('2025-07-23'),
    });

    constructor() {
        this.testForm.valueChanges.subscribe(value => {
            console.log('Form value changed:', value);
        });
    }

    buttonClicked() {
        console.log('Button clicked');
        console.log(this.testForm.get('name')?.disable());
        // this.testForm.get('name2')!.invalid = true;
    }
}
