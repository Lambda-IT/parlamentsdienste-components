import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { PdStatus } from '../../interface';
import { collapse, expand } from '../../utils/animation';

@Component({
    tag: 'pd-list-item-expandable',
    styleUrl: 'pd-list-item-expandable.scss',
    shadow: true,
})
export class PdListItemExpandable {
    /**
     * Status icon for list item
     */
    @Prop() status: PdStatus;
    private contentWrapperElement: HTMLElement;

    /**
     * Expands / collapses the panel content
     */
    @Prop() collapsed: boolean = false;

    @Watch('collapsed')
    valueChanged(collapsed: boolean) {
        collapsed ? collapse(this.contentWrapperElement) : expand(this.contentWrapperElement);
    }

    public render() {
        return (
            <Host>
                {this.renderStatus()}
                <div class="pd-list-item-expandable-content">
                    <slot></slot>
                </div>
                {this.renderExpand()}
                <div
                    ref={(el) => (this.contentWrapperElement = el)}
                    class="pd-list-item-expandable-additional-content-wrapper"
                >
                    <div class="pd-list-item-expandable-additional-content">
                        <slot name="expandable"></slot>
                    </div>
                </div>
            </Host>
        );
    }

    private renderStatus = () => {
        if (!this.status) return;
        return <div class="pd-list-item-expandable-status">{this.renderIcon()}</div>;
    };

    private renderExpand = () => {
        return (
            <button class="pd-list-item-expandable-expand" onClick={() => (this.collapsed = !this.collapsed)}>
                <pd-icon name="detail" size={2.5}></pd-icon>
            </button>
        );
    };

    private renderIcon() {
        switch (this.status) {
            case 'success':
                return <pd-icon name="status_green" size={2.5}></pd-icon>;
            case 'warning':
                return <pd-icon name="status_orange" size={2.5}></pd-icon>;
            case 'danger':
                return <pd-icon name="status_red" size={2.5}></pd-icon>;
            case 'info':
                return <pd-icon name="status_blue" size={2.5}></pd-icon>;
            case 'unset':
                return <pd-icon name="status_undefined" size={2.5}></pd-icon>;
            default:
                break;
        }
    }
}
