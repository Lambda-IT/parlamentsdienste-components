// import notes from './readme.md';
// import notesMenuItem from '../pd-menu-item/readme.md';

export default {
  title: 'Interactions/Menu',
  parameters: {
    // notes: {
    //     'Menu': notes,
    //     'Menu Item': notesMenuItem
    // }
  },
  argTypes: {
    items: { control: { type: 'object' } },
    label: { control: { type: 'string' } },
    invertColor: { control: { type: 'boolean' } },
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
  },
};

///////////////////////////////////////////////////////////////////////////

export const Menu = args => {
  const pdMenu = document.createElement('pd-menu');

  args.menuItems.forEach(i => {
    const child = document.createElement('pd-menu-item');
    const childIcon = document.createElement('pd-icon');

    childIcon.name = i.icon;
    childIcon.size = 2;
    child.append(childIcon);

    child.text = i.text;
    pdMenu.append(child);
  });

  pdMenu.label = args.label;
  pdMenu.invertColor = args.invertColor;
  pdMenu.placement = args.placement;
  pdMenu.classList.add('m-3');

  return pdMenu;
};

Menu.args = {
  menuItems: [
    { icon: 'print', text: 'Print' },
    { icon: 'documents', text: 'Download' },
  ],
  label: 'Aktionen',
  invertColor: false,
  placement: 'bottom-start',
};
