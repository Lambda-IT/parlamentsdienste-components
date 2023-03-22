import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Slider',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change'],
        },
        notes,
    },
    argTypes: {
        value: { control: { type: 'number' } },
        name: { control: { type: 'text' } },
        max: { control: { type: 'number' } },
        min: { control: { type: 'number' } },
        step: { control: { type: 'number' } },
        disabled: { control: { type: 'boolean' } },
        readonly: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Slider = (args) => {
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

Slider.args = {
    name: '',
    max: 100,
    min: 0,
    step: 1,
    value: null,
    disabled: false,
    readonly: false,
    error: false,
};
