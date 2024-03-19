import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    disabled: false,
    size: 'normal',
    type: 'button',
    fullWidth: false,
};

type ButtonArgs = typeof defaultArgs;

const defaultArgTypes = {
    size: { options: ['large', 'normal', 'small'], control: { type: 'select' } },
    type: { options: ['button', 'submit', 'reset'], control: { type: 'select' } },
};

const meta: Meta<ButtonArgs> = {
    title: 'Interactions/Button',
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const statesButtons = (args: ButtonArgs) => `
<pd-button class="mt-3 ml-3" ${args.disabled ? 'disabled' : ''} size=${args.size} type="${args.type}" full-width="${
    args.fullWidth
}">Primary</pd-button>
<pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="success" type="${args.type}" full-width="${
    args.fullWidth
}">Success</pd-button>
<pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="danger" type="${args.type}" full-width="${
    args.fullWidth
}">Danger</pd-button>
<pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="warning" type="${args.type}" full-width="${
    args.fullWidth
}">Warning</pd-button>
<pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="info" type="${args.type}" full-width="${
    args.fullWidth
}">Info</pd-button>
<pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="light" type="${args.type}" full-width="${
    args.fullWidth
}">Light</pd-button>
<pd-button class="mt-3" ${args.disabled ? 'disabled' : ''} size=${args.size} color="dark" type="${args.type}" full-width="${
    args.fullWidth
}">Dark</pd-button>
`;

export const States: StoryObj = {
    render: statesButtons,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

///////////////////////////////////////////////////////////////////////////

const outlineButtons = (args: ButtonArgs) => `
    <pd-button class="mt-3 ml-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} type="${args.type}" full-width="${
    args.fullWidth
}">Primary</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="success" type="${args.type}" full-width="${
    args.fullWidth
}">Success</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="danger" type="${args.type}" full-width="${
    args.fullWidth
}">Danger</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="warning" type="${args.type}" full-width="${
    args.fullWidth
}">Warning</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="info" type="${args.type}" full-width="${
    args.fullWidth
}">Info</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="light" type="${args.type}" full-width="${
    args.fullWidth
}">Light</pd-button>
    <pd-button class="mt-3" outline ${args.disabled ? 'disabled' : ''} size=${args.size} color="dark" type="${args.type}" full-width="${
    args.fullWidth
}">Dark</pd-button>
`;

export const Outline: StoryObj = {
    render: outlineButtons,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

///////////////////////////////////////////////////////////////////////////

const iconArgs = {
    location: 'left',
    fullWidth: false,
};

const iconArgTypes = {
    location: { control: { type: 'select' }, options: ['left', 'right', 'center'] },
};

type IconArgs = typeof iconArgs;

const iconButtons = (args: IconArgs) => `
    <div>
        <pd-button class="m-3" icon-location="${args.location}" full-width="${args.fullWidth}">
            <pd-icon size="2" style="fill: white" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
    </div>
    <div>
        <pd-button class="m-3" icon-location="${args.location}" href="http://www.google.ch" target="_blank" full-width="${args.fullWidth}">
            <pd-icon size="1.2" style="fill: #0b7285" slot="icon" name="link"></pd-icon>
            external link
        </pd-button>
    </div>
`;

export const Icon: StoryObj = {
    render: iconButtons,
    args: iconArgs,
    argTypes: iconArgTypes,
};

///////////////////////////////////////////////////////////////////////////

const linkArgs = {
    href: 'http://www.google.ch',
    target: '_blank',
};

const linkArgTypes = {
    target: { control: { type: 'select' }, options: ['', '_blank'] },
};

type LinkArgs = typeof linkArgs;

const linkButton = (args: LinkArgs) => `
    <pd-button class="m-3" href="${args.href}" target="${args.target}">external link</pd-button>
`;

export const Link: StoryObj = {
    render: linkButton,
    args: linkArgs,
    argTypes: linkArgTypes,
};

///////////////////////////////////////////////////////////////////////////

const groupArgs = (({ fullWidth, ...rest }) => rest)(defaultArgs); // remove fullWidth

type GroupArgs = typeof groupArgs;

const groupStory = (args: GroupArgs) => `
    <pd-button-group class="m-3">
        <pd-button ${args.disabled ? 'disabled' : ''} size=${args.size} type="${args.type}">Primary</pd-button>
        <pd-button ${args.disabled ? 'disabled' : ''} size=${args.size} type="${args.type}">Success</pd-button>
        <pd-button ${args.disabled ? 'disabled' : ''} size=${args.size} type="${args.type}">Danger</pd-button>
    </pd-button-group>
`;

export const Group: StoryObj = {
    render: groupStory,
    args: groupArgs,
    argTypes: defaultArgTypes,
};
