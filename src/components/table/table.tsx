import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-table',
  styleUrl: 'table.css',
  shadow: true
})
export class Table {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
