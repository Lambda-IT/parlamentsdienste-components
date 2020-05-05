import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-sidebar-item',
    styleUrl: 'pd-sidebar-item.scss',
    shadow: true,
})
export class SidebarItem {
    @Prop() text: string = '';

    @Prop() enabled: boolean = false;

    /**
     * Set href to create a link button
     */
    @Prop() href: string;

    @Prop() icon: string;

    @Prop() size: string = '2';

    /**
     * Sets target for link button e.g. '_blank'
     */
    @Prop() target: string = '_blank';

    render() {
        const { href, enabled, text, target } = this;
        const TagType = href ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? {} : { href, target };

        return (
            <TagType {...typeAttrs} class={`pd-sidebar-item ${enabled ? 'pd-sidebar-enabled' : ''}`}>
                <div class="pd-sidebar-icon">{this.renderIcon(this.icon,this.size)}</div>
                <div class="pd-sidebar-text">{text}</div>
            </TagType>
        );
    }

    private renderIcon(src,size) {
        return <pd-icon src={src} size={size}></pd-icon>;
    }
}
