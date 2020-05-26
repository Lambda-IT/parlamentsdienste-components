import notes from './readme.md';

export default {
    title: 'Layout|Navbar',
    parameters: {
        notes,
    },
};

export const navbar = () => {
    return `
        <pd-navbar>
            <pd-navbar-item text="Startseite"></pd-navbar-item>
            <pd-navbar-item text="Geschäfte suchen"></pd-navbar-item>
            <pd-navbar-item href="http://www.google.ch" text="VORSTOSSplus"></pd-navbar-item>
        </pd-navbar>
    `;
};
