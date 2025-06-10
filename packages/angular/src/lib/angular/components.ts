/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './../generated/angular-component-lib/utils';

import type { Components } from '@parlamentsdienste-components/core';

import { defineCustomElement as defineMyComponent } from '@parlamentsdienste-components/core/components/my-component.js';
import { defineCustomElement as defineMyComponent2 } from '@parlamentsdienste-components/core/components/my-component-2.js';
@ProxyCmp({
  defineCustomElementFn: defineMyComponent,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
  outputs: ['myOut'],
  standalone: true
})
export class MyComponent {
  protected el: HTMLMyComponentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myOut']);
  }
}


export declare interface MyComponent extends Components.MyComponent {

  myOut: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMyComponent2,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
  outputs: ['myOtherOut'],
  standalone: true
})
export class MyComponent2 {
  protected el: HTMLMyComponent2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myOtherOut']);
  }
}


export declare interface MyComponent2 extends Components.MyComponent2 {

  myOtherOut: EventEmitter<CustomEvent<string>>;
}


