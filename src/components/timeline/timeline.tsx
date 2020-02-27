import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pd-timeline',
  styleUrl: 'timeline.css',
  shadow: true
})
export class Timeline {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
