import notes from './readme.md';

export default {
    title: 'Interactions/Button',
    parameters: {
        actions: {
            handles: ['click'],
        },
        notes,
    },
};

///////////////////////////////////////////////////////////////////////////

const StatesStory = (args) => `
    <pd-button class="mt-3 ml-3" ${args.disabled ? 'disabled' : ''} size=${args.size}>Primary</pd-button>
    <pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="success">Success</pd-button>
    <pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="danger">Danger</pd-button>
    <pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="warning">Warning</pd-button>
    <pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="info">Info</pd-button>
    <pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="light">Light</pd-button>
    <pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="dark">Dark</pd-button>
`;

export const States = StatesStory.bind({});

States.args = {
    disabled: false,
    size: 'normal',
};

States.argTypes = {
    disabled: { control: { type: 'boolean' } },
    size: { control: { type: 'select', options: ['large', 'normal', 'small'] } },
};

///////////////////////////////////////////////////////////////////////////

const OutlineStory = (args) => `
    <pd-button class="mt-3 ml-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size}>Primary</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${
    args.size
} color="success">Success</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${
    args.size
} color="danger">Danger</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${
    args.size
} color="warning">Warning</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="info">Info</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="light">Light</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="dark">Dark</pd-button>
`;

export const Outline = OutlineStory.bind({});

Outline.args = {
    ...States.args,
};

Outline.argTypes = {
    ...States.argTypes,
};

///////////////////////////////////////////////////////////////////////////

const IconStory = (args) => `
    <div>
        <pd-button class="m-3" icon-location="${args.location}">
            <pd-icon size="2" style="fill: white" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
    </div>
    <div>
        <pd-button class="m-3" icon-location="${args.location}" href="http://www.google.ch" target="_blank">
            <pd-icon size="1.2" style="fill: #0b7285" slot="icon" name="link"></pd-icon>
            external link
        </pd-button>
    </div>
`;

export const Icon = IconStory.bind({});

Icon.args = {
    location: 'left',
};

Icon.argTypes = {
    location: { control: { type: 'select', options: ['left', 'right'] } },
};

///////////////////////////////////////////////////////////////////////////

const LinkStory = (args) => `
    <pd-button class="m-3" href="${args.href}" target="${args.target}">external link</pd-button>
`;

export const Link = LinkStory.bind({});

Link.args = {
    href: 'http://www.google.ch',
    target: '_blank',
};

Link.argTypes = {
    href: { control: { type: 'text' } },
    target: { control: { type: 'select', options: ['', '_blank'] } },
};

///////////////////////////////////////////////////////////////////////////

const GroupStory = (args) => `
    <pd-button-group class="m-3">
        <pd-button ${args.disabled ? 'disabled' : ''} size=${args.size}>Primary</pd-button>
        <pd-button ${args.disabled ? 'disabled' : ''} size=${args.size}>Success</pd-button>
        <pd-button ${args.disabled ? 'disabled' : ''} size=${args.size}>Danger</pd-button>
    </pd-button-group>
`;

export const Group = GroupStory.bind({});

Group.args = {
    ...States.args,
};

Group.argTypes = {
    ...States.argTypes,
};
