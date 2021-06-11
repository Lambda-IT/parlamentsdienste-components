import { Component, Host, h, Prop } from '@stencil/core';
import { PdStatus } from '../../interface';

@Component({
    tag: 'pd-list-item',
    styleUrl: 'pd-list-item.scss',
    shadow: true,
    assetsDirs: ['assets-list-item'],
})
export class PdListItem {
    /**
     * Status icon for list item
     */
    @Prop() status: PdStatus;

    public render() {
        return (
            <Host>
                {this.renderStatus()}
                <div class="pd-list-item-content">
                    <slot></slot>
                </div>
            </Host>
        );
    }

    private renderStatus = () => {
        if (!this.status) return;
        return (
            <div class="pd-list-item-status">
                <div class={`pd-list-item-status-background pd-list-item-status-${this.status}`}>
                    {this.renderIcon()}
                </div>
            </div>
        );
    };

    private renderIcon() {
        switch (this.status) {
            case 'success':
                return <pd-icon name="status_green" size={3.6}></pd-icon>;
            case 'warning':
                return <pd-icon name="status_orange" size={3.6}></pd-icon>;
            case 'danger':
                return <pd-icon name="status_red" size={3.6}></pd-icon>;
            case 'info':
                return <pd-icon name="status_blue" size={3.6}></pd-icon>;
            case 'unset':
                return <pd-icon name="status_undefined" size={3.6}></pd-icon>;
            default:
                break;
        }
    }
}
