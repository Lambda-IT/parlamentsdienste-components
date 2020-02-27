import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-button',
    styleUrl: 'button.scss',
    shadow: true,
})
export class Button {
    /**
     * Sets button to disbaled state
     */
    @Prop() disabled = false;

    /**
     * Sets button type |text|submit|reset|
     */
    @Prop() type: string = 'button';

    /**
     * Set href to create a link button
     */
    @Prop() href: string;

    /**
     * Sets target for link button e.g. '_blank'
     */
    @Prop() target: string;

    render() {
        const TagType = this.href ? 'a' : 'button';

        const attrs = TagType === 'button' ? { type: this.type } : { href: this.href, target: this.target };

        return (
            <TagType {...attrs} disabled={this.disabled}>
                <slot name="icon"></slot>
                <slot></slot>
            </TagType>
        );
    }
}
