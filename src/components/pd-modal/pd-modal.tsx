import { Component, Host, h, Method, Element, Listen, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'pd-modal',
    styleUrl: 'pd-modal.scss',
    shadow: true,
})
export class Modal {
    // Reference to the user's provided modal content
    private userComponent?: HTMLElement;

    @Element() element!: HTMLElement;

    @Prop() config: {
        component: string; // element name to add as content
        title: string;
        minWidth: string;
        maxWidth: string;
        minHeight: string;
        maxHeight: string;
        backdropVisible: boolean; // default false
        zIndex: string; // default 1000
    };

    @Prop() data: any;

    @Method()
    async openModal() {
        const modalContent = this.element.shadowRoot.querySelector(`.pd-modal-content`);
        this.userComponent = modalContent.ownerDocument.createElement(this.config?.component);
        modalContent.appendChild(this.userComponent);
        document.body.classList.add('no-scroll');
    }

    @Event({ eventName: 'pd-modal-when-closed' }) pdModalWhenClosed!: EventEmitter<any>;

    @Method()
    async closeModal(returnData?: any) {
        this.pdModalWhenClosed.emit(returnData);
        this.element.remove();
        document.body.classList.remove('no-scroll');
    }

    @Method()
    whenClosed(): Promise<any> {
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

    render() {
        return (
            <Host
                style={{
                    zIndex: this.config.zIndex ?? null,
                }}
            >
                <pd-backdrop visible={this.config?.backdropVisible ?? false}></pd-backdrop>
                <div
                    role="dialog"
                    class="pd-modal-wrapper"
                    style={{
                        minWidth: this.config.minWidth ?? null,
                        maxWidth: this.config.maxWidth ?? null,
                        minHeight: this.config.minHeight ?? null,
                        maxHeight: this.config.maxHeight ?? null,
                    }}
                >
                    <div class="pd-modal-header">
                        <span class="pd-modal-title">{this.config?.title}</span>
                        <pd-icon
                            class="pd-modal-close"
                            name="cancel"
                            onClick={() => this.closeModal()}
                            size={1.4}
                        ></pd-icon>
                    </div>
                    <div class="pd-modal-content"></div>
                </div>
            </Host>
        );
    }
}
