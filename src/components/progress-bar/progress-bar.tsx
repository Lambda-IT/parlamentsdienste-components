import { Component, Host, h, Prop } from '@stencil/core';
import { clamp } from '../../utils/helpers';

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
            <Host>{this.type === 'determinate' ? renderDeterminate(this.value, this.decimals) : renderInDeterminate()}</Host>
        );
    }
}

const renderInDeterminate = () => {
    return <div>indeterminate</div>;
};

const renderDeterminate = (value: number, decimals: number = 2) => {
    const finalValue = clamp(0, value, 1) || 0;
    const percent = parseFloat((finalValue * 100).toFixed(decimals));

    return [
        <div class="progress-background"></div>,
        <div class="progress-bar" style={{ transform: `scaleX(${finalValue})` }}></div>,
        <div class="progress-text">{percent}%</div>,
    ];
};
