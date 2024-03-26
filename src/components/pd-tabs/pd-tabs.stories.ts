import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    tabs: [
        { id: 0, text: 'Tab one' },
        { id: 1, text: 'Tab two' },
        { id: 2, text: 'Tab three', checked: true },
        { id: 3, text: 'Tab four' },
    ],
    light: false,
};

type TabArgs = typeof defaultArgs;

const defaultArgTypes = {
    tabs: { control: { type: 'array' } },
};

const meta: Meta<TabArgs> = {
    title: 'Interactions/Tabs',
    parameters: {
        actions: {
            handles: ['pd-change'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////////

const tabs = args => {
    const tabs = document.createElement('pd-tabs');
    tabs.classList.add('m-3');
    tabs.tabs = args.tabs;
    tabs.light = args.light;

    return tabs;
};

export const Tabs: StoryObj = {
    render: tabs,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};
