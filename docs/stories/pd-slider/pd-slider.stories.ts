import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

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

const defaultArgTypes: ArgTypes = {
    value: { control: { type: 'number' } },
};

const meta: Meta<SliderArgs> = {
    title: 'Forms + Inputs/Slider',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const events = ['pd-change'];
addEventlisteners('pd-slider', events);

const slider = (args: SliderArgs) => {
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

export const Slider: StoryObj<SliderArgs> = {
    render: slider,
};
