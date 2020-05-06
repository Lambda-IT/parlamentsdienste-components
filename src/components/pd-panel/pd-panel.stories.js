import notes from './readme.md';

export default {
    title: 'Panel',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-panel class="m-3">
            <pd-panel-header>Header</pd-panel-header>
            <pd-panel-content>Content</pd-panel-content>
            <pd-panel-footer></pd-panel-footer>
        </pd-panel>
    `;
};
