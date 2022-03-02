import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

/**
 * @slot - timeline items
 */
@Component({
    tag: 'pd-timeline',
    styleUrl: 'pd-timeline.scss',
    shadow: true,
})
export class Timeline implements ComponentInterface {
    /**
     * Adds rounded top of the date line to indicate that the timeline starts here
     */
    @Prop() start: boolean = false;

    /**
     * Adds rounded bottom of the date line to indicate that the timeline ends here
     */
    @Prop() end: boolean = false;

    public render() {
        return (
            <Host>
                <div
                    class={{
                        'pd-timeline-line': true,
                        'pd-timeline-start': this.start,
                        'pd-timeline-end': this.end,
                    }}
                ></div>
                <div class="pd-timeline-container">
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
