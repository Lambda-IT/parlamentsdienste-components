import { Component, Host, h, Prop } from '@stencil/core';
import { clamp } from '../../utils/helpers';

@Component({
    tag: 'pd-progress-bar',
    styleUrl: 'pd-progress-bar.scss',
    shadow: true,
})
export class ProgressBar {
    @Prop() color: 'primary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';

    @Prop() value: number = 0.0;

    @Prop() label: boolean = false;

    @Prop() decimals: number = 2;

    @Prop() striped: boolean = false;

    render() {
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
                >
                    {this.label ? `${percent}%` : ''}
                </div>
            </div>
        );
    }
}
