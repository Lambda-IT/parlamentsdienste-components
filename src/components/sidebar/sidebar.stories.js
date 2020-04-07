import notes from './readme.md';

export default {
    title: 'Sidebar',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-sidebar>
            <pd-sidebar-item text="Startseite"></pd-sidebar-item>
            <pd-sidebar-item text="Geschäfte suchen"></pd-sidebar-item>
            <pd-sidebar-item href="http://www.google.ch" target="_blank" text="VORSTOSSplus"></pd-sidebar-item>
        </pd-sidebar>
    `;
};
