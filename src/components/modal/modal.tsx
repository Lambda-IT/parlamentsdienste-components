import { Component, Host, h, Method, Element, Listen } from '@stencil/core';

@Component({
    tag: 'pd-modal',
    styleUrl: 'modal.scss',
    shadow: true,
})
export class Modal {
    @Element() element!: HTMLElement;

    constructor() {}

    @Method()
    async openModal() {
        console.log('modal opened');
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
    private async dismiss(overlay): Promise<boolean> {
        overlay.element.remove();
        return true;
    }

    render() {
        return (
            <Host>
                <pd-backdrop></pd-backdrop>
                <div role="dialog" class="modal-wrapper">
                    <div class="modal-content">Lorem Ipsum</div>
                    <pd-button onClick={() => this.closeModal()}>Close</pd-button>
                </div>
            </Host>
        );
    }
}
