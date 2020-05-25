import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Interactions|List',
    decorators: [withKnobs()],
    parameters: {
        notes,
    },
};

export const basic = () => {
    return `
        <pd-list class="m-3">
            <pd-list-item>
                <span>List Item 1</span>
            </pd-list-item>
            <pd-list-item>
                <span>List Item 2</span>
            </pd-list-item>
            <pd-list-item>
                <span>List Item 3</span>
            </pd-list-item>
        </pd-list>
    `;
};

export const statusList = () => {
    return `
        <pd-list class="m-3">
            <pd-list-item status="unset">
                <div>16.3112</div>
                <a>WBK-NR: Antrag auf Ablehnung </a>
            </pd-list-item>
            <pd-list-item status="success">
                <div>18.3708</div>
                <a>SiK-NR: Antrag auf Annahme</a>
            </pd-list-item>
            <pd-list-item status="warning">
                <div>16.845</div>
                <a>Änderung Kategorie IVIb</a>
            </pd-list-item>
            <pd-list-item status="danger">
                <div>18.426</div>
                <a>Änderung Kategorie IIIb</a>
            </pd-list-item>
        </pd-list>
    `;
};
