import notes from './readme.md';

export default {
    title: 'Navbar',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-navbar>
            <pd-navbar-item text="Startseite"></pd-navbar-item>
            <pd-navbar-item text="Geschäfte suchen"></pd-navbar-item>
            <pd-navbar-item href="http://www.google.ch" target="_blank" text="VORSTOSSplus"></pd-navbar-item>
        </pd-navbar>
    `;
};
