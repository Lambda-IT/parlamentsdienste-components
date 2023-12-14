import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

/**
 * @slot - toast content
 */
@Component({
    tag: 'pd-toast',
    styleUrl: 'pd-toast.scss',
    shadow: true,
})
export class Toast implements ComponentInterface {
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
    @Event({ eventName: 'pd-closed' }) pdClosed: EventEmitter<any>;

    public render() {
        return (
            <Host
                style={{
                    maxWidth: this.size === 'small' ? '260px' : '550px',
                }}
            >
                <div class="pd-toast-header">
                    <div class="pd-toast-header-left">
                        <span class="pd-toast-title" data-test="pd-toast-title">
                            {this.header}
                        </span>
                    </div>
                    <div class="pd-toast-header-right">
                        {this.renderInfo()}
                        <button class="pd-toast-close-button" onClick={this.pdClosed.emit} data-test="pd-toast-close">
                            <pd-icon class="pd-toast-close" name="close" size={2}></pd-icon>
                        </button>
                    </div>
                </div>
                <div class="pd-toast-body">
                    <slot></slot>
                </div>
            </Host>
        );
    }

    private renderInfo() {
        if (!this.info || this.size === 'small') return;
        return (
            <span class="pd-toast-info" data-test="pd-toast-info">
                {this.info}
            </span>
        );
    }
}
