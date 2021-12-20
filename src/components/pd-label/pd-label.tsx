import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'pd-label',
    styleUrl: 'pd-label.scss',
    shadow: true,
})
export class PdLabel {
    /**
     * Switch between background and dot color mode
     */
    @Prop() hasDot = false;

    /**
     * Background or dot color depending on hasDot
     */
    @Prop() color = '#12B886';

    public render() {
        return (
            <Host>
                <span class="pd-label" style={!this.hasDot ? { 'background-color': this.color } : {}}>
                    {this.renderDot()}
                    <slot></slot>
                </span>
            </Host>
        );
    }

    public renderDot() {
        if (!this.hasDot) return;
        return <div class="pd-label-dot" style={{ 'background-color': this.color }}></div>;
    }
}
