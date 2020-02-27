import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-column',
  styleUrl: 'column.css',
  shadow: true
})
export class Column {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
