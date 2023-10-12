import { Component, ComponentInterface, EventEmitter, Event, h, Element, Host } from '@stencil/core';

/**
 * @slot - Label content
 */
@Component({
    tag: 'pd-overlay',
    styleUrl: 'pd-overlay.scss',
    shadow: true,
})
export class Overlay implements ComponentInterface {
    constructor() {}

    @Element() element: HTMLPdOverlayElement;

    @Event({ eventName: 'pd-overlay-click' }) pdChange!: EventEmitter<void>;

    // @Event({ eventName: 'pd-overlay-did-load' }) onOverlayDidLoad: EventEmitter<void>;

    public componentDidLoad() {
        document.body.appendChild(this.element);
        // this.onOverlayDidLoad.emit();
    }

    public render() {
        return (
            <Host onClick={this.pdChange.emit}>
                <slot></slot>
            </Host>
        );
    }
}
