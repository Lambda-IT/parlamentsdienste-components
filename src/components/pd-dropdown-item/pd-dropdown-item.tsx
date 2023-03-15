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
     * Displays an item from the provided gallery
     */
    @Prop() iconName?: string;

    /**
     * Specifies the `src` url of an SVG file to use as icon.
     */
    @Prop() iconSrc?: string;

    public render() {
        return (
            <Host>
                <div class={{ 'pd-dropdown-item': true, 'pd-dropdown-item-selected': this.selected }}>
                    {this.iconName || this.iconSrc ? (
                        <span class="pd-dropdown-item-icon">
                            <pd-icon name={this.iconName ?? null} src={this.iconSrc ?? null} size={2}></pd-icon>
                        </span>
                    ) : (
                        ''
                    )}
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
