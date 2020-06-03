import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-timeline',
    styleUrl: 'pd-timeline.scss',
    shadow: true,
})
export class Timeline {
    @Prop() continueStart: boolean = false;
    @Prop() continueEnd: boolean = false;

    render() {
        return (
            <Host>
                <div
                    class={{
                        'pd-timeline-line': true,
                        'pd-timeline-continue-start': this.continueStart,
                        'pd-timeline-continue-end': this.continueEnd,
                    }}
                ></div>
                <div class="pd-timeline-container">
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
