import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'pd-toast',
    styleUrl: 'pd-toast.scss',
    shadow: true,
})
export class PdToast {
    /**
     * The Toast title
     */
    @Prop() header: string;

    /**
     * Additional toast information (e.g. 11 minutes ago)
     */
    @Prop() info: string;

    /**
     * Changes max-with of the toast
     */
    @Prop() size: 'small' | 'large' = 'large';

    /**
     * When closing the toast using the close icon
     */
    @Event({ eventName: 'pd-on-closed' }) pdOnClosed: EventEmitter<any>;

    render() {
        return (
            <Host
                style={{
                    maxWidth: this.size === 'small' ? '260px' : '550px',
                }}
            >
                <div class="pd-toast-header">
                    <div class="pd-toast-header-left">
                        <span class="pd-toast-title">{this.header}</span>
                    </div>
                    <div class="pd-toast-header-right">
                        {this.renderInfo()}
                        <pd-icon onClick={this.pdOnClosed.emit} class="pd-toast-close" name="close" size={2}></pd-icon>
                    </div>
                </div>
                <div class="pd-toast-body">
                    <slot></slot>
                </div>
            </Host>
        );
    }

    renderInfo() {
        if (!this.info || this.size === 'small') return;
        return <span class="pd-toast-info">{this.info}</span>;
    }
}
