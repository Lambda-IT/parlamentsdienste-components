import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-input',
  styleUrl: 'input.css',
  shadow: true
})
export class Input {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
