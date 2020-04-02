import { Component, Host, h, Prop, Element, EventEmitter, Event, Watch } from '@stencil/core';

@Component({
    tag: 'pd-card',
    styleUrl: 'card.scss',
    shadow: true,
})
export class Card {
    @Element() element!: HTMLElement;

    @Prop() collapsed: boolean = false;

    /**
     * Emitted when the value has changed.
     */
    @Event() pdCollapsed!: EventEmitter<any>;

    @Watch('collapsed')
    valueChanged(collapsed: boolean) {
        this.pdCollapsed.emit({ collapsed });
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
