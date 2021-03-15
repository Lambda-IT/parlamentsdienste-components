import notes from './readme.md';

export default {
    title: 'Layout',
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

export const Menu = (args) => {
    const pdMenu = document.createElement('pd-menu');

    args.menuItems.forEach((i) => {
        const child = document.createElement('pd-menu-item');
        const childIcon = document.createElement('pd-icon');

        childIcon.name = i.icon;
        childIcon.size = 2;
        child.append(childIcon);

        child.text = i.text;
        pdMenu.append(child);
    });

    pdMenu.classList = ['m-3'];

    return pdMenu;
};

Menu.args = {
    menuItems: [
        { icon: 'print', text: 'Print' },
        { icon: 'documents', text: 'Download' },
    ],
};
