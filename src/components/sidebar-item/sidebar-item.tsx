import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-sidebar-item',
    styleUrl: 'sidebar-item.scss',
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

    /**
     * Sets target for link button e.g. '_blank'
     */
    @Prop() target: string;

    render() {
        const { href, enabled, text, target } = this;
        const TagType = href ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? {} : { href, target };

        return (
            <TagType {...typeAttrs} class={`pd-sidebar-item ${enabled ? 'pd-sidebar-enabled' : ''}`}>
                <div class="pd-sidebar-icon">{this.renderIcon(this.icon)}</div>
                <div class="pd-sidebar-text">{text}</div>
            </TagType>
        );
    }

    private renderIcon(src) {
        return <pd-icon src={src}></pd-icon>;
    }
}
