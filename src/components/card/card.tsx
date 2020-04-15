import { Component, Host, h, Prop, Element, EventEmitter, Event, Watch, State } from '@stencil/core';

@Component({
    tag: 'pd-card',
    styleUrl: 'card.scss',
    shadow: true,
})
export class Card {
    @Element() element!: HTMLElement;
    private contentWrapper: HTMLElement;
    @State() contentWrapperHeight: string;

    /**
     * Expands / collapses the card content
     */
    @Prop() collapsed: boolean = false;

    /**
     * Emitted when the value has changed.
     */
    @Event() pdCollapsed!: EventEmitter<any>;

    @Watch('collapsed')
    valueChanged(collapsed: boolean) {
        this.pdCollapsed.emit({ collapsed });
        this.contentWrapperHeight = `${this.contentWrapper.scrollHeight}px`;
    }

    componentDidLoad() {
        this.contentWrapper = this.element.shadowRoot.querySelector('.pd-card-content-wrapper');
        this.contentWrapperHeight = `${this.contentWrapper.scrollHeight}px`;
    }

    render() {
        return (
            <Host>
                <slot name="header"></slot>
                <div
                    class={`pd-card-content-wrapper ${
                        this.collapsed ? 'pd-card-content-collapsed' : 'pd-card-content-expanded'
                    }`}
                    style={{ maxHeight: this.contentWrapperHeight }}
                    aria-expanded={this.collapsed ? 'false' : 'true'}
                >
                    <slot></slot>
                    <slot name="footer"></slot>
                </div>
            </Host>
        );
    }
}
