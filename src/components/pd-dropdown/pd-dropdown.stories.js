import notes from './readme.md';
import { object } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Forms + Inputs|Dropdown',
    parameters: {
        notes,
        decorators: [withActions('pd-on-change')],
    },
};

export const dropdown = () => {
    const itemData = [
        { id: '1', label: 'Mitteilungen und Verschiedenes', value: 'a1' },
        { id: '2', label: 'Pa.Iv. Semadeni. Fakultatives', value: 'a2' },
        { id: '3', label: 'Referendum für die Unterstützung Olympischer Spiele durch den Bund', value: 'a3' },
        { id: '4', label: 'Gesamtkonzeption, Präsentation und Diskussion', value: 'a4' },
        { id: '5', label: 'Controlling, Präsentation, Diskussion und Beschluss', value: 'a5' },
        { id: '6', label: 'Mitteilungen', value: 'a6' },
        { id: '7', label: 'Aktuelles aus dem VBS, Information und Diskussion', value: 'a7' },
        { id: '8', label: 'NKF. Evaluationsverfahren, Information und Diskussion', value: 'a8' },
        { id: '9', label: 'Politisches Controlling, Präsentation, Diskussion und Beschluss', value: 'a9' },
    ];

    const items = object('items', itemData);

    const pdDropdown = document.createElement('pd-dropdown');
    pdDropdown.items = items;
    pdDropdown.classList = ['m-3'];

    return pdDropdown;
};
