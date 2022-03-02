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

    public render() {
        return (
            <Host>
                <div class="pd-menu-item">
                    <slot></slot>
                    <div class="pd-menu-item-text" data-test="pd-menu-item-text">
                        {this.text}
                    </div>
                </div>
            </Host>
        );
    }
}
