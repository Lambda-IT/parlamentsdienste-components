import { Component, Host, h, State, Listen, Element, Prop, getAssetPath } from '@stencil/core';

@Component({
    tag: 'pd-dropdown',
    styleUrl: 'dropdown.scss',
    assetsDirs: ['assets-dropdown'],
    shadow: true,
})
export class Dropdown {
    @Element() element;

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
                <div class="dropdown">
                    <button
                        class="dropdown-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={`${this.open}`}
                        onClick={() => (this.open = !this.open)}
                    >
                        <span class="text">{this.value}</span>
                        <img
                            class="caret"
                            src={getAssetPath(`./assets-dropdown/icon-right_button.svg`)}
                            style={{ transform: `rotate(${this.open ? '270deg' : '90deg'})` }}
                        ></img>
                    </button>
                    {this.renderDropDown()}
                </div>
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
