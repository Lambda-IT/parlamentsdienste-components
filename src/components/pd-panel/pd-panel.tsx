import { Component, Host, h, Prop, Element, EventEmitter, Event, Watch } from '@stencil/core';
import { expand, collapse } from '../../utils/animation';

@Component({
    tag: 'pd-panel',
    styleUrl: 'pd-panel.scss',
    shadow: true,
})
export class Panel {
    @Element() element!: HTMLElement;
    private contentWrapperElement: HTMLElement;

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
        console.log(`DEBUG: Panel collapse changed.`, collapsed, this.contentWrapperElement);
        this.pdCollapsed.emit({ collapsed });
        collapsed ? collapse(this.contentWrapperElement) : expand(this.contentWrapperElement);
    }

    public componentDidLoad() {
        // start collapsed
        console.log(`DEBUG: Panel componentent load.`, this.collapsed, this.contentWrapperElement);
        if (this.collapsed) {
            this.contentWrapperElement.style.height = '0';
            this.contentWrapperElement.style.overflow = 'hidden';
            console.log(`DEBUG: Initially collpsed.`, this.collapsed, this.contentWrapperElement);
        }
    }

    public render() {
        return (
            <Host>
                <slot name="header"></slot>
                <div
                    ref={(el) => (this.contentWrapperElement = el)}
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
