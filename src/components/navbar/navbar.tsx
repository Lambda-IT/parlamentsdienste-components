import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-navbar',
  styleUrl: 'navbar.scss',
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
