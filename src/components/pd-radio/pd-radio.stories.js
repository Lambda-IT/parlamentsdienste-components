import notes from './readme.md';

export default {
    title: 'Forms + Inputs|Radio',
    parameters: {
        notes,
    },
};

export const radio = () => {
    return `
        <div class="m-3">
            <pd-radio name="radio-test" value="1" label="radio 1"></pd-radio>
            <pd-radio name="radio-test" value="2" label="radio 2"></pd-radio>
            <pd-radio name="radio-test" value="3" label="radio 3"></pd-radio>
        </div>
    `;
};
