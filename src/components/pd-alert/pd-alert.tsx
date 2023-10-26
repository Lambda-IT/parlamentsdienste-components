import { Component, ComponentDidLoad, ComponentInterface, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import { collapse, expand } from '../../utils/animation';

/**
 * @slot - alert title
 * @slot expandable - expandable content
 */
@Component({
    tag: 'pd-alert',
    styleUrl: 'pd-alert.scss',
    shadow: true,
})
export class Alert implements ComponentInterface, ComponentDidLoad {
    private contentWrapperElement: HTMLElement;

    /** Color schema used for the alert */
    @Prop() color: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

    /** Display an option to close the alert */
    @Prop() closable: boolean = false;

    /** Text to show on action */
    @Prop() actionText: string;

    /** Text to show on expanded action */
    @Prop() actionTextExpanded: string;

    /** A link displayed to the right side of the alert */
    @Prop() actionHref: string;

    /** Target for action href (eg. _blank) */
    @Prop() actionTarget: string = '_blank';

    /** Hide alert icon */
    @Prop() hideIcon: boolean = false;

    /** Enable expandable content */
    @Prop() expandable: boolean = false;

    /** Expands / collapses the panel content */
    @Prop({ mutable: true }) expanded: boolean = false;

    @Watch('expanded')
    valueChanged(expanded: boolean) {
        expanded ? expand(this.contentWrapperElement) : collapse(this.contentWrapperElement);
    }

    /** Emitted when close button was pressed. */
    @Event({ eventName: 'pd-closed' }) pdClosed!: EventEmitter<MouseEvent>;

    /** Emitted when action button was pressed. */
    @Event({ eventName: 'pd-action' }) pdAction!: EventEmitter<void>;

    /** Emitted when inner content is expanded/collapsed. */
    @Event({ eventName: 'pd-collapsed' }) pdCollapsed!: EventEmitter<boolean>;

    public componentDidLoad() {
        // start collapsed
        if (!this.expanded) {
            this.contentWrapperElement.style.height = '0';
            this.contentWrapperElement.style.overflow = 'hidden';
        }
    }

    private handleAction() {
        if (this.expandable) this.expanded = !this.expanded;
        if (this.expandable) this.pdCollapsed.emit(!this.expanded);
        this.pdAction.emit();
    }

    public render() {
        return (
            <div
                class={{
                    'pd-alert': true,
                    [`pd-alert-${this.color}`]: true,
                }}
            >
                <div class="pd-alert-top-section">
                    {this.renderIcon()}
                    <div class="pd-alert-message-action">
                        <slot></slot>
                        <div>{this.renderAction()}</div>
                    </div>
                    {this.renderClose()}
                </div>
                <div class="pd-alert-expandable-content-wrapper" ref={(el) => (this.contentWrapperElement = el)}>
                    {this.renderExpandable()}
                </div>
            </div>
        );
    }

    private renderExpandable() {
        if (!this.expandable) return;
        return (
            <div class="pd-alert-expandable-content">
                <slot name="expandable"></slot>
            </div>
        );
    }

    private renderAction() {
        const { actionHref, actionText, actionTarget, actionTextExpanded } = this;

        if (!this.actionText) return;

        const TagType = actionHref ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? { type: 'button' } : { href: actionHref, target: actionTarget };

        return (
            <TagType
                class="pd-alert-action-text"
                {...typeAttrs}
                onClick={() => this.handleAction()}
                data-test="pd-alert-action"
            >
                {!this.expanded ? actionText : actionTextExpanded}
            </TagType>
        );
    }

    private renderClose() {
        if (!this.closable) return;
        return (
            <div>
                <button class="pd-alert-close-button" onClick={this.pdClosed.emit} data-test="pd-alert-close">
                    <pd-icon class="pd-alert-action-cancel" name="close" size={2}></pd-icon>
                </button>
            </div>
        );
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
