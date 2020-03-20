import { Component, Host, h, State, Listen, Element } from '@stencil/core';

@Component({
    tag: 'pd-dropdown',
    styleUrl: 'dropdown.scss',
    shadow: true,
})
export class Dropdown {
    @Element() element;

    @State() show: boolean = false;

    @Listen('click', { target: 'body' })
    handleClick(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.show = false;
        }
    }
    render() {
        return (
            <Host>
                <div class="dropdown">
                    <pd-button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => (this.show = !this.show)}
                    >
                        Dropdown
                    </pd-button>
                    <div class={`dropdown-menu ${this.show ? 'show' : ''}`}>
                        <a class="dropdown-item" href="#">
                            Action
                        </a>
                        <a class="dropdown-item" href="#">
                            Another action
                        </a>
                        <a class="dropdown-item" href="#">
                            Something else here
                        </a>
                    </div>
                </div>
            </Host>
        );
    }
}
