import notes from './readme.md';

export default {
    title: 'Layout|Sidebar',
    parameters: {
        notes,
    },
};

export const sidebar = () => {
    return `
        <pd-sidebar>
            <pd-sidebar-item icon-name="parlament" text="Startseite"></pd-sidebar-item>
            <pd-sidebar-item icon-name="search" text="Geschäfte suchen"></pd-sidebar-item>
            <pd-sidebar-item icon-name="link" href="http://www.google.ch" text="VORSTOSSplus"></pd-sidebar-item>
        </pd-sidebar>
    `;
};
