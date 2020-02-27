import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-tag',
  styleUrl: 'tag.css',
  shadow: true
})
export class Tag {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
