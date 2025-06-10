import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
    tag: 'my-component-2',
    styleUrl: 'my-component-2.css',
    shadow: true,
})
export class MyComponent2 {
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

    @Event() myOtherOut: EventEmitter<string>;

    private getText(): string {
        return format(this.first, this.middle, this.last);
    }

    outputText() {
        this.myOtherOut.emit('This is text from my-component-2');
    }

    render() {
        return (
            <Host>
                <div>Hello, World! I'm {this.getText()} 🚀🚀🚀🚀🚀🚀🚀🧑‍🚀</div>
                <button onClick={() => this.outputText()}>This is button from my-component-2</button>
            </Host>
        );
    }
}
