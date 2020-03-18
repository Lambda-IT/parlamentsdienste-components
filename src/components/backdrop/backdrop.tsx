import { Component, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { now } from '../../utils/helpers';

@Component({
    tag: 'pd-backdrop',
    styleUrl: 'backdrop.scss',
    shadow: true,
})
export class Backdrop {
    private lastClick = -10000;

    /**
     * Invisible backdrop when set to false
     */
    @Prop() visible = true;

    @Event() pdOnTap: EventEmitter<void>;

    @Listen('touchstart', { passive: false, capture: true })
    protected onTouchStart(ev: TouchEvent) {
        this.lastClick = now(ev);
        this.tap(ev);
    }

    @Listen('click', { passive: false, capture: true })
    protected click(ev: TouchEvent) {
        if (this.lastClick < now(ev) - 2500) {
            this.tap(ev);
        }
    }

    private tap(ev: Event) {
        ev.preventDefault();
        ev.stopPropagation();
        this.pdOnTap.emit();
    }

    render() {
        return (
            <Host
                tabindex="-1"
                class={{
                    'backdrop-hide': !this.visible,
                }}
            ></Host>
        );
    }
}
