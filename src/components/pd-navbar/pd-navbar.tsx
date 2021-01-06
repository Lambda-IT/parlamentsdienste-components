import { Component, Host, h, Element, State, Prop, Event, EventEmitter } from '@stencil/core';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
    tag: 'pd-navbar',
    styleUrl: 'pd-navbar.scss',
    shadow: true,
})
export class Navbar {
    @Element() element: HTMLElement;
    private ro: ResizeObserver;

    @Prop() mobileBreakpoint: number = 800;

    @State()
    private isMobile: boolean = false;

    @State()
    private init: boolean = false;

    @Event({ eventName: 'pd-menu' }) pdMenu!: EventEmitter<void>;

    constructor() {
        this.ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                this.setMobile(entry.contentRect.width);
            }
        });
        this.ro.observe(this.element);
    }

    disconnectedCallback() {
        this.ro.disconnect();
    }

    private setMobile(size: number) {
        this.init = true;
        this.isMobile = size < this.mobileBreakpoint;
    }

    public render() {
        return (
            <Host role="navigation">
                {this.init ? (!this.isMobile ? this.renderItems() : this.renderItemsMobile()) : ''}
            </Host>
        );
    }

    private renderItems() {
        return (
            <div class="pd-navbar-item">
                <pd-icon class="pd-navbar-icon" name="parlament" size={3}></pd-icon>
                <slot></slot>
            </div>
        );
    }

    private renderItemsMobile() {
        return (
            <div class="pd-navbar-item-mobile">
                <pd-icon class="pd-navbar-icon pd-navbar-logo" name="parlament" size={3}></pd-icon>
                <div class="pd-navbar-right">
                    <slot name="mobile"></slot>
                    <pd-icon
                        class="pd-navbar-icon pd-navbar-menu"
                        name="menu"
                        size={3}
                        onClick={() => this.pdMenu.emit()}
                    ></pd-icon>
                </div>
            </div>
        );
    }
}
