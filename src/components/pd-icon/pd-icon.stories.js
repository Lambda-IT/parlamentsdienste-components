import notes from './readme.md';
import { withKnobs, radios, number, select, text } from '@storybook/addon-knobs';

export default {
    title: 'Icon',
    decorators: [withKnobs()],
    parameters: {
        notes,
    },
};

const iconMap = {
    calendar: 'calendar',
    cancel: 'cancel',
    'cancel-ring': 'cancel-ring',
    caret: 'caret',
    'checkbox-default': 'checkbox-default',
    'checkbox-checked': 'checkbox-checked',
    checkmark: 'checkmark',
    configuration: 'configuration',
    contacts: 'contacts',
    dictionary: 'dictionary',
    expand: 'expand',
    explorer: 'explorer',
    folder: 'folder',
    'folder-in': 'folder-in',
    grid: 'grid',
    link: 'link',
    list: 'list',
    mail: 'mail',
    menu: 'menu',
    money: 'money',
    parlament: 'parlament',
    press: 'press',
    print: 'print',
    'radio-default': 'radio-default',
    'radio-checked': 'radio-checked',
    search: 'search',
    support: 'support',
    profile: 'profile',
    minus: 'minus',
};

export const primary = () => {
    return `
    <pd-icon name="parlament"></pd-icon>
    <pd-icon name="checkmark"></pd-icon>
    <pd-icon name="cancel"></pd-icon>
    <pd-icon name="minus"></pd-icon>
    <pd-icon name="checkbox-default"></pd-icon>
    <pd-icon name="checkbox-checked"></pd-icon>
    <pd-icon name="radio-default"></pd-icon>
    <pd-icon name="radio-checked"></pd-icon>
    <pd-icon name="cancel-ring"></pd-icon>
    <pd-icon name="calendar"></pd-icon>
    <pd-icon name="profile"></pd-icon>
    <pd-icon name="dictionary"></pd-icon>
    <pd-icon name="contacts"></pd-icon>
    <pd-icon name="search"></pd-icon>
    <pd-icon name="caret"></pd-icon>
    <pd-icon name="expand"></pd-icon>
    <pd-icon name="explorer"></pd-icon>
    <pd-icon name="folder"></pd-icon>
    <pd-icon name="folder-in"></pd-icon>
    <pd-icon name="link"></pd-icon>
    <pd-icon name="grid"></pd-icon>
    <pd-icon name="configuration"></pd-icon>
    <pd-icon name="list"></pd-icon>
    <pd-icon name="menu"></pd-icon>
    <pd-icon name="mail"></pd-icon>
    <pd-icon name="money"></pd-icon>
    <pd-icon name="press"></pd-icon>
    <pd-icon name="print"></pd-icon>
    <pd-icon name="support"></pd-icon>
    `;
};

export const size = () => {
    const icons = select('icons', iconMap, 'parlament');

    return `
    <h3>small</h3>
    <pd-icon name="${icons}" size="small"></pd-icon>
    <h3>default</h3>
    <pd-icon name="${icons}" size="default"></pd-icon>
    <h3>large</h3>
    <pd-icon name="${icons}" size="large"></pd-icon>
    `;
};

export const color = () => {
    const color = text('fill', '#0b7285');
    const icons = select('icons', iconMap, 'parlament');

    return `
    <pd-icon name="${icons}" style="fill: ${color}" size="large"></pd-icon>
    <pd-icon name="${icons}" style="fill: red"></pd-icon>
    <pd-icon name="${icons}" style="fill: blue"></pd-icon>
    <pd-icon name="${icons}" style="fill: lime"></pd-icon>
    `;
};

export const rotate = () => {
    const deg = number('deg', 0);
    const icons = select('icons', iconMap, 'parlament');

    return `
    <h3>${deg}deg</h3>
    <pd-icon name="${icons}" rotate="${deg}"></pd-icon>
    <h3>45deg</h3>
    <pd-icon name="${icons}" rotate="45"></pd-icon>
    <h3>180deg</h3>
    <pd-icon name="${icons}" rotate="180"></pd-icon>
    <h3>295deg</h3>
    <pd-icon name="${icons}" rotate="295"></pd-icon>`;
};

export const flip = () => {
    const flip = radios('flip', { none: 'none', X: 'x', Y: 'y', 'Y/X': 'xy' }, 'none');
    const icons = select('icons', iconMap, 'parlament');

    return `
    <h3>${flip}</h3>
    <pd-icon name="${icons}" flip="${flip}"></pd-icon>
    <h3>x</h3>
    <pd-icon name="${icons}" flip="x"></pd-icon>
    <h3>y</h3>
    <pd-icon name="${icons}" flip="y"></pd-icon>
    <h3>xy</h3>
    <pd-icon name="${icons}" flip="xy"></pd-icon>`;
};

export const spin = () => {
    const speed = number('ms', 0);
    const direction = radios('direction', { Clockwise: 'false', 'Counter-clockwise': 'true' }, 'false');
    const icons = select('icons', iconMap, 'parlament');
    return `
    <h3>${speed}ms ${direction === 'false' ? '(cw)' : '(ccw)'}</h3>
    <pd-icon name="${icons}" spin="${speed}" spin-reverse="${direction}"></pd-icon>
    <h3>500ms</h3>
    <pd-icon name="${icons}" spin="500"></pd-icon>
    <h3>1000ms</h3>
    <pd-icon name="${icons}" spin="1000"></pd-icon>
    <h3>5000ms</h3>
    <pd-icon name="${icons}" spin="5000"></pd-icon>
    <h3>5000ms (ccw)</h3>
    <pd-icon name="${icons}" spin="5000" spin-reverse></pd-icon>`;
};
