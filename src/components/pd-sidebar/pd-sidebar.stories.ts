import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
    title: 'Layout/Sidebar',
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const sidebar = () => {
    return `
        <pd-sidebar>
            <pd-sidebar-item icon-name="parlament" text="Startseite"></pd-sidebar-item>
            <pd-sidebar-item icon-name="search" text="Geschäfte suchen"></pd-sidebar-item>
            <pd-sidebar-item icon-name="link" href="http://www.google.ch" text="VORSTOSSplus"></pd-sidebar-item>
        </pd-sidebar>
    `;
};

export const Sidebar: StoryObj = {
    render: sidebar,
};
