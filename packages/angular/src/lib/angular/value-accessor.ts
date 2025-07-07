import { AfterViewInit, Directive, ElementRef, HostListener, inject, Injector, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

const INPUTMAP: Record<string, string> = {
    'pd-input': 'value',
    'pd-checkbox': 'checked',
    'pd-datepicker': 'date',
    'pd-dropdown': 'selected',
    'pd-combobox': 'selected',
    'pd-radio-group': 'value',
    'pd-textarea': 'value',
    'pd-slider': 'value',
};

@Directive({})
export class ValueAccessor implements ControlValueAccessor, AfterViewInit, OnDestroy {
    private onChange: (value: any) => void = () => {
        /**/
    };
    private onTouched: () => void = () => {
        /**/
    };
    protected lastValue: any;
    ngControl!: NgControl;
    private statusChanges?: Subscription;
    protected injector = inject(Injector);
    protected el = inject(ElementRef);

    writeValue(value: any) {
        const component = this.el.nativeElement.tagName.toLowerCase();
        this.el.nativeElement[INPUTMAP[component]] = this.lastValue = value == null ? '' : value;
    }

    handleChangeEvent(value: any) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }

    @HostListener('focusout')
    _handleBlurEvent() {
        this.onTouched();
    }

    registerOnChange(fn: (value: any) => void) {
        this.onChange = fn;
    }
    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.el.nativeElement.disabled = isDisabled;
    }

    onStatusChange() {
        if (!this.ngControl) {
            this.initializeNgControl();
        }
        if (!this.ngControl) {
            return;
        }
        const { dirty, touched, invalid } = this.ngControl;
        this.el.nativeElement.error = invalid;
    }

    initializeNgControl() {
        try {
            this.ngControl = this.injector.get(NgControl);
        } catch {
            return;
        }
    }
    ngAfterViewInit(): void {
        this.initializeNgControl();

        if (!this.ngControl) {
            return;
        }

        // Listen for changes in validity, disabled, or pending states
        if (this.ngControl.statusChanges) {
            this.statusChanges = this.ngControl.statusChanges.subscribe(() => {
                this.onStatusChange();
            });
        }
    }

    ngOnDestroy(): void {
        if (this.statusChanges) {
            this.statusChanges.unsubscribe();
        }
    }
}
