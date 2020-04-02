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

    @Prop() value: string = 'Placeholder';

    @State() open: boolean = false;

    @Listen('click', { target: 'body' })
    handleClick(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.open = false;
        }
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'ArrowDown') {
            this.open = true;
        }
    }

    private selectItem = (ev: Event) => {
        const selectedItem = ev.target && (ev.target as HTMLElement).closest('pd-dropdown-item');
        this.value = selectedItem.value;
        this.open = false;
    };

    render() {
        return (
            <Host>
                <label class="dropdown">{this.label ? <div class="label-text">{this.label}</div> : ''}</label>
                <pd-button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={`${this.open}`}
                    onClick={() => (this.open = !this.open)}
                >
                    {this.value}
                </pd-button>
                {this.renderDropDown()}
                {this.helperText ? <span class="helper-text">{this.helperText}</span> : ''}
            </Host>
        );
    }

    private renderDropDown() {
        if (!this.open) return;

        return (
            <div class={`dropdown-menu`} onClick={this.selectItem}>
                <pd-dropdown-item value="Action"></pd-dropdown-item>
                <pd-dropdown-item value="Another action"></pd-dropdown-item>
                <pd-dropdown-item value="Something else here"></pd-dropdown-item>
            </div>
        );
    }
}
