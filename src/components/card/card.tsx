import { Component, Host, h, Prop, Element, EventEmitter, Event, Watch } from '@stencil/core';
import { expand, collapse } from '../../utils/animation';

@Component({
    tag: 'pd-card',
    styleUrl: 'card.scss',
    shadow: true,
})
export class Card {
    @Element() element!: HTMLElement;
    private contentWrapper: HTMLElement;

    /**
     * Expands / collapses the card content
     */
    @Prop() collapsed: boolean = false;

    /**
     * Show/hide collapse button
     */
    @Prop() collapsible: boolean = false;

    /**
     * Emitted when the value has changed.
     */
    @Event() pdCollapsed!: EventEmitter<any>;

    @Watch('collapsed')
    valueChanged(collapsed: boolean) {
        this.pdCollapsed.emit({ collapsed });
        collapsed ? collapse(this.contentWrapper) : expand(this.contentWrapper);
    }

    componentDidLoad() {
        this.contentWrapper = this.element.shadowRoot.querySelector('.pd-card-content-wrapper');
        // start collapsed
        if (this.collapsed) {
            this.contentWrapper.style.height = '0';
        }
    }

    render() {
        return (
            <Host>
                <slot name="header"></slot>
                <div
                    class={`pd-card-content-wrapper ${
                        this.collapsed ? 'pd-card-content-collapsed' : 'pd-card-content-expanded'
                    }`}
                    aria-expanded={this.collapsed ? 'false' : 'true'}
                >
                    <slot></slot>
                    <slot name="footer"></slot>
                </div>
            </Host>
        );
    }
}
