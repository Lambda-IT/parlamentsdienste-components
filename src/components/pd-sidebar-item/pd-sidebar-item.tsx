import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-sidebar-item',
    styleUrl: 'pd-sidebar-item.scss',
    shadow: true,
})
export class SidebarItem implements ComponentInterface {
    /**
     * Item text
     */
    @Prop() text: string = '';

    /**
     * show an item as active
     */
    @Prop() active: boolean = false;

    /**
     * Set href to create a link button
     */
    @Prop() href: string;

    /**
     * Path to an svg asset
     */
    @Prop() icon: string;

    /**
     * Name of an icon from the library
     */
    @Prop() iconName: string;

    /**
     * Icon size
     */
    @Prop() size: number = 2;

    /**
     * Sets target for link button e.g. '_blank'
     */
    @Prop() target: string = '_blank';

    public render() {
        const { href, active, text, target } = this;
        const TagType = href ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? {} : { href, target };

        return (
            <TagType {...typeAttrs} class={{ 'pd-sidebar-item': true, 'pd-sidebar-active': active }}>
                <div class="pd-sidebar-icon">{this.renderIcon()}</div>
                <div class="pd-sidebar-text" data-test="pd-sidebar-item-text">
                    {text}
                </div>
            </TagType>
        );
    }

    private renderIcon() {
        if (this.iconName) return <pd-icon name={this.iconName} size={this.size}></pd-icon>;
        return <pd-icon src={this.icon} size={this.size} data-test="pd-sidebar-item-icon"></pd-icon>;
    }
}
