import notes from './readme.md';
import notesNavbarItem from '../pd-navbar-item/readme.md';

export default {
    title: 'Layout/Navbar',

    parameters: {
        actions: {
            handles: ['pd-menu'],
        },
        notes: {
            'Navbar': notes,
            'Navbar Item': notesNavbarItem
        },
    },
    argTypes: {
        mobileBreakpoint: { control: { type: 'number' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Navbar = (args) => `
    <pd-navbar mobile-breakpoint="${args.mobileBreakpoint}">
        <pd-navbar-item text="Startseite"></pd-navbar-item>
        <pd-navbar-item text="Geschäfte suchen"></pd-navbar-item>
        <pd-navbar-item href="http://www.google.ch" text="VORSTOSSplus"></pd-navbar-item>
    </pd-navbar>
`;

Navbar.args = {
    mobileBreakpoint: 800,
};
