import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const meta: Meta = {
    title: 'Layout/Navbar',
    parameters: {
        actions: {
            handles: ['pd-change', 'pd-reverse'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const navbar = args => `
    <pd-navbar mobile-breakpoint="${args.mobileBreakpoint}">
        <pd-navbar-item text="Startseite"></pd-navbar-item>
        <pd-navbar-item text="Geschäfte suchen"></pd-navbar-item>
        <pd-navbar-item href="http://www.google.ch" text="VORSTOSSplus"></pd-navbar-item>
    </pd-navbar>
`;

const navbarArgs = {
    mobileBreakpoint: 800,
};

export const Navbar: StoryObj = {
    render: navbar,
    args: navbarArgs,
};
