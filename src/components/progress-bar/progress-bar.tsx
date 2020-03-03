import { Component, Host, h, Prop } from '@stencil/core';
import { clamp, findItemLabel } from '../../utils/helpers';

@Component({
    tag: 'pd-progress-bar',
    styleUrl: 'progress-bar.scss',
    shadow: true,
})
export class ProgressBar {
    @Prop() type: 'determinate' | 'indeterminate' = 'determinate';

    @Prop() value: number = 0.0;

    @Prop() decimals: number = 2;

    render() {
        return (
            <Host>{this.type === 'determinate' ? renderProgress(this.value, this.decimals) : renderDeterminate()}</Host>
        );
    }
}

const renderDeterminate = () => {
    return <div>indeterminate</div>;
};

const renderProgress = (value: number, decimals: number = 2) => {
    const finalValue = clamp(0, value, 1) || 0;

    const percent = parseFloat((finalValue * 100).toFixed(decimals));

    return [
        <div class="progress-background"></div>,
        <div class="progress-bar" style={{ transform: `scaleX(${finalValue})` }}></div>,
        <div class="progress-text">{percent}%</div>,
    ];
};
