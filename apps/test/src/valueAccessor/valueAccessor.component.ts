import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-value-accessor',
    template: `<input type="text" [value]="value" (input)="onInput($event)" [disabled]="isDisabled" />`,
    styles: ``,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ValueAccessorComponent),
            multi: true,
        },
    ],
})
export class ValueAccessorComponent implements ControlValueAccessor {
    value = '';
    isDisabled = false;
    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
        this.onChange(this.value);
        this.onTouched();
    }

    writeValue(value: string | null): void {
        this.value = value ?? '';
    }
    registerOnChange(fn: (value: string) => void): void {
        console.log('registerOnChange called with:', fn);
        this.onChange = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}
