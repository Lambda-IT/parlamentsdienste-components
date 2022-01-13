import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-navbar-item',
    styleUrl: 'pd-navbar-item.scss',
    shadow: true,
})
export class NavbarItem {
    @Prop() text: string = '';

    @Prop() enabled: boolean = false;

    /**
     * Set href to create a link button
     */
    @Prop() href: string;

    /**
     * Sets target for link button e.g. '_blank'
     */
    @Prop() target: string = '_blank';

    public render() {
        const { href, enabled, target, text } = this;
        const TagType = href ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? {} : { href, target };

        return (
            <TagType {...typeAttrs} class={`pd-navbar-item ${enabled ? 'pd-navbar-enabled' : ''}`}>
                <span class="pd-navbar-text" data-test="pd-navbar-text">
                    {text}
                </span>
            </TagType>
        );
    }
}
