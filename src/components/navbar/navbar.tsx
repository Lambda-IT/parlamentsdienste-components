import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-navbar',
  styleUrl: 'navbar.css',
  shadow: true
})
export class Navbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
