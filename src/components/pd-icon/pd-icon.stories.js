import notes from './readme.md';

export default {
    title: 'Typography/Icon',
    parameters: {
        notes,
    },
};

const iconList = [
    'add',
    'appview',
    'audio',
    'breadcrumb',
    'cancel',
    'checkbox_checked',
    'checkbox_default',
    'clipboard',
    'close_small',
    'close',
    'compensation',
    'configuration',
    'confirm',
    'contact',
    'dictionary',
    'documents',
    'dropdown',
    'expand',
    'filter',
    'folder_closed',
    'folder_open',
    'gallery',
    'link',
    'list',
    'menu',
    'message',
    'microphone',
    'parlament',
    'play',
    'press',
    'print',
    'profile',
    'radio_checked',
    'radio_default',
    'research',
    'reservation',
    'search',
    'sort',
    'status_green',
    'status_orange',
    'status_red',
    'status_undefined',
    'support',
    'alert_danger',
    'alert_info',
    'alert_success',
    'alert_warning',
    'calendar',
    'delete',
    'drag_drop',
    'edit',
    'menu_actions',
];

export const basic = () =>
    `
    <pd-icon class="mt-3" size="2.5" name="add"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="appview"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="audio"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="breadcrumb"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="cancel"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="checkbox_checked"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="checkbox_default"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="clipboard"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="close_small"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="close"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="compensation"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="configuration"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="confirm"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="contact"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="dictionary"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="documents"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="dropdown"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="expand"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="filter"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="folder_closed"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="folder_open"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="gallery"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="link"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="list"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="menu"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="message"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="microphone"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="parlament"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="play"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="press"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="print"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="profile"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="radio_checked"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="radio_default"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="research"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="reservation"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="search"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="sort"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="status_green"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="status_orange"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="status_red"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="status_undefined"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="support"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="alert_danger"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="alert_info"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="alert_success"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="alert_warning"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="calendar"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="delete"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="drag_drop"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="edit"></pd-icon>
    <pd-icon class="mt-3" size="2.5" name="menu_actions"></pd-icon>
    `;

///////////////////////////////////////////////////////////////////////////

const SizeStory = (args) =>
    `
    <div class="m-3">
        <h3>Size 1</h3>
        <pd-icon name="${args.icons}" size="1"></pd-icon>
    </div>
    <div class="m-3">
        <h3>Size 2</h3>
        <pd-icon name="${args.icons}" size="2"></pd-icon>
    </div>
    <div class="m-3">
        <h3>Size 3</h3>
        <pd-icon name="${args.icons}" size="3"></pd-icon>
    </div>
    `;

export const Size = SizeStory.bind({});

Size.args = {
    icons: 'parlament',
};

Size.argTypes = {
    icons: { control: { type: 'select', options: iconList } },
};

///////////////////////////////////////////////////////////////////////////

const ColorStory = (args) =>
    `
    <pd-icon class="mt-3 ml-3" size="1.5" name="${args.icons}" style="fill: ${args.color}" size="large"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="${args.icons}" style="fill: red"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="${args.icons}" style="fill: blue"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="${args.icons}" style="fill: lime"></pd-icon>
    `;

export const Color = ColorStory.bind({});

Color.args = {
    ...Size.args,
    color: '#0b7285',
};

Color.argTypes = {
    ...Size.argTypes,
    color: { control: { type: 'color' } },
};

// ///////////////////////////////////////////////////////////////////////////

// export const rotate = () => {
//     const deg = number('deg', 0);
//     const icons = select('icons', iconMap, 'parlament');

//     return `
//     <div class="m-3">
//         <h3>${deg}deg</h3>
//         <pd-icon name="${icons}" size="1.5" rotate="${deg}"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>45deg</h3>
//         <pd-icon name="${icons}" size="1.5" rotate="45"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>180deg</h3>
//         <pd-icon name="${icons}" size="1.5" rotate="180"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>295deg</h3>
//         <pd-icon name="${icons}" size="1.5" rotate="295"></pd-icon>
//     </div>`;
// };

// ///////////////////////////////////////////////////////////////////////////

// export const flip = () => {
//     const flip = radios('flip', { none: 'none', X: 'x', Y: 'y', 'Y/X': 'xy' }, 'none');
//     const icons = select('icons', iconMap, 'parlament');

//     return `
//     <div class="m-3">
//         <h3>${flip}</h3>
//         <pd-icon name="${icons}" size="1.5" flip="${flip}"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>x</h3>
//         <pd-icon name="${icons}" size="1.5" flip="x"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>y</h3>
//         <pd-icon name="${icons}" size="1.5" flip="y"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>xy</h3>
//         <pd-icon name="${icons}" size="1.5" flip="xy"></pd-icon>
//     </div>`;
// };

// ///////////////////////////////////////////////////////////////////////////

// export const spin = () => {
//     const speed = number('ms', 0);
//     const direction = radios('direction', { Clockwise: 'false', 'Counter-clockwise': 'true' }, 'false');
//     const icons = select('icons', iconMap, 'parlament');
//     return `
//     <div class="m-3">
//         <h3>${speed}ms ${direction === 'false' ? '(cw)' : '(ccw)'}</h3>
//         <pd-icon name="${icons}" size="1.5" spin="${speed}" spin-reverse="${direction}"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>500ms</h3>
//         <pd-icon name="${icons}" size="1.5" spin="500"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>1000ms</h3>
//         <pd-icon name="${icons}" size="1.5" spin="1000"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>5000ms</h3>
//         <pd-icon name="${icons}" size="1.5" spin="5000"></pd-icon>
//     </div>
//     <div class="m-3">
//         <h3>5000ms (ccw)</h3>
//         <pd-icon name="${icons}" size="1.5" spin="5000" spin-reverse></pd-icon>
//     </div>`;
// };
