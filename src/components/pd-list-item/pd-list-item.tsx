import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-list-item',
    styleUrl: 'pd-list-item.scss',
    shadow: true,
    assetsDirs: ['assets-list-item'],
})
export class PdListItem {
    @Prop() status: 'success' | 'danger' | 'warning' | 'unset';
    render() {
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
                return <pd-icon name="status-green" size={2}></pd-icon>;
            case 'warning':
                return <pd-icon name="status-orange" size={2}></pd-icon>;
            case 'danger':
                return <pd-icon name="status-red" size={2}></pd-icon>;
            case 'unset':
                return <pd-icon name="status-undefined" size={2}></pd-icon>;
            default:
                break;
        }
    }
}
