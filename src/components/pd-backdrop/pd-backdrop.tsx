import { Component, ComponentInterface, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';
import { now } from '../../utils/helpers';

@Component({
    tag: 'pd-backdrop',
    styleUrl: 'pd-backdrop.scss',
    shadow: true,
})
export class Backdrop implements ComponentInterface {
    private lastClick = -10000;

    /**
     * Invisible backdrop when set to false
     */
    @Prop() visible = true;

    @Event({
        eventName: 'pd-tap',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    pdTap: EventEmitter<void>;

    @Listen('touchstart', { passive: false, capture: true })
    onTouchStart(ev: TouchEvent) {
        this.lastClick = now(ev);
        this.tap(ev);
    }

    @Listen('click', { passive: false, capture: true })
    click(ev: TouchEvent) {
        if (this.lastClick < now(ev) - 2500) {
            this.tap(ev);
        }
    }

    private tap(ev: Event) {
        ev.preventDefault();
        ev.stopPropagation();
        this.pdTap.emit();
    }

    public render() {
        return (
            <Host
                tabindex="-1"
                class={{
                    'pd-backdrop-visible': this.visible,
                }}
            ></Host>
        );
    }
}
