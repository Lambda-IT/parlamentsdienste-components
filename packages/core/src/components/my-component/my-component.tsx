import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() out: EventEmitter<string>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  outputText() {
    this.out.emit('This is text from my-component');
  }

  render() {
    return (
      <Host>
        <div>Hello, World! I'm {this.getText()}</div>
        <button onClick={() => this.outputText()}>
          This is button from my-component
        </button>
      </Host>
    );
  }
}
