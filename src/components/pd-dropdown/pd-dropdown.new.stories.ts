// import notes from './readme.md';
import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    items: [
        { id: '1', label: 'Mitteilungen und Verschiedenes', value: 'a1' },
        { id: '2', label: 'Pa.Iv. Semadeni. Fakultatives', value: 'a2' },
        { id: '3', label: 'Referendum für die Unterstützung Olympischer Spiele durch den Bund', value: 'a3' },
        { id: '4', label: 'Gesamtkonzeption, Präsentation und Diskussion', value: 'a4' },
        { id: '5', label: 'Controlling, Präsentation, Diskussion und Beschluss', value: 'a5' },
        { id: '6', label: 'Mitteilungen', value: 'a6', selected: true },
        { id: '7', label: 'Aktuelles aus dem VBS, Information und Diskussion', value: 'a7' },
        { id: '8', label: 'NKF. Evaluationsverfahren, Information und Diskussion', value: 'a8' },
        { id: '9', label: 'Politisches Controlling, Präsentation, Diskussion und Beschluss', value: 'a9' },
    ],
    disabled: false,
    label: 'Dropdown label text',
    required: false,
    readonly: false,
    viewonly: false,
    error: false,
};

type DropdownArgs = typeof defaultArgs;

const meta: Meta<DropdownArgs> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Forms + Inputs/DropdownNEW',
    // component: 'pd-dropdown',
    parameters: {
        actions: {
            handles: ['pd-change'],
        },
    },
    decorators: [withActions],
};
export default meta;

type Story = StoryObj<DropdownArgs>;

const dropdown = (args: DropdownArgs) => {
    const pdDropdown = document.createElement('pd-dropdown');
    pdDropdown.items = args.items;
    pdDropdown.disabled = args.disabled;
    pdDropdown.required = args.required;
    pdDropdown.readonly = args.readonly;
    pdDropdown.viewOnly = args.viewonly;
    pdDropdown.error = args.error;
    pdDropdown.label = args.label;
    pdDropdown.classList.add('m-3');

    return pdDropdown;
};

export const Dropdown: Story = {
    render: dropdown,
    args: defaultArgs,
};
