import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';

/**
 * @slot - Icon
 */
@Component({
    tag: 'pd-menu-item',
    styleUrl: 'pd-menu-item.scss',
    shadow: true,
})
export class MenuItem implements ComponentInterface {
    @Element() element!: HTMLElement;

    /**
     * Text for this item
     */
    @Prop() text: string = '';

    /**
     * Sets item to disbaled state
     */
    @Prop() disabled = false;

    public render() {
        return (
            <Host>
                <button class="pd-menu-item" disabled={this.disabled}>
                    <slot></slot>
                    <div class="pd-menu-item-text" data-test="pd-menu-item-text">
                        {this.text}
                    </div>
                </button>
            </Host>
        );
    }
}
