import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-checkbox',
  styleUrl: 'checkbox.css',
  shadow: true
})
export class Checkbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
