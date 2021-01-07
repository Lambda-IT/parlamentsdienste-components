import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Dropdown',
    parameters: {
        actions: {
            handles: ['pd-change'],
        },
        notes,
        argTypes: {
            items: { controls: { type: 'object' } },
        },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Dropdown = (args) => {
    const pdDropdown = document.createElement('pd-dropdown');
    pdDropdown.items = args.items;
    pdDropdown.classList = ['m-3'];

    return pdDropdown;
};

Dropdown.args = {
    items: [
        { id: '1', label: 'Mitteilungen und Verschiedenes', value: 'a1' },
        { id: '2', label: 'Pa.Iv. Semadeni. Fakultatives', value: 'a2' },
        { id: '3', label: 'Referendum für die Unterstützung Olympischer Spiele durch den Bund', value: 'a3' },
        { id: '4', label: 'Gesamtkonzeption, Präsentation und Diskussion', value: 'a4' },
        { id: '5', label: 'Controlling, Präsentation, Diskussion und Beschluss', value: 'a5' },
        { id: '6', label: 'Mitteilungen', value: 'a6', selected: true },
        { id: '7', label: 'Aktuelles aus dem VBS, Information und Diskussion', value: 'a7' },
        { id: '8', label: 'NKF. Evaluationsverfahren, Information und Diskussion', value: 'a8' },
        { id: '9', label: 'Politisches Controlling, Präsentation, Diskussion und Beschluss', value: 'a9' },
    ],
};
