import { Component, Host, h, Prop, Element, EventEmitter, Event, Watch } from '@stencil/core';
import { expand, collapse } from '../../utils/animation';

@Component({
    tag: 'pd-panel',
    styleUrl: 'pd-panel.scss',
    shadow: true,
})
export class Panel {
    @Element() element!: HTMLElement;
    private contentWrapper: HTMLElement;

    /**
     * Expands / collapses the panel content
     */
    @Prop() collapsed: boolean = false;

    /**
     * Show/hide collapse button
     */
    @Prop() collapsible: boolean = false;

    /**
     * Emitted when the value has changed.
     */
    @Event({ eventName: 'pd-collapsed' }) pdCollapsed!: EventEmitter<any>;

    @Watch('collapsed')
    valueChanged(collapsed: boolean) {
        this.pdCollapsed.emit({ collapsed });
        collapsed ? collapse(this.contentWrapper) : expand(this.contentWrapper);
    }

    public componentDidLoad() {
        this.contentWrapper = this.element.shadowRoot.querySelector('.pd-panel-content-wrapper');
        // start collapsed
        if (this.collapsed) {
            this.contentWrapper.style.height = '0';
        }
    }

    public render() {
        return (
            <Host>
                <slot name="header"></slot>
                <div
                    class={`pd-panel-content-wrapper ${
                        this.collapsed ? 'pd-panel-content-collapsed' : 'pd-panel-content-expanded'
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
