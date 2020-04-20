import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-list',
  styleUrl: 'pd-list.css',
  shadow: true,
})
export class PdList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
