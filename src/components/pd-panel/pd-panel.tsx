import {
    Component,
    ComponentDidLoad,
    ComponentInterface,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Prop,
    Watch,
} from '@stencil/core';
import { collapse, expand } from '../../utils/animation';

/**
 * @slot header - panel header content
 * @slot - main content
 * @slot footer - panel footer content
 */
@Component({
    tag: 'pd-panel',
    styleUrl: 'pd-panel.scss',
    shadow: true,
})
export class Panel implements ComponentInterface, ComponentDidLoad {
    @Element() element: HTMLElement;

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
        if (this.collapsible) {
            this.pdCollapsed.emit({ collapsed });
            collapsed ? collapse(this.contentWrapperElement) : expand(this.contentWrapperElement);
        }
    }

    public componentDidLoad() {
        // start collapsed
        if (this.collapsed) {
            this.contentWrapperElement.style.height = '0';
            this.contentWrapperElement.style.overflow = 'hidden';
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
