import { Component, Host, h, Prop, Watch, Event, EventEmitter, Listen } from '@stencil/core';
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
     * Expands / collapses the inner content of the list item
     */
    @Prop() collapsed: boolean = true;

    /** Shows edit button */
    @Prop() checkbox: boolean = false;

    /** Shows edit button */
    @Prop() edit: boolean = false;

    /** Shows expand button with simple event (no expandable inner content) */
    @Prop() expand: boolean = false;

    /** Shows menu button */
    @Prop() menu: boolean = false;

    /** Shows expand (toggle) button for expandable inner content */
    @Prop() expandable: boolean = false;

    /** Sets check state of the checkbox true/false */
    @Prop() checked: boolean = false;

    /** Edit button click event */
    @Event({ eventName: 'pd-edit' }) pdEdit: EventEmitter<void>;

    /** Expand button click event */
    @Event({ eventName: 'pd-expand' }) pdExpand: EventEmitter<void>;

    /** Checkbox selected event */
    @Event({ eventName: 'pd-selected' }) pdSelected: EventEmitter<boolean>;

    /** Inner content collapsed/expanded */
    @Event({ eventName: 'pd-collapsed' }) pdCollapsed: EventEmitter<boolean>;

    @Watch('collapsed')
    valueChanged(collapsed: boolean) {
        collapsed ? collapse(this.contentWrapperElement) : expand(this.contentWrapperElement);
    }

    @Listen('pd-checked')
    checkboxChecked(event: CustomEvent<boolean>) {
        this.pdSelected.emit(event.detail);
    }

    public componentDidLoad() {
        // start collapsed
        if (this.collapsed) {
            this.contentWrapperElement.style.height = '0';
            this.contentWrapperElement.style.overflow = 'hidden';
        }
    }

    private handleExpand() {
        if (this.expandable) this.collapsed = !this.collapsed;
        if (this.expand) this.pdExpand.emit();
        if (this.expandable) this.pdCollapsed.emit(this.collapsed);
    }

    public render() {
        return (
            <Host>
                <div class={{ 'pd-list-item-expandable-checkbox': this.checkbox }}>{this.renderCheckbox()}</div>
                {this.renderStatus()}
                <div class="pd-list-item-expandable-content">
                    <slot></slot>
                </div>
                <div
                    class={{
                        'pd-list-item-expandable-actions': this.edit || this.expand || this.expandable || this.menu,
                    }}
                >
                    <slot name="action-left"></slot>
                    {this.renderEdit()}
                    {this.renderExpand()}
                    {this.renderMenu()}
                    <slot name="action-right"></slot>
                </div>
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
        return <div class="pd-list-item-expandable-status">{this.renderStatusIcon()}</div>;
    };

    private renderExpand = () => {
        if (!this.expandable && !this.expand) return;
        return (
            <button class="pd-list-item-expandable-expand" onClick={() => this.handleExpand()}>
                <pd-icon name="detail" size={2.5}></pd-icon>
            </button>
        );
    };

    private renderEdit() {
        if (!this.edit) return;
        return (
            <button class="pd-list-item-expandable-edit" onClick={() => this.pdEdit.emit()}>
                <pd-icon name="edit" size={2.2}></pd-icon>
            </button>
        );
    }

    private renderMenu() {
        if (!this.menu) return;
        return (
            <pd-menu class="pd-list-item-expandable-menu">
                <slot name="menu"></slot>
            </pd-menu>
        );
    }

    private renderStatusIcon() {
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

    private renderCheckbox() {
        if (!this.checkbox) return;
        return <pd-checkbox checked={this.checked}></pd-checkbox>;
    }
}
