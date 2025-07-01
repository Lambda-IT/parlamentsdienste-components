/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './../generated/angular-component-lib/utils';

import type { Components } from '@parlamentsdienste-components/core';

import { forwardRef, HostListener } from '@angular/core';
                   import { NG_VALUE_ACCESSOR } from '@angular/forms';
                   import { ValueAccessor } from './value-accessor';
             
import { defineCustomElement as definePdAlert } from '@parlamentsdienste-components/core/components/pd-alert.js';
import { defineCustomElement as definePdButton } from '@parlamentsdienste-components/core/components/pd-button.js';
import { defineCustomElement as definePdCheckbox } from '@parlamentsdienste-components/core/components/pd-checkbox.js';
import { defineCustomElement as definePdChip } from '@parlamentsdienste-components/core/components/pd-chip.js';
import { defineCustomElement as definePdCombobox } from '@parlamentsdienste-components/core/components/pd-combobox.js';
import { defineCustomElement as definePdDropdownItem } from '@parlamentsdienste-components/core/components/pd-dropdown-item.js';
import { defineCustomElement as definePdIcon } from '@parlamentsdienste-components/core/components/pd-icon.js';
import { defineCustomElement as definePdInput } from '@parlamentsdienste-components/core/components/pd-input.js';
import { defineCustomElement as definePdRadio } from '@parlamentsdienste-components/core/components/pd-radio.js';
@ProxyCmp({
  defineCustomElementFn: definePdAlert,
  inputs: ['actionHref', 'actionTarget', 'actionText', 'actionTextExpanded', 'closable', 'color', 'expandable', 'expanded', 'hideIcon']
})
@Component({
  selector: 'pd-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionHref', 'actionTarget', 'actionText', 'actionTextExpanded', 'closable', 'color', 'expandable', 'expanded', 'hideIcon'],
  outputs: ['pd-closed', 'pd-action', 'pd-collapsed'],
  
  standalone: true,
  
})
export class PdAlert {
  protected nativeEl: HTMLPdAlertElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-closed', 'pd-action', 'pd-collapsed']);
  }

  
}


export declare interface PdAlert extends Components.PdAlert {
  /**
   * Emitted when close button was pressed.
   */
  'pd-closed': EventEmitter<CustomEvent<MouseEvent>>;
  /**
   * Emitted when action button was pressed.
   */
  'pd-action': EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when inner content is expanded/collapsed.
   */
  'pd-collapsed': EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdButton,
  inputs: ['color', 'disabled', 'fullWidth', 'href', 'iconLocation', 'outline', 'showAsLink', 'size', 'target', 'type']
})
@Component({
  selector: 'pd-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'fullWidth', 'href', 'iconLocation', 'outline', 'showAsLink', 'size', 'target', 'type'],
  outputs: [],
  
  standalone: true,
  
})
export class PdButton {
  protected nativeEl: HTMLPdButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdButton extends Components.PdButton {}


@ProxyCmp({
  defineCustomElementFn: definePdCheckbox,
  inputs: ['checked', 'disabled', 'error', 'isIndeterminate', 'name', 'readonly', 'required', 'text', 'value', 'verticalAdjust']
})
@Component({
  selector: 'pd-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'isIndeterminate', 'name', 'readonly', 'required', 'text', 'value', 'verticalAdjust'],
  outputs: ['pd-checked'],
  
  standalone: true,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdCheckbox), multi: true }],
})
export class PdCheckbox extends ValueAccessor{
  protected nativeEl: HTMLPdCheckboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super(r);
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-checked']);
  }

  @HostListener('pd-checked', ['$event'])
        handleInput(event: any): void {
            this.handleChangeEvent(event.detail);
        }
}


export declare interface PdCheckbox extends Components.PdCheckbox {

  'pd-checked': EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdChip,
  inputs: ['checked', 'disabled', 'readonly', 'type']
})
@Component({
  selector: 'pd-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'readonly', 'type'],
  outputs: ['pd-remove-chip', 'pd-check-chip'],
  
  standalone: true,
  
})
export class PdChip {
  protected nativeEl: HTMLPdChipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-remove-chip', 'pd-check-chip']);
  }

  
}


export declare interface PdChip extends Components.PdChip {
  /**
   * Event for clicking the cross to remove a chip
   */
  'pd-remove-chip': EventEmitter<CustomEvent<any>>;
  /**
   * Event for check chip
   */
  'pd-check-chip': EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdCombobox,
  inputs: ['disableFilter', 'disableMultiselectCounter', 'disabled', 'emptyItem', 'emptyItemData', 'error', 'highlight', 'itemCount', 'items', 'label', 'multiselect', 'placeholder', 'readonly', 'required', 'selectable', 'size', 'value', 'verticalAdjust', 'viewOnly'],
  methods: ['setSelectedIndex', 'reset', 'setOpen', 'setFocus']
})
@Component({
  selector: 'pd-combobox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disableFilter', 'disableMultiselectCounter', 'disabled', 'emptyItem', 'emptyItemData', 'error', 'highlight', 'itemCount', 'items', 'label', 'multiselect', 'placeholder', 'readonly', 'required', 'selectable', 'size', 'value', 'verticalAdjust', 'viewOnly'],
  outputs: ['pd-input', 'pd-change', 'pd-combobox', 'pd-blur', 'pd-focus'],
  
  standalone: true,
  
})
export class PdCombobox {
  protected nativeEl: HTMLPdComboboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-input', 'pd-change', 'pd-combobox', 'pd-blur', 'pd-focus']);
  }

  
}


import type { InputChangeEventDetail as IPdComboboxInputChangeEventDetail } from '@parlamentsdienste-components/core';
import type { ComboboxItem as IPdComboboxComboboxItem } from '@parlamentsdienste-components/core';

export declare interface PdCombobox extends Components.PdCombobox {
  /**
   * Emitted when a keyboard input occurred.
   */
  'pd-input': EventEmitter<CustomEvent<IPdComboboxInputChangeEventDetail>>;
  /**
   * Emitted when the value has changed.
   */
  'pd-change': EventEmitter<CustomEvent<IPdComboboxComboboxItem | IPdComboboxComboboxItem[]>>;
  /**
   * Emitted when a combobox request occurred.
   */
  'pd-combobox': EventEmitter<CustomEvent<IPdComboboxComboboxItem | IPdComboboxComboboxItem[]>>;
  /**
   * Emitted when the input loses focus.
   */
  'pd-blur': EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input has focus.
   */
  'pd-focus': EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdDropdownItem,
  inputs: ['highlight', 'iconName', 'iconSrc', 'multiselect', 'selected', 'value']
})
@Component({
  selector: 'pd-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['highlight', 'iconName', 'iconSrc', 'multiselect', 'selected', 'value'],
  outputs: [],
  
  standalone: true,
  
})
export class PdDropdownItem {
  protected nativeEl: HTMLPdDropdownItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdDropdownItem extends Components.PdDropdownItem {}


@ProxyCmp({
  defineCustomElementFn: definePdIcon,
  inputs: ['flip', 'iconDescription', 'iconTitle', 'lazy', 'name', 'rotate', 'size', 'spin', 'spinReverse', 'src']
})
@Component({
  selector: 'pd-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['flip', 'iconDescription', 'iconTitle', 'lazy', 'name', 'rotate', 'size', 'spin', 'spinReverse', 'src'],
  outputs: [],
  
  standalone: true,
  
})
export class PdIcon {
  protected nativeEl: HTMLPdIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdIcon extends Components.PdIcon {}


@ProxyCmp({
  defineCustomElementFn: definePdInput,
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'disabled', 'error', 'inputmode', 'label', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'step', 'type', 'value', 'verticalAdjust', 'viewOnly'],
  methods: ['setFocus']
})
@Component({
  selector: 'pd-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'disabled', 'error', 'inputmode', 'label', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'step', 'type', 'value', 'verticalAdjust', 'viewOnly'],
  outputs: ['pd-input', 'pd-change', 'pd-blur', 'pd-focus'],
  
  standalone: true,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdInput), multi: true }],
})
export class PdInput extends ValueAccessor{
  protected nativeEl: HTMLPdInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super(r);
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-input', 'pd-change', 'pd-blur', 'pd-focus']);
  }

  @HostListener('pd-change', ['$event'])
        handleInput(event: any): void {
            this.handleChangeEvent(event.detail);
        }
}


import type { InputChangeEventDetail as IPdInputInputChangeEventDetail } from '@parlamentsdienste-components/core';

export declare interface PdInput extends Components.PdInput {
  /**
   * Emitted when a keyboard input occurred.
   */
  'pd-input': EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the value has changed.
   */
  'pd-change': EventEmitter<CustomEvent<IPdInputInputChangeEventDetail>>;
  /**
   * Emitted when the input loses focus.
   */
  'pd-blur': EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input has focus.
   */
  'pd-focus': EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdRadio,
  inputs: ['checked', 'disabled', 'error', 'label', 'name', 'readonly', 'value', 'verticalAdjust']
})
@Component({
  selector: 'pd-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'label', 'name', 'readonly', 'value', 'verticalAdjust'],
  outputs: [],
  
  standalone: true,
  
})
export class PdRadio {
  protected nativeEl: HTMLPdRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdRadio extends Components.PdRadio {}


