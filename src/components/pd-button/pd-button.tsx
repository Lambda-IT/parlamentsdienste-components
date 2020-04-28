import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-button',
    styleUrl: 'pd-button.scss',
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
    @Prop() type: 'button' | 'text' | 'submit' = 'button';

    /**
     * Color schema used for the button
     */
    @Prop() color: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

    /**
     * Button size
     */
    @Prop() size: 'normal' | 'small' | 'large' = 'normal';

    /**
     * Use outline schema
     */
    @Prop() outline: boolean = false;

    /**
     * Set href to create a link button
     */
    @Prop() href: string;

    /**
     * Sets target for link button e.g. '_blank'
     */
    @Prop() target: string = '_blank';

    @Prop() iconLocation: 'left' | 'right' = 'left';

    render() {
        const { href, target, type, disabled } = this;
        const TagType = href ? 'a' : 'button';
        const role = 'button';
        const typeAttrs = TagType === 'button' ? { type, role } : { href, target };

        return (
            <TagType
                {...typeAttrs}
                disabled={disabled}
                class={`${TagType === 'button' ? 'pd-button' : 'pd-link'} pd-button-${this.color} pd-button-${
                    this.size
                } ${this.outline ? 'pd-button-outline' : ''}`}
            >
                {this.renderIcon('left')}
                <slot></slot>
                {this.renderIcon('right')}
            </TagType>
        );
    }

    renderIcon(location: 'left' | 'right') {
        if (location !== this.iconLocation) return;
        return (
            <span class={`pd-button-icon-${location}`}>
                <slot name="icon"></slot>
            </span>
        );
    }
}