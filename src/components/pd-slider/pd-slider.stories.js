import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Slider',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change'],
        },
        notes,
    },
};

///////////////////////////////////////////////////////////////////////////

export const Slider = () => `
    <pd-slider class="m-3"></pd-slider>
`;
