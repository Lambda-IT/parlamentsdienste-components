import '@a11y/focus-trap';
import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';
import { PdModalConfig } from '../../interface';

/**
 * @slot - Modal content
 * @slot footer - Modal footer content
 */
@Component({
    tag: 'pd-modal',
    styleUrl: 'pd-modal.scss',
    shadow: true,
})
export class Modal implements ComponentInterface {
    @Element() element!: HTMLElement;

    /**
     * Configuration properties
     */
    @Prop() config: PdModalConfig;

    /**
     * Event that will be executed when the is closed
     */
    @Event({ eventName: 'pd-closed' }) pdClosed!: EventEmitter<void>;

    /**
     * Event that will be executed when the modal backdrop is clicked
     */
    @Event({ eventName: 'pd-backdrop' }) pdBackdropClicked!: EventEmitter<void>;

    /**
     * Event that will be executed when the escape button was clicked
     */
    @Event({ eventName: 'pd-escape' }) pdEscapeClicked!: EventEmitter<void>;

    @Listen('pd-tap', { passive: false, capture: true })
    backdropClick() {
        this.pdBackdropClicked.emit();
        this.closeModal();
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        switch (ev.key) {
            case 'Escape': {
                this.pdEscapeClicked.emit();
                this.closeModal();
                break;
            }
        }
    }

    private closeModal() {
        this.pdClosed.emit();
    }

    public render() {
        return (
            <Host
                style={{
                    zIndex: this.config?.zIndex ?? null,
                }}
            >
                <focus-trap>
                    <pd-backdrop visible={this.config?.backdropVisible ?? false}></pd-backdrop>
                    <div tabindex="0" role="dialog" class="pd-modal-wrapper">
                        <div class="pd-modal-header">
                            <span class="pd-modal-title" data-test="pd-modal-title">
                                {this.config?.title}
                            </span>
                            <button class="pd-modal-close" onClick={() => this.closeModal()} data-test="pd-modal-close">
                                <pd-icon name="close" size={2}></pd-icon>
                            </button>
                        </div>
                        <div class="pd-modal-content">
                            <slot></slot>
                        </div>
                        <div class="pd-modal-footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </focus-trap>
            </Host>
        );
    }
}
