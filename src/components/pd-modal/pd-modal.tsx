import { Component, Host, h, Method, Element, Listen, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import '@a11y/focus-trap';

@Component({
    tag: 'pd-modal',
    styleUrl: 'pd-modal.scss',
    shadow: true,
})
export class Modal {
    // Reference to the user's provided modal content
    // private userComponent?: HTMLElement;

    @Element() element!: HTMLElement;

    @Prop() config: {
        // component: string; // element name to add as content
        title: string;
        minWidth: string;
        maxWidth: string;
        minHeight: string;
        maxHeight: string;
        backdropVisible: boolean; // default false
        zIndex: string; // default 1000
    };

    @Prop() data: any;

    @Prop() open: boolean = false;

    @Method()
    async openModal() {
        this.element.style.display = 'flex';
        // const modalContent = this.element.shadowRoot.querySelector(`.pd-modal-content`);
        const wrapper = this.element.shadowRoot.querySelector(`.pd-modal-wrapper`) as HTMLElement;
        // this.userComponent = modalContent.ownerDocument.createElement(this.config?.component);
        // modalContent.appendChild(this.userComponent);
        document.body.classList.add('no-scroll');
        wrapper.focus();
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
