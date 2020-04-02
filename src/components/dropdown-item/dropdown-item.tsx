import { Component, ComponentInterface, Host, h, Prop, Element, Listen } from '@stencil/core';

@Component({
    tag: 'pd-dropdown-item',
    styleUrl: 'dropdown-item.scss',
    shadow: true,
})
export class DropdownItem implements ComponentInterface {
    @Element() element!: HTMLElement;

    @Prop() value: string = '';

    @Prop() selected: boolean = false;

    private setSelected() {
        this.selected = true;
    }

    @Listen('selected')
    handleClick(x) {
        console.log('LOG: DropdownItem -> handleClick -> x', x);
    }

    connectedCallback() {
        const dropdown = this.element.closest('pd-dropdown');
        console.log('LOG: DropdownItem -> connectedCallback -> dropdown', dropdown);
    }

    render() {
        return (
            <Host>
                <div class={`dropdown-item ${this.selected ? 'selected' : ''}`} onClick={() => this.setSelected()}>
                    {this.value}
                </div>
            </Host>
        );
    }
}
