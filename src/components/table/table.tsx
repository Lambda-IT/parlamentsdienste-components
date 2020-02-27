import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-table',
  styleUrl: 'table.scss',
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
