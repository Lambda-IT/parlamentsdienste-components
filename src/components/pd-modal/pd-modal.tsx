import { Component, Host, h, Method, Element, Listen, Prop, EventEmitter, Event, Watch } from '@stencil/core';
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

    @Prop() data: any;

    /**
     * This triggers the modal to visually open / close
     * Alternatively the openModal() method can be called to trigger this
     */
    @Prop() open: boolean = false;

    /**
     * This triggers the modal to visually open
     * Alternatively the open property can be set to 'true' to trigger this
     */
    @Method()
    async openModal() {
        // Just change 'open' to true in case the function was called directly, this will trigger @Watch(open)
        // @Watch(open) will call openModal again because 'open' changes here
        if (!this.open) {
            this.open = true;
            return;
        }
        // The rest will only be executed when the function is call from @Watch(open)
        // This is to prevent the function from running twice because @Watch(open) also triggers it
        this.element.style.display = 'flex';
        const wrapper = this.element.shadowRoot.querySelector(`.pd-modal-wrapper`) as HTMLElement;
        document.body.classList.add('no-scroll');
        wrapper.focus();
    }

    /**
     * Event with returnData that will be executed when the modal is closed
     */
    @Event({ eventName: 'pd-modal-when-closed' }) pdModalWhenClosed!: EventEmitter<any>;

    /**
     * This triggers the modal to visually close
     * Alternatively the open property can be set to 'false' to trigger this
     * returnData: will be added to 'pdModalWhenClosed' Event or 'whenClosed' method
     */
    @Method()
    async closeModal(returnData?: any) {
        if(this.config.close)  { 
            // console.log("Modal -> closeModal -> close EXTERNAL")
            document.body.classList.remove('no-scroll');
            this.config.close();
        } else if (this.open) {
            // console.log("Modal -> closeModal -> close INTERNAL")
            // TODO: This will not work when called from @Watch(!open)
            this.pdModalWhenClosed.emit(returnData);
            this.element.remove();
            document.body.classList.remove('no-scroll');
        }
    }

    /**
     * Returns a promise that will be resolved with modal 'returnData' when the modal is closed
     */
    @Method()
    async whenClosed(): Promise<any> {
        let resolve: (detail) => void;
        const promise = new Promise<any>(r => (resolve = r));
        const el = this.element;
        el.addEventListener('pd-modal-when-closed', function willDismiss(willDismissEvent: CustomEvent) {
            el.removeEventListener('pd-modal-when-closed', willDismiss);
            resolve(willDismissEvent.detail);
        });
        return promise;
    }

    @Listen('pd-on-tap', { passive: false, capture: true })
    async backdropClick() {
        await this.closeModal();
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        switch (ev.key) {
            case 'Escape': {
                this.closeModal();
                break;
            }
        }
    }

    componentDidLoad() {
        this.openChanged(this.open);
    }

    @Watch('open')
    openChanged(isOpen: boolean) {
        if (isOpen) this.openModal();
        else this.closeModal();
    }

    render() {
        return (
            <Host
                style={{
                    display: 'none',
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
                                <pd-icon name="cancel" size={1.4}></pd-icon>
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
