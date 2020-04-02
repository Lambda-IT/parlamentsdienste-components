import { Component, Host, h, State, Listen, Element, Prop } from '@stencil/core';

@Component({
    tag: 'pd-dropdown',
    styleUrl: 'dropdown.scss',
    shadow: true,
})
export class Dropdown {
    @Element() element;

    @Prop() label: string = '';

    @Prop() helperText: string = '';

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
                <label class="dropdown">{this.label ? <div class="label-text">{this.label}</div> : ''}</label>
                <pd-button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={`${this.show}`}
                    onClick={() => (this.show = !this.show)}
                >
                    Dropdown
                </pd-button>
                {this.renderDropDown()}
                {this.helperText ? <span class="helper-text">{this.helperText}</span> : ''}
            </Host>
        );
    }

    private renderDropDown() {
        if (!this.show) return;

        return (
            <div class={`dropdown-menu`}>
                <pd-dropdown-item>Action</pd-dropdown-item>
                <pd-dropdown-item class="dropdown-item">Another action</pd-dropdown-item>
                <pd-dropdown-item class="dropdown-item">Something else here</pd-dropdown-item>
            </div>
        );
    }
}
