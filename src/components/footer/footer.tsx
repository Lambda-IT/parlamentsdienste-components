import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-footer',
  styleUrl: 'footer.css',
  shadow: true
})
export class Footer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
