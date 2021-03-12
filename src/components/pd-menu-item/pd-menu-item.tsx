import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';

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
                    <div class="pd-menu-item-text">{this.text}</div>
                </div>
            </Host>
        );
    }
}
