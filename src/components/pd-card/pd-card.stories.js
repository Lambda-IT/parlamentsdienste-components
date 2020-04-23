import notes from './readme.md';

export default {
    title: 'Card',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-card>
            <pd-card-header>Header</pd-card-header>
            <pd-card-content>Content</pd-card-content>
            <pd-card-footer></pd-card-footer>
        </pd-card>
    `;
};
