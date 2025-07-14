import type { Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    mobileBreakpoint: 800,
};

type NavbarArgs = typeof defaultArgs;

const meta: Meta<NavbarArgs> = {
    title: 'Layout/Navbar',
    args: defaultArgs,
};

export default meta;

const events = ['pd-closed', 'pd-backdrop', 'pd-escape'];
addEventlisteners('pd-navbar', events);

///////////////////////////////////////////////////////////////////////////

const navbar = (args: NavbarArgs) => `
    <pd-navbar mobile-breakpoint="${args.mobileBreakpoint}">
        <pd-navbar-item text="Startseite"></pd-navbar-item>
        <pd-navbar-item text="Geschäfte suchen"></pd-navbar-item>
        <pd-navbar-item href="http://www.google.ch" text="VORSTOSSplus"></pd-navbar-item>
    </pd-navbar>
`;

export const Navbar: StoryObj = {
    render: navbar,
};
