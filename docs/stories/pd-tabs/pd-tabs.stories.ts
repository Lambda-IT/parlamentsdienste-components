import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

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

const defaultArgTypes: ArgTypes = {
    tabs: { control: { type: 'select' } },
};

const meta: Meta<TabArgs> = {
    title: 'Interactions/Tabs',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

const events = ['pd-change'];
addEventlisteners('pd-tabs', events);

///////////////////////////////////////////////////////////////////////////////

const tabs = (args: TabArgs) => {
    const tabs = document.createElement('pd-tabs') as HTMLPdTabsElement;
    tabs.classList.add('m-3');
    tabs.tabs = args.tabs;
    tabs.light = args.light;

    return tabs;
};

export const Tabs: StoryObj = {
    render: tabs,
};
