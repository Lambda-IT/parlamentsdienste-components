import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostListener,
    NgZone,
} from '@angular/core';

import { ProxyCmp, proxyOutputs } from './../../generated/angular-component-lib/utils';

import type { Components } from '@parlamentsdienste-components/core';

import { defineCustomElement as definePdInput } from '@parlamentsdienste-components/core/components/pd-input.js';

@ProxyCmp({
    defineCustomElementFn: definePdInput,
    inputs: [
        'accept',
        'autocapitalize',
        'autocomplete',
        'autocorrect',
        'autofocus',
        'clearInput',
        'clearOnEdit',
        'disabled',
        'error',
        'inputmode',
        'label',
        'max',
        'maxlength',
        'min',
        'minlength',
        'multiple',
        'name',
        'pattern',
        'placeholder',
        'readonly',
        'required',
        'size',
        'step',
        'type',
        'value',
        'verticalAdjust',
        'viewOnly',
    ],
    methods: ['setFocus'],
})
@Component({
    selector: 'pd-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [
        'accept',
        'autocapitalize',
        'autocomplete',
        'autocorrect',
        'autofocus',
        'clearInput',
        'clearOnEdit',
        'disabled',
        'error',
        'inputmode',
        'label',
        'max',
        'maxlength',
        'min',
        'minlength',
        'multiple',
        'name',
        'pattern',
        'placeholder',
        'readonly',
        'required',
        'size',
        'step',
        'type',
        'value',
        'verticalAdjust',
        'viewOnly',
    ],
    outputs: ['pd-input', 'pd-change', 'pd-blur', 'pd-focus'],
    standalone: true,
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdInput), multi: true }],
})
export class PdInput extends ValueAccessor {
    protected someEl: HTMLPdInputElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        super(r);
        c.detach();
        this.someEl = r.nativeElement;
        proxyOutputs(this, this.someEl, ['pd-input', 'pd-change', 'pd-blur', 'pd-focus']);
    }

    @HostListener('pd-change', ['$event'])
    handleInput(event: any): void {
        this.handleChangeEvent(event.detail.value);
    }
}

import { NG_VALUE_ACCESSOR } from '@angular/forms';
import type { InputChangeEventDetail } from '@parlamentsdienste-components/core';
import { ValueAccessor } from '../value-accessor';

export declare interface PdInput extends Components.PdInput {
    /**
     * Emitted when a keyboard input occurred.
     */
    'pd-input': EventEmitter<CustomEvent<KeyboardEvent>>;
    /**
     * Emitted when the value has changed.
     */
    'pd-change': EventEmitter<CustomEvent<InputChangeEventDetail>>;
    /**
     * Emitted when the input loses focus.
     */
    'pd-blur': EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input has focus.
     */
    'pd-focus': EventEmitter<CustomEvent<void>>;
}
