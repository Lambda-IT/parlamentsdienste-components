// import notes from './readme.md';

export default {
    title: 'Interactions/Tabs',
    parameters: {
        actions: {
            handles: ['pd-change'],
        },
        // notes,
    },
    argTypes: {
        tabs: { control: { type: 'array' } },
        light: { control: { type: 'boolean' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Tabs = args => {
    const tabs = document.createElement('pd-tabs');
    tabs.classList.add('m-3');
    tabs.tabs = args.tabs;
    tabs.light = args.light;

    return tabs;
};

Tabs.args = {
    tabs: [
        { id: 0, text: 'Tab one' },
        { id: 1, text: 'Tab two' },
        { id: 2, text: 'Tab three', checked: true },
        { id: 3, text: 'Tab four' },
    ],
    light: false,
};
