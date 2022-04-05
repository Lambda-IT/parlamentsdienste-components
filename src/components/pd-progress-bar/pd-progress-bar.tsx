import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import { clamp } from '../../utils/helpers';

@Component({
    tag: 'pd-progress-bar',
    styleUrl: 'pd-progress-bar.scss',
    shadow: true,
})
export class ProgressBar implements ComponentInterface {
    /**
     * status color of progress-bar
     */
    @Prop() color: 'primary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';

    /**
     * current value of progress bar 0.0 to 1.0
     */
    @Prop() value: number = 0.0;

    /**
     * description of progress-bar
     */
    @Prop() label: boolean = false;

    /**
     * decimals of value
     */
    @Prop() decimals: number = 2;

    /**
     * show striped version of progress-bar
     */
    @Prop() striped: boolean = false;

    public render() {
        return <Host>{this.renderDeterminate(this.value, this.decimals)}</Host>;
    }

    private renderDeterminate(value: number, decimals: number = 2) {
        const finalValue = clamp(0, value, 1) || 0;
        const percent = parseFloat((finalValue * 100).toFixed(decimals));

        return (
            <div class="pd-progress-bar-background">
                <div
                    class={{
                        'pd-progress-bar': true,
                        'pd-progress-bar-striped': this.striped,
                        [`pd-progress-bar-${this.color}`]: !!this.color,
                    }}
                    style={{ width: `${percent}%` }}
                    data-test="pd-progress-bar"
                >
                    {this.label ? `${percent}%` : ''}
                </div>
            </div>
        );
    }
}
