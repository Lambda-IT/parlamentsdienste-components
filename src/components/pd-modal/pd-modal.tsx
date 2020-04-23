import { Component, Host, h, Method, Element, Listen, Prop } from '@stencil/core';

@Component({
    tag: 'pd-modal',
    styleUrl: 'pd-modal.scss',
    shadow: true,
})
export class Modal {
    // Reference to the user's provided modal content
    private userComponent?: HTMLElement;

    @Element() element!: HTMLElement;

    @Prop() component;

    @Method()
    async openModal(): Promise<void> {
        const modalContent = this.element.shadowRoot.querySelector(`.modal-content`);
        this.userComponent = modalContent.ownerDocument.createElement(this.component);
        modalContent.appendChild(this.userComponent);
    }

    @Method()
    async closeModal() {
        const dismissed = await this.dismiss(this);
        return dismissed;
    }

    @Listen('pdOnTap', { passive: false, capture: true })
    async backdropClick() {
        await this.dismiss(this);
    }

    // remove element from body
    private async dismiss(modal): Promise<boolean> {
        modal.element.remove();
        return true;
    }

    render() {
        return (
            <Host>
                <pd-backdrop></pd-backdrop>
                <div role="dialog" class="pd-modal-wrapper">
                    <div class="pd-modal-content"></div>
                    <pd-button onClick={() => this.closeModal()}>Close</pd-button>
                </div>
            </Host>
        );
    }
}
