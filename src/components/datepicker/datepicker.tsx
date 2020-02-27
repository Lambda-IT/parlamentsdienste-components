import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-datepicker',
  styleUrl: 'datepicker.css',
  shadow: true
})
export class Datepicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
