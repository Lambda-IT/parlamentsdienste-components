/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './../generated/angular-component-lib/utils';

import type { Components } from '@parlamentsdienste-components/core';

import { defineCustomElement as definePdAlert } from '@parlamentsdienste-components/core/components/pd-alert.js';
import { defineCustomElement as definePdButton } from '@parlamentsdienste-components/core/components/pd-button.js';
import { defineCustomElement as definePdIcon } from '@parlamentsdienste-components/core/components/pd-icon.js';
import { defineCustomElement as definePdInput } from '@parlamentsdienste-components/core/components/pd-input.js';
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
  standalone: true
})
export class PdAlert {
  protected el: HTMLPdAlertElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pd-closed', 'pd-action', 'pd-collapsed']);
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
  standalone: true
})
export class PdButton {
  protected el: HTMLPdButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PdButton extends Components.PdButton {}


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
  standalone: true
})
export class PdIcon {
  protected el: HTMLPdIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  standalone: true
})
export class PdInput {
  protected el: HTMLPdInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pd-input', 'pd-change', 'pd-blur', 'pd-focus']);
  }
}


import type { InputChangeEventDetail } from '@parlamentsdienste-components/core';

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


