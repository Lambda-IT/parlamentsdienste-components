/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './../generated/angular-component-lib/utils';

import type { Components } from '@parlamentsdienste-components/core';

import { forwardRef, HostListener } from '@angular/core';
                   import { NG_VALUE_ACCESSOR } from '@angular/forms';
                   import { ValueAccessor } from './value-accessor';
             
import { defineCustomElement as definePdAlert } from '@parlamentsdienste-components/core/components/pd-alert.js';
import { defineCustomElement as definePdAnimation } from '@parlamentsdienste-components/core/components/pd-animation.js';
import { defineCustomElement as definePdBackdrop } from '@parlamentsdienste-components/core/components/pd-backdrop.js';
import { defineCustomElement as definePdButton } from '@parlamentsdienste-components/core/components/pd-button.js';
import { defineCustomElement as definePdButtonGroup } from '@parlamentsdienste-components/core/components/pd-button-group.js';
import { defineCustomElement as definePdCheckbox } from '@parlamentsdienste-components/core/components/pd-checkbox.js';
import { defineCustomElement as definePdChip } from '@parlamentsdienste-components/core/components/pd-chip.js';
import { defineCustomElement as definePdCombobox } from '@parlamentsdienste-components/core/components/pd-combobox.js';
import { defineCustomElement as definePdDatepicker } from '@parlamentsdienste-components/core/components/pd-datepicker.js';
import { defineCustomElement as definePdDropdown } from '@parlamentsdienste-components/core/components/pd-dropdown.js';
import { defineCustomElement as definePdDropdownItem } from '@parlamentsdienste-components/core/components/pd-dropdown-item.js';
import { defineCustomElement as definePdIcon } from '@parlamentsdienste-components/core/components/pd-icon.js';
import { defineCustomElement as definePdInput } from '@parlamentsdienste-components/core/components/pd-input.js';
import { defineCustomElement as definePdLabel } from '@parlamentsdienste-components/core/components/pd-label.js';
import { defineCustomElement as definePdList } from '@parlamentsdienste-components/core/components/pd-list.js';
import { defineCustomElement as definePdListItem } from '@parlamentsdienste-components/core/components/pd-list-item.js';
import { defineCustomElement as definePdListItemExpandable } from '@parlamentsdienste-components/core/components/pd-list-item-expandable.js';
import { defineCustomElement as definePdMenu } from '@parlamentsdienste-components/core/components/pd-menu.js';
import { defineCustomElement as definePdMenuItem } from '@parlamentsdienste-components/core/components/pd-menu-item.js';
import { defineCustomElement as definePdModal } from '@parlamentsdienste-components/core/components/pd-modal.js';
import { defineCustomElement as definePdRadio } from '@parlamentsdienste-components/core/components/pd-radio.js';
import { defineCustomElement as definePdRadioGroup } from '@parlamentsdienste-components/core/components/pd-radio-group.js';
import { defineCustomElement as definePdSlider } from '@parlamentsdienste-components/core/components/pd-slider.js';
import { defineCustomElement as definePdTextarea } from '@parlamentsdienste-components/core/components/pd-textarea.js';
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
  defineCustomElementFn: definePdAnimation,
  inputs: ['name']
})
@Component({
  selector: 'pd-animation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name'],
  outputs: [],
  
  standalone: true,
  
})
export class PdAnimation {
  protected nativeEl: HTMLPdAnimationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdAnimation extends Components.PdAnimation {}


@ProxyCmp({
  defineCustomElementFn: definePdBackdrop,
  inputs: ['visible']
})
@Component({
  selector: 'pd-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['visible'],
  outputs: ['pd-tap'],
  
  standalone: true,
  
})
export class PdBackdrop {
  protected nativeEl: HTMLPdBackdropElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-tap']);
  }

  
}


export declare interface PdBackdrop extends Components.PdBackdrop {

  'pd-tap': EventEmitter<CustomEvent<void>>;
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
  defineCustomElementFn: definePdButtonGroup
})
@Component({
  selector: 'pd-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: [],
  
  standalone: true,
  
})
export class PdButtonGroup {
  protected nativeEl: HTMLPdButtonGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdButtonGroup extends Components.PdButtonGroup {}


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
    super();
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
  inputs: ['disableFilter', 'disableMultiselectCounter', 'disabled', 'emptyItem', 'emptyItemData', 'error', 'highlight', 'itemCount', 'items', 'label', 'multiselect', 'placeholder', 'readonly', 'required', 'selectable', 'selected', 'size', 'value', 'verticalAdjust', 'viewOnly'],
  methods: ['setSelectedIndex', 'reset', 'setOpen', 'setFocus']
})
@Component({
  selector: 'pd-combobox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disableFilter', 'disableMultiselectCounter', 'disabled', 'emptyItem', 'emptyItemData', 'error', 'highlight', 'itemCount', 'items', 'label', 'multiselect', 'placeholder', 'readonly', 'required', 'selectable', 'selected', 'size', 'value', 'verticalAdjust', 'viewOnly'],
  outputs: ['pd-input', 'pd-change', 'pd-combobox', 'pd-blur', 'pd-focus'],
  
  standalone: true,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdCombobox), multi: true }],
})
export class PdCombobox extends ValueAccessor{
  protected nativeEl: HTMLPdComboboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super();
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-input', 'pd-change', 'pd-combobox', 'pd-blur', 'pd-focus']);
  }

  @HostListener('pd-change', ['$event'])
        handleInput(event: any): void {
            this.handleChangeEvent(event.detail);
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
  defineCustomElementFn: definePdDatepicker,
  inputs: ['allowInput', 'config', 'date', 'disabled', 'error', 'hideClearIcon', 'icon', 'label', 'placeholder', 'readonly', 'required', 'size', 'verticalAdjust'],
  methods: ['set', 'clear', 'close', 'open', 'toggle', 'activate', 'setDate']
})
@Component({
  selector: 'pd-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowInput', 'config', 'date', 'disabled', 'error', 'hideClearIcon', 'icon', 'label', 'placeholder', 'readonly', 'required', 'size', 'verticalAdjust'],
  outputs: ['pd-change', 'pd-open', 'pd-close', 'pd-month-change', 'pd-year-change', 'pd-ready', 'pd-value-update'],
  
  standalone: true,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdDatepicker), multi: true }],
})
export class PdDatepicker extends ValueAccessor{
  protected nativeEl: HTMLPdDatepickerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super();
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-change', 'pd-open', 'pd-close', 'pd-month-change', 'pd-year-change', 'pd-ready', 'pd-value-update']);
  }

  @HostListener('pd-change', ['$event'])
        handleInput(event: any): void {
            this.handleChangeEvent(event.detail);
        }
}


export declare interface PdDatepicker extends Components.PdDatepicker {

  'pd-change': EventEmitter<CustomEvent<{ selectedDates: Date[]; dateStr: string }>>;

  'pd-open': EventEmitter<CustomEvent<{ selectedDates: Date[]; dateStr: string }>>;

  'pd-close': EventEmitter<CustomEvent<{ selectedDates: Date[]; dateStr: string }>>;

  'pd-month-change': EventEmitter<CustomEvent<{ selectedDates: Date[]; dateStr: string; }>>;

  'pd-year-change': EventEmitter<CustomEvent<{ selectedDates: Date[]; dateStr: string }>>;

  'pd-ready': EventEmitter<CustomEvent<{ selectedDates: Date[]; dateStr: string }>>;

  'pd-value-update': EventEmitter<CustomEvent<{ selectedDates: Date[]; dateStr: string; }>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdDropdown,
  inputs: ['disabled', 'emptyItem', 'emptyItemData', 'error', 'itemCount', 'items', 'label', 'placeholder', 'readonly', 'required', 'selected', 'textWrap', 'verticalAdjust', 'viewOnly'],
  methods: ['setSelectedIndex', 'reset']
})
@Component({
  selector: 'pd-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'emptyItem', 'emptyItemData', 'error', 'itemCount', 'items', 'label', 'placeholder', 'readonly', 'required', 'selected', 'textWrap', 'verticalAdjust', 'viewOnly'],
  outputs: ['pd-change'],
  
  standalone: true,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdDropdown), multi: true }],
})
export class PdDropdown extends ValueAccessor{
  protected nativeEl: HTMLPdDropdownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super();
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-change']);
  }

  @HostListener('pd-change', ['$event'])
        handleInput(event: any): void {
            this.handleChangeEvent(event.detail);
        }
}


import type { DropdownItem as IPdDropdownDropdownItem } from '@parlamentsdienste-components/core';

export declare interface PdDropdown extends Components.PdDropdown {

  'pd-change': EventEmitter<CustomEvent<IPdDropdownDropdownItem>>;
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
    super();
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
  defineCustomElementFn: definePdLabel,
  inputs: ['color', 'hasDot']
})
@Component({
  selector: 'pd-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'hasDot'],
  outputs: [],
  
  standalone: true,
  
})
export class PdLabel {
  protected nativeEl: HTMLPdLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdLabel extends Components.PdLabel {}


@ProxyCmp({
  defineCustomElementFn: definePdList
})
@Component({
  selector: 'pd-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: [],
  
  standalone: true,
  
})
export class PdList {
  protected nativeEl: HTMLPdListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdList extends Components.PdList {}


@ProxyCmp({
  defineCustomElementFn: definePdListItem,
  inputs: ['status']
})
@Component({
  selector: 'pd-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status'],
  outputs: [],
  
  standalone: true,
  
})
export class PdListItem {
  protected nativeEl: HTMLPdListItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdListItem extends Components.PdListItem {}


@ProxyCmp({
  defineCustomElementFn: definePdListItemExpandable,
  inputs: ['checkbox', 'checked', 'collapsed', 'contentClick', 'edit', 'expand', 'expandable', 'menu', 'status']
})
@Component({
  selector: 'pd-list-item-expandable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checkbox', 'checked', 'collapsed', 'contentClick', 'edit', 'expand', 'expandable', 'menu', 'status'],
  outputs: ['pd-edit', 'pd-expand', 'pd-selected', 'pd-collapsed', 'pd-content-click'],
  
  standalone: true,
  
})
export class PdListItemExpandable {
  protected nativeEl: HTMLPdListItemExpandableElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-edit', 'pd-expand', 'pd-selected', 'pd-collapsed', 'pd-content-click']);
  }

  
}


export declare interface PdListItemExpandable extends Components.PdListItemExpandable {
  /**
   * Edit button click event
   */
  'pd-edit': EventEmitter<CustomEvent<void>>;
  /**
   * Expand button click event
   */
  'pd-expand': EventEmitter<CustomEvent<void>>;
  /**
   * Checkbox selected event
   */
  'pd-selected': EventEmitter<CustomEvent<boolean>>;
  /**
   * Inner content collapsed/expanded
   */
  'pd-collapsed': EventEmitter<CustomEvent<boolean>>;
  /**
   * Event on content click (content-click has to be set)
   */
  'pd-content-click': EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdMenu,
  inputs: ['invertColor', 'items', 'label', 'placement', 'size'],
  methods: ['open', 'close']
})
@Component({
  selector: 'pd-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['invertColor', 'items', 'label', 'placement', 'size'],
  outputs: [],
  
  standalone: true,
  
})
export class PdMenu {
  protected nativeEl: HTMLPdMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdMenu extends Components.PdMenu {}


@ProxyCmp({
  defineCustomElementFn: definePdMenuItem,
  inputs: ['disabled', 'text']
})
@Component({
  selector: 'pd-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'text'],
  outputs: [],
  
  standalone: true,
  
})
export class PdMenuItem {
  protected nativeEl: HTMLPdMenuItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
  }

  
}


export declare interface PdMenuItem extends Components.PdMenuItem {}


@ProxyCmp({
  defineCustomElementFn: definePdModal,
  inputs: ['config']
})
@Component({
  selector: 'pd-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['config'],
  outputs: ['pd-closed', 'pd-backdrop', 'pd-escape'],
  
  standalone: true,
  
})
export class PdModal {
  protected nativeEl: HTMLPdModalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-closed', 'pd-backdrop', 'pd-escape']);
  }

  
}


export declare interface PdModal extends Components.PdModal {
  /**
   * Event that will be executed when the is closed
   */
  'pd-closed': EventEmitter<CustomEvent<void>>;
  /**
   * Event that will be executed when the modal backdrop is clicked
   */
  'pd-backdrop': EventEmitter<CustomEvent<void>>;
  /**
   * Event that will be executed when the escape button was clicked
   */
  'pd-escape': EventEmitter<CustomEvent<void>>;
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


@ProxyCmp({
  defineCustomElementFn: definePdRadioGroup,
  inputs: ['disabled', 'error', 'name', 'readonly', 'value']
})
@Component({
  selector: 'pd-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'name', 'readonly', 'value'],
  outputs: ['pd-change'],
  
  standalone: true,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdRadioGroup), multi: true }],
})
export class PdRadioGroup extends ValueAccessor{
  protected nativeEl: HTMLPdRadioGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super();
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-change']);
  }

  @HostListener('pd-change', ['$event'])
        handleInput(event: any): void {
            this.handleChangeEvent(event.detail);
        }
}


export declare interface PdRadioGroup extends Components.PdRadioGroup {

  'pd-change': EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdSlider,
  inputs: ['disabled', 'error', 'max', 'min', 'name', 'readonly', 'step', 'value']
})
@Component({
  selector: 'pd-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'max', 'min', 'name', 'readonly', 'step', 'value'],
  outputs: ['pd-input', 'pd-change'],
  
  standalone: true,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdSlider), multi: true }],
})
export class PdSlider extends ValueAccessor{
  protected nativeEl: HTMLPdSliderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super();
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-input', 'pd-change']);
  }

  @HostListener('pd-change', ['$event'])
        handleInput(event: any): void {
            this.handleChangeEvent(event.detail);
        }
}


import type { InputChangeEventDetail as IPdSliderInputChangeEventDetail } from '@parlamentsdienste-components/core';

export declare interface PdSlider extends Components.PdSlider {
  /**
   * Emitted when the value has changed.
   */
  'pd-input': EventEmitter<CustomEvent<IPdSliderInputChangeEventDetail>>;
  /**
   * Emitted when slider has been released.
   */
  'pd-change': EventEmitter<CustomEvent<IPdSliderInputChangeEventDetail>>;
}


@ProxyCmp({
  defineCustomElementFn: definePdTextarea,
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'cols', 'disabled', 'enterkeyhint', 'error', 'inputmode', 'label', 'maxlength', 'minlength', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'viewOnly', 'wrap'],
  methods: ['setFocus']
})
@Component({
  selector: 'pd-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'cols', 'disabled', 'enterkeyhint', 'error', 'inputmode', 'label', 'maxlength', 'minlength', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'viewOnly', 'wrap'],
  outputs: ['pd-change', 'pd-input', 'pd-blur', 'pd-focus'],
  
  standalone: true,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PdTextarea), multi: true }],
})
export class PdTextarea extends ValueAccessor{
  protected nativeEl: HTMLPdTextareaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super();
    c.detach();
    this.nativeEl = r.nativeElement;
    proxyOutputs(this, this.nativeEl, ['pd-change', 'pd-input', 'pd-blur', 'pd-focus']);
  }

  @HostListener('pd-change', ['$event'])
        handleInput(event: any): void {
            this.handleChangeEvent(event.detail);
        }
}


export declare interface PdTextarea extends Components.PdTextarea {
  /**
   * Emitted when the input value has changed.
   */
  'pd-change': EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when a keyboard input occurred.
   */
  'pd-input': EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the input loses focus.
   */
  'pd-blur': EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  'pd-focus': EventEmitter<CustomEvent<FocusEvent>>;
}


