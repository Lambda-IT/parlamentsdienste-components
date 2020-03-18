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
    @Prop() type: 'button'|'text'|'submit' = 'button';

    /**
     * Set href to create a link button
     */
    @Prop() href: string;

    /**
     * Sets target for link button e.g. '_blank'
     */
    @Prop() target: string;

    render() {
        const { href, target, type, disabled } = this;
        const TagType = href ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? { type } : { href, target };

        return (
            <TagType {...typeAttrs} disabled={disabled}>
                <slot name="icon"></slot>
                <slot></slot>
            </TagType>
        );
    }
}
