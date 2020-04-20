import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-list-item',
  styleUrl: 'pd-list-item.css',
  shadow: true,
})
export class PdListItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
