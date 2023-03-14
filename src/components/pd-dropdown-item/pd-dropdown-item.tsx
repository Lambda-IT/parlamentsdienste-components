import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';

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
    @Prop() highlight?: string | number;

    /**
     * Find an highlight this text in value
     */
    @Prop() iconName?: string;

    public render() {
        return (
            <Host>
                <div class={{ 'pd-dropdown-item': true, 'pd-dropdown-item-selected': this.selected }}>
                    # {this.iconName} #
                    <span
                        innerHTML={this.strong(this.value, this.highlight?.toString())}
                        data-test="pd-dropdown-item-text"
                    ></span>
                </div>
            </Host>
        );
    }

    private escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    private strong = (value: string, strong: string = undefined) => {
        if (!strong || strong.length === 0) return value;
        const regexp = new RegExp(`((.*?)(${this.escapeRegExp(strong)})(.*?))+?`, 'gi');
        return value.replace(regexp, '$2<strong>$3</strong>$4');
    };
}
