// import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html-vite';
import { action } from 'storybook/actions';

const defaultArgs = {
    label: 'Label',
    value: 'Text',
    helperText: 'Helper Text',
    placeholder: 'Placehoder',
    disabled: false,
    readonly: false,
    viewonly: false,
    required: false,
    error: false,
};

type InputArgs = typeof defaultArgs;

const meta: Meta = {
    title: 'Forms + Inputs/Input',
    // parameters: {
    //     actions: {
    //         handles: ['pd-input', 'pd-change', 'pd-blur', 'pd-focus'],
    //     },
    // },
    // decorators: [withActions],
    // args: {
    //     // 👇 Create an action that appears when the onClick event is fired
    //     'pd-change': action('pd-change'),
    // },
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const input = args => {
    return `
        <pd-input class="m-3"
        label="${args.label}"
        placeholder="${args.placeholder}"
        helper-text="${args.helperText}"
        value="${args.value}"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        ${args.viewonly ? 'view-only' : ''}
        ${args.required ? 'required' : ''}
        ${args.error ? 'error' : ''}></pd-input>

                <script>
                
        ${(function () {
            const intrestingCustomEventProps = ['bubbles', 'defaultPrevented', 'detail', 'target', 'timeStamp', 'type'];

            document.addEventListener('DOMContentLoaded', () => {
                const el = document.querySelector('pd-input');
                el?.addEventListener('pd-change', e => {
                    console.log('XXXXXXXXXXXXXXX', e.target);
                    const newObj = {};
                    for (const key in e) {
                        if (intrestingCustomEventProps.includes(key)) {
                            newObj[key] = e[key];
                        }
                    }
                    console.log(newObj);
                    action('pd-change')(newObj);
                });
                console.log(el);
            });
        })()}
    </script>
    `;
};

export const Input: StoryObj = {
    render: input,
    args: defaultArgs,
};
