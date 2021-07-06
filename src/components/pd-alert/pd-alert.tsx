import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'pd-alert',
    styleUrl: 'pd-alert.scss',
    shadow: true,
})
export class PdAlert {
    /**
     * Color schema used for the alert
     */
    @Prop() color: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

    /**
     * Display an option to close the alert
     */
    @Prop() closable: boolean = false;

    /**
     * Show action
     */
    @Prop() action: boolean = false;

    /**
     * Text to show on action
     */
    @Prop() actionText: string;

    /**
     * A link displayed to the right side of the alert
     */
    @Prop() actionHref: string;

    /**
     * A headline displayed above the given text
     */
    @Prop() headline: string;

    /**
     * Hide alert icon
     */
    @Prop() hideIcon: boolean = false;

    /**
     * Target for action href (eg. _blank)
     */
    @Prop() actionTarget: string = '_blank';

    /**
     * Emitted when action closed button was pressed.
     */
    @Event({ eventName: 'pd-closed' }) pdClosed!: EventEmitter<MouseEvent>;

    public render() {
        return (
            <div class={`pd-alert pd-alert-${this.color}`}>
                {this.renderIcon()}
                <div class="pd-alert-text">
                    {this.renderHeadline()}
                    <div>
                        <slot></slot>
                    </div>
                </div>
                <div class="pd-alert-action">
                    {this.renderAction()}
                    {this.renderClose()}
                </div>
            </div>
        );
    }

    private renderAction() {
        const { actionHref, actionText, actionTarget } = this;

        if (!this.action) return;

        const TagType = actionHref ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? { type: 'button' } : { href: actionHref, target: actionTarget };

        return (
            <TagType class="pd-alert-action-text" {...typeAttrs}>
                {actionText}
            </TagType>
        );
    }

    private renderClose() {
        if (!this.closable) return;
        return (
            <button class="pd-alert-close-button" onClick={this.pdClosed.emit}>
                <pd-icon class="pd-alert-action-cancel" name="close" size={2}></pd-icon>
            </button>
        );
    }

    private renderHeadline() {
        if (!this.headline) return;
        return <h1 class="pd-alert-headline">{this.headline}</h1>;
    }

    private renderIcon() {
        if (this.hideIcon) return;

        switch (this.color) {
            case 'danger':
                return <pd-icon class="pd-alert-icon" size={2.5} name="alert_danger"></pd-icon>;
            case 'info':
                return <pd-icon class="pd-alert-icon" size={2.5} name="alert_info"></pd-icon>;
            case 'success':
                return <pd-icon class="pd-alert-icon" size={2.5} name="confirm"></pd-icon>;
            case 'warning':
                return <pd-icon class="pd-alert-icon" size={2.5} name="alert_warning"></pd-icon>;
            default:
                return;
        }
    }
}
