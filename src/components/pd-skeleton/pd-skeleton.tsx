import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'pd-skeleton',
    styleUrl: 'pd-skeleton.scss',
    shadow: true,
})
export class PdSkeleton {
    /**
     * Sets the height of the skeleton loader
     */
    @Prop() height = '32px';

    /**
     * Sets the widht of the skeleton loader
     */
    @Prop() width = '100%';

    render() {
        return (
            <Host style={{ height: this.height, width: this.width }}>
                <div class={'pd-skeleton-animation'}></div>
            </Host>
        );
    }
}
