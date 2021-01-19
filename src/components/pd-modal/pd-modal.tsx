import { Component, Host, h, Element, Listen, Prop, EventEmitter, Event } from '@stencil/core';
import '@a11y/focus-trap';
import { PdModalConfig } from '../../interface';

@Component({
    tag: 'pd-modal',
    styleUrl: 'pd-modal.scss',
    shadow: true,
})
export class Modal {
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
    async backdropClick() {
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
        this.config.close();
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
                    <div
                        tabindex="0"
                        role="dialog"
                        class="pd-modal-wrapper"
                        style={{
                            minWidth: this.config?.minWidth ?? null,
                            maxWidth: this.config?.maxWidth ?? null,
                            minHeight: this.config?.minHeight ?? null,
                            maxHeight: this.config?.maxHeight ?? null,
                        }}
                    >
                        <div class="pd-modal-header">
                            <span class="pd-modal-title">{this.config?.title}</span>
                            <button class="pd-modal-close" onClick={() => this.closeModal()}>
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
