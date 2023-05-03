import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { PdStatus } from '../../interface';

/**
 * @slot - ListItemExpandable content
 * @slot action-left - Left of Actions
 * @slot action-right - Right of Actions
 * @slot expandable - Expandable content
 * @slot menu - Slot for list item menu
 */
@Component({
    tag: 'pd-list-item-expandable',
    styleUrl: 'pd-list-item-expandable.scss',
    shadow: true,
})
export class ListItemExpandable implements ComponentInterface {
    @State() contentHover: boolean = false;

    /**
     * Status icon for list item
     */
    @Prop() status: PdStatus;

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
    @Prop({ mutable: true }) checked: boolean = false;

    /** Adds content click event and style to item */
    @Prop() contentClick: boolean = false;

    /** Edit button click event */
    @Event({ eventName: 'pd-edit' }) pdEdit: EventEmitter<void>;

    /** Expand button click event */
    @Event({ eventName: 'pd-expand' }) pdExpand: EventEmitter<void>;

    /** Checkbox selected event */
    @Event({ eventName: 'pd-selected' }) pdSelected: EventEmitter<boolean>;

    /** Inner content collapsed/expanded */
    @Event({ eventName: 'pd-collapsed' }) pdCollapsed: EventEmitter<boolean>;

    /** Event on content click (content-click has to be set) */
    @Event({ eventName: 'pd-content-click' }) pdContentClick: EventEmitter<void>;

    private handleExpand() {
        if (this.expandable) this.collapsed = !this.collapsed;
        if (this.expand) this.pdExpand.emit();
        if (this.expandable) this.pdCollapsed.emit(this.collapsed);
    }

    private checkboxChecked(event: CustomEvent<boolean>) {
        event.stopPropagation();
        this.checked = event.detail;
        this.pdSelected.emit(event.detail);
    }

    public render() {
        return (
            <Host>
                <div
                    class={{
                        'pd-content-hover': this.contentHover,
                        'pd-list-item-expandable-selected': this.checked,
                        'pd-list-item-expandable-header': true,
                    }}
                >
                    <div class={{ 'pd-list-item-expandable-checkbox': this.checkbox }}>{this.renderCheckbox()}</div>
                    {this.renderStatus()}
                    <div
                        class="pd-list-item-expandable-content"
                        onClick={() => (this.contentClick ? this.pdContentClick.emit() : null)}
                        onMouseOver={() => (this.contentClick ? (this.contentHover = true) : null)}
                        onMouseOut={() => (this.contentClick ? (this.contentHover = false) : null)}
                    >
                        <slot></slot>
                    </div>
                    <div
                        class={{
                            'pd-list-item-expandable-actions': this.edit || this.expand || this.expandable || this.menu,
                        }}
                        data-test="pd-list-item-expandable-actions"
                    >
                        <slot name="action-left"></slot>
                        {this.renderEdit()}
                        {this.renderMenu()}
                        {this.renderExpand()}
                        <slot name="action-right"></slot>
                    </div>
                </div>
                <div
                    class={{
                        'pd-list-item-expandable-additional-content-wrapper': true,
                        'pd-list-item-expandable-additional-content-expanded': !this.collapsed && this.expandable,
                        'pd-list-item-expandable-additional-content-collapsed': this.collapsed && this.expandable,
                    }}
                >
                    <div>
                        <div class="pd-list-item-expandable-additional-content">
                            <slot name="expandable"></slot>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    private renderStatus = () => {
        if (!this.status) return <div class="pd-list-item-expandable-status-placeholder"></div>;
        return (
            <div
                class="pd-list-item-expandable-status"
                data-test="pd-list-item-expandable-status"
                onClick={() => (this.contentClick ? this.pdContentClick.emit() : null)}
                onMouseOver={() => (this.contentClick ? (this.contentHover = true) : null)}
                onMouseOut={() => (this.contentClick ? (this.contentHover = false) : null)}
            >
                {this.renderStatusIcon()}
            </div>
        );
    };

    private renderExpand = () => {
        if (!this.expandable && !this.expand) return;
        return (
            <button
                class="pd-list-item-expandable-expand"
                onClick={() => this.handleExpand()}
                data-test="pd-list-item-expandable-expand"
            >
                <pd-icon name="caret" rotate={this.collapsed ? 0 : 180} size={2.2}></pd-icon>
            </button>
        );
    };

    private renderEdit() {
        if (!this.edit) return;
        return (
            <button
                class="pd-list-item-expandable-edit"
                onClick={() => this.pdEdit.emit()}
                data-test="pd-list-item-expandable-edit"
            >
                <pd-icon name="edit" size={2.2}></pd-icon>
            </button>
        );
    }

    private renderMenu() {
        if (!this.menu) return;
        return (
            <pd-menu class="pd-list-item-expandable-menu" data-test="pd-list-item-expandable-menu">
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
        return (
            <pd-checkbox
                onPd-checked={(ev) => this.checkboxChecked(ev)}
                checked={this.checked}
                data-test="pd-list-item-expandable-checkbox"
            ></pd-checkbox>
        );
    }
}
