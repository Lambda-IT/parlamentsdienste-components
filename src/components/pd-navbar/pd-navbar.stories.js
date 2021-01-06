import notes from './readme.md';
import { text, radios, withKnobs, number } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Layout/Navbar',
    decorators: [withActions('pd-menu'), withKnobs()],
    parameters: {
        notes,
    },
};

export const navbar = () => {
    const mobileBreakpoint = number('mobile-breakpoint', 300);

    return `
        <pd-navbar mobile-breakpoint="${mobileBreakpoint}">
            <pd-navbar-item text="Startseite"></pd-navbar-item>
            <pd-navbar-item text="Geschäfte suchen"></pd-navbar-item>
            <pd-navbar-item href="http://www.google.ch" text="VORSTOSSplus"></pd-navbar-item>
        </pd-navbar>
    `;
};
