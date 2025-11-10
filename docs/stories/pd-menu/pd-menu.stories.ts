import { PdButtonSize, PdPlacement } from '@parlamentsdienste/pdcomponents-core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';

const defaultArgs = {
    menuItems: [
        { icon: 'print', text: 'Print' },
        { icon: 'documents', text: 'Download', disabled: true },
    ],
    label: 'Aktionen',
    invertColor: false,
    placement: 'bottom-start' as PdPlacement,
    size: 'normal' as PdButtonSize,
};

type MenuArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    size: { control: { type: 'select' }, options: ['normal', 'small', 'large'] },
    placement: {
        control: {
            type: 'select',
        },
        options: [
            'auto',
            'auto-start',
            'auto-end',
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'right',
            'right-start',
            'right-end',
            'left',
            'left-start',
            'left-end',
        ],
    },
};

const meta: Meta<MenuArgs> = {
    title: 'Interactions/Menu',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const menu = (args: MenuArgs) => {
    const pdMenu = document.createElement('pd-menu') as HTMLPdMenuElement;

    args.menuItems.forEach(i => {
        const child = document.createElement('pd-menu-item') as HTMLPdMenuItemElement;
        const childIcon = document.createElement('pd-icon') as HTMLPdIconElement;

        childIcon.name = i.icon;
        childIcon.size = 2;
        child.append(childIcon);

        child.text = i.text;
        child.disabled = i.disabled;
        pdMenu.append(child);
    });

    pdMenu.label = args.label;
    pdMenu.size = args.size;
    pdMenu.invertColor = args.invertColor;
    pdMenu.placement = args.placement;
    pdMenu.classList.add('m-3');

    return pdMenu;
};

export const Menu: StoryObj = {
    render: menu,
};
