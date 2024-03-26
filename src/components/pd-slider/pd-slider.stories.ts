import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    name: '',
    max: 100,
    min: 0,
    step: 1,
    value: null,
    disabled: false,
    readonly: false,
    error: false,
};

type SliderArgs = typeof defaultArgs;

const defaultArgTypes = {
    value: { control: { type: 'number' } },
};

const meta: Meta<SliderArgs> = {
    title: 'Forms + Inputs/Slider',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const slider = args => {
    return `
        <pd-slider class="m-3"
        name="${args.name}"
        max="${args.max}"
        min="${args.min}"
        step="${args.step}"
        value="${args.value}"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        ${args.error ? 'error' : ''}
        >
        </pd-slider>
    `;
};

export const Slider: StoryObj = {
    render: slider,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};
