import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';

@Component({
    tag: 'pd-dropdown-item',
    styleUrl: 'pd-dropdown-item.scss',
    shadow: true,
})
export class DropdownItem implements ComponentInterface {
    @Element() element!: HTMLElement;

    /**
     * Value for this item
     */
    @Prop() value: string = '';

    /**
     * Sets this item to selected
     */
    @Prop() selected: boolean = false;

    /**
     * Find an highlight this text in value
     */
    @Prop() highlight: string | number;

    render() {
        return (
            <Host>
                <div class={{ 'pd-dropdown-item': true, 'pd-dropdown-item-selected': this.selected }}>
                    {this.strong(this.value, this.highlight?.toString())}
                </div>
            </Host>
        );
    }

    // Todo: removes whitespaces at the end of mark
    private setStrong = text => <strong>{text}</strong>;
    private setSpan = text => <span>{text}</span>;
    private strong = (value: string, strong: string = undefined) => {
        if (!strong || strong.length === 0) return value;
        const split = value.split(strong);
        const span = split.map(n => this.setSpan(n));
        return [].concat(...span.map(n => [n, this.setStrong(strong)])).slice(0, -1);
    };
}
