import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    outline: false,
    disabled: false,
    size: 'normal',
    type: 'button',
    fullWidth: false,
    showAsLink: false,
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
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Primary</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="success" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Success</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="danger" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Danger</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="warning" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Warning</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="info" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Info</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="light" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Light</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="dark" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Dark</pd-button>
`;

export const States: StoryObj = {
    render: statesButtons,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

///////////////////////////////////////////////////////////////////////////

const outlineButtons = (args: ButtonArgs) => `
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Primary</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="success" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Success</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="danger" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Danger</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="warning" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Warning</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="info" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Info</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="light" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Light</pd-button>
<pd-button class="mt-3 ml-3" ${args.outline ? 'outline' : ''} ${args.disabled ? 'disabled' : ''} size=${args.size} color="dark" type="${
    args.type
}" full-width="${args.fullWidth}" ${args.showAsLink ? 'show-as-link' : ''}>Dark</pd-button>
`;

export const Outline: StoryObj = {
    render: outlineButtons,
    args: { ...defaultArgs, outline: true },
    argTypes: defaultArgTypes,
};

///////////////////////////////////////////////////////////////////////////

const iconArgs = {
    location: 'left',
    size: 'normal',
    fullWidth: false,
    showAsLink: false,
};

const iconArgTypes = {
    location: { control: { type: 'select' }, options: ['left', 'right', 'center'] },
    size: { control: { type: 'select' }, options: ['small', 'normal', 'large'] },
};

type IconArgs = typeof iconArgs;

const iconButtons = (args: IconArgs) => `
    <div>
        <pd-button class="mt-3 ml-3" icon-location="${args.location}" full-width="${args.fullWidth}" size=${args.size} show-as-link="${args.showAsLink}">
            <pd-icon size="2" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
        <pd-button class="mt-3 ml-3" icon-location="${args.location}" full-width="${args.fullWidth}" size=${args.size} show-as-link="${args.showAsLink}" color="success">
            <pd-icon size="2" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
        <pd-button class="mt-3 ml-3" icon-location="${args.location}" full-width="${args.fullWidth}" size=${args.size} show-as-link="${args.showAsLink}" color="danger">
            <pd-icon size="2" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
        <pd-button class="mt-3 ml-3" icon-location="${args.location}" full-width="${args.fullWidth}" size=${args.size} show-as-link="${args.showAsLink}" color="warning">
            <pd-icon size="2" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
        <pd-button class="mt-3 ml-3" icon-location="${args.location}" full-width="${args.fullWidth}" size=${args.size} show-as-link="${args.showAsLink}" color="info">
            <pd-icon size="2" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
        <pd-button class="mt-3 ml-3" icon-location="${args.location}" full-width="${args.fullWidth}" size=${args.size} show-as-link="${args.showAsLink}" color="light">
            <pd-icon size="2" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
        <pd-button class="mt-3 ml-3" icon-location="${args.location}" full-width="${args.fullWidth}" size=${args.size} show-as-link="${args.showAsLink}" color="dark">
            <pd-icon size="2" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
    </div>
    <div>
        <pd-button class="mt-3 ml-3" icon-location="${args.location}" href="http://www.google.ch" target="_blank" full-width="${args.fullWidth}">
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
