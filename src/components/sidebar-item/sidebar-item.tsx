import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-sidebar-item',
    styleUrl: 'sidebar-item.scss',
    shadow: true,
})
export class SidebarItem {
    @Prop() text: string = '';

    @Prop() enabled: boolean = false;

    render() {
        return (
            <Host>
                <button class={`item ${this.enabled ? 'enabled' : ''}`}>
                    <div class="icon">
                        <slot></slot>
                    </div>
                    <div class="text">{this.text}</div>
                </button>
            </Host>
        );
    }
}
