import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'pd-timeline-date',
    styleUrl: 'pd-timeline-date.scss',
    shadow: true,
})
export class PdTimelineDate {
    /**
     * Header text
     */
    @Prop() header: string;

    /**
     * Header link location
     */
    @Prop() href: string;

    /**
     * Header link target
     */
    @Prop() target: string = '_blank';

    /**
     * Timeline date
     */
    @Prop() date: string = '';

    public render() {
        return (
            <Host>
                <div class="pd-timeline-date">
                    <div class="pd-timeline-date-dot"></div>
                    <div class="pd-timeline-date-text" data-test="pd-timeline-date-text">
                        {this.date}
                    </div>
                </div>
                <div class={{ 'pd-timeline-content': true, 'pd-timeline-content-notitle': !this.header }}>
                    {this.renderTitle()}
                    <div class="pd-timeline-content-text">
                        <slot></slot>
                    </div>
                </div>
            </Host>
        );
    }

    private renderTitle() {
        if (!this.header) return;
        return (
            <div class="pd-timeline-content-title">
                {!this.href ? (
                    <span data-test="pd-timeline-title">{this.header}</span>
                ) : (
                    <a href={this.href} target={this.target} data-test="pd-timeline-title">
                        {this.header}
                    </a>
                )}
            </div>
        );
    }
}
