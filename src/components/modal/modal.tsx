import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-modal',
  styleUrl: 'modal.css',
  shadow: true
})
export class Modal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
