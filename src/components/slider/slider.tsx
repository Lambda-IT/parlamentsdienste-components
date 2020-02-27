import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-slider',
  styleUrl: 'slider.css',
  shadow: true
})
export class Slider {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
