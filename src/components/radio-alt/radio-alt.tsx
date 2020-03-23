import { Component, Host, h, Prop, Watch, State } from '@stencil/core';

interface IOption {
    label: string;
    value: string;
    checked?: boolean;
}

@Component({
    tag: 'pd-radio-alt',
    styleUrl: 'radio-alt.scss',
    shadow: true,
})
export class RadioAlt {
    @State() innerOptions: IOption[];

    @Prop() name: string;

    @Prop() options: string;

    @Watch('options')
    dataDidChangeHandler(options: string) {
        this.innerOptions = JSON.parse(options);
    }

    componentWillLoad() {
        this.dataDidChangeHandler(this.options);
    }

    render() {
        return (
            <Host>
                {this.innerOptions.map(option => (
                    <label>
                        <input type="radio" checked={option.checked} name={this.name} value={option.value} />
                        {option.label}
                    </label>
                ))}
            </Host>
        );
    }
}
