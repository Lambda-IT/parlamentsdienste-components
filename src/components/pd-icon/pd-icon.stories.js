import notes from './readme.md';
import { withKnobs, radios, number, select, text } from '@storybook/addon-knobs';

export default {
    title: 'Typography|Icon',
    decorators: [withKnobs()],
    parameters: {
        notes,
    },
};

const iconMap = {
    ablage: 'ablage',
    add: 'add',
    appview: 'appview',
    arrow: 'arrow',
    book: 'book',
    breadcrumb: 'breadcrumb',
    cancel: 'cancel',
    'checkbox-checked': 'checkbox-checked',
    'checkbox-default': 'checkbox-default',
    close: 'close',
    'close-small': 'close-small',
    collapse: 'collapse',
    configuration: 'configuration',
    confirm: 'confirm',
    contacts: 'contacts',
    documents: 'documents',
    dropdown: 'dropdown',
    expand: 'expand',
    filter: 'filter',
    'folder-closed': 'folder-closed',
    'folder-open': 'folder-open',
    link: 'link',
    list: 'list',
    menu: 'menu',
    message: 'message',
    money: 'money',
    parlament: 'parlament',
    press: 'press',
    print: 'print',
    profile: 'profile',
    'radio-checked': 'radio-checked',
    'radio-default': 'radio-default',
    recherche: 'recherche',
    reservation: 'reservation',
    search: 'search',
    sort: 'sort',
    'status-green': 'status-green',
    'status-orange': 'status-orange',
    'status-red': 'status-red',
    'status-undefined': 'status-undefined',
    support: 'support',
};

export const basic = () => {
    return `
    <pd-icon class="mt-3" size="1.5" name="ablage"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="add"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="appview"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="arrow"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="book"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="breadcrumb"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="cancel"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="checkbox-checked"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="checkbox-default"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="close"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="close-small"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="collapse"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="configuration"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="confirm"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="contacts"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="documents"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="dropdown"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="expand"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="filter"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="folder-closed"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="folder-open"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="link"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="list"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="menu"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="message"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="money"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="parlament"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="press"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="print"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="profile"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="radio-checked"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="radio-default"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="recherche"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="reservation"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="search"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="sort"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="status-green"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="status-orange"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="status-red"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="status-undefined"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="support"></pd-icon>
    `;
};

export const size = () => {
    const icons = select('icons', iconMap, 'parlament');

    return `
    <div class="m-3">
        <h3>Size 1</h3>
        <pd-icon name="${icons}" size="1"></pd-icon>
    </div>
    <div class="m-3">
        <h3>Size 2</h3>
        <pd-icon name="${icons}" size="2"></pd-icon>
    </div>
    <div class="m-3">
        <h3>Size 3</h3>
        <pd-icon name="${icons}" size="3"></pd-icon>
    </div>
    `;
};

export const color = () => {
    const color = text('fill', '#0b7285');
    const icons = select('icons', iconMap, 'parlament');

    return `
    <pd-icon class="mt-3 ml-3" size="1.5" name="${icons}" style="fill: ${color}" size="large"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="${icons}" style="fill: red"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="${icons}" style="fill: blue"></pd-icon>
    <pd-icon class="mt-3" size="1.5" name="${icons}" style="fill: lime"></pd-icon>
    `;
};

export const rotate = () => {
    const deg = number('deg', 0);
    const icons = select('icons', iconMap, 'parlament');

    return `
    <div class="m-3">
        <h3>${deg}deg</h3>
        <pd-icon name="${icons}" size="1.5" rotate="${deg}"></pd-icon>
    </div>
    <div class="m-3">
        <h3>45deg</h3>
        <pd-icon name="${icons}" size="1.5" rotate="45"></pd-icon>
    </div>
    <div class="m-3">
        <h3>180deg</h3>
        <pd-icon name="${icons}" size="1.5" rotate="180"></pd-icon>
    </div>
    <div class="m-3">
        <h3>295deg</h3>
        <pd-icon name="${icons}" size="1.5" rotate="295"></pd-icon>
    </div>`;
};

export const flip = () => {
    const flip = radios('flip', { none: 'none', X: 'x', Y: 'y', 'Y/X': 'xy' }, 'none');
    const icons = select('icons', iconMap, 'parlament');

    return `
    <div class="m-3">
        <h3>${flip}</h3>
        <pd-icon name="${icons}" size="1.5" flip="${flip}"></pd-icon>
    </div>
    <div class="m-3">
        <h3>x</h3>
        <pd-icon name="${icons}" size="1.5" flip="x"></pd-icon>
    </div>
    <div class="m-3">
        <h3>y</h3>
        <pd-icon name="${icons}" size="1.5" flip="y"></pd-icon>
    </div>
    <div class="m-3">
        <h3>xy</h3>
        <pd-icon name="${icons}" size="1.5" flip="xy"></pd-icon>
    </div>`;
};

export const spin = () => {
    const speed = number('ms', 0);
    const direction = radios('direction', { Clockwise: 'false', 'Counter-clockwise': 'true' }, 'false');
    const icons = select('icons', iconMap, 'parlament');
    return `
    <div class="m-3">
        <h3>${speed}ms ${direction === 'false' ? '(cw)' : '(ccw)'}</h3>
        <pd-icon name="${icons}" size="1.5" spin="${speed}" spin-reverse="${direction}"></pd-icon>
    </div>
    <div class="m-3">
        <h3>500ms</h3>
        <pd-icon name="${icons}" size="1.5" spin="500"></pd-icon>
    </div>
    <div class="m-3">
        <h3>1000ms</h3>
        <pd-icon name="${icons}" size="1.5" spin="1000"></pd-icon>
    </div>
    <div class="m-3">
        <h3>5000ms</h3>
        <pd-icon name="${icons}" size="1.5" spin="5000"></pd-icon>
    </div>
    <div class="m-3">
        <h3>5000ms (ccw)</h3>
        <pd-icon name="${icons}" size="1.5" spin="5000" spin-reverse></pd-icon>
    </div>`;
};
