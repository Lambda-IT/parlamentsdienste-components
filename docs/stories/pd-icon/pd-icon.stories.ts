import { iconMap } from '@parlamentsdienste/core/utils';
import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';

const meta: Meta = {
    title: 'Typography/Icon',
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const basic = () =>
    `
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="add"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="alert_danger"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="alert_info"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="alert_success"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="alert_warning"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="appview"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="audio"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="bill"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="breadcrumb"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="calendar"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="cancel"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="caret"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="checkbox_checked"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="checkbox_default"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="clipboard"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="close"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="close_bold"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="close_small"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="comment"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="compensation"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="configuration"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="confirm"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="confirm_bold"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="contact"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="copy"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="delete"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="detail"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="dictionary"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="documents"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="download"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="drag_drop"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="dropdown"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="edit"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="excel_export"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="expand"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="export"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="file"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="file_excel"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="file_image"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="file_powerpoint"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="file_word"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="filter"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="folder_closed"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="folder_open"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="gallery"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="geschaeftsverwaltung"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="group"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="history"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="link"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="link_connection"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="list"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="lock"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="menu"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="menu_actions"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="mehrjahresplanung"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="message"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="microphone"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="multiple_files"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="my_calendar"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="my_clipboard"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="notification"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="parlament"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="pdf_file"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="planung_organe"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="planung_session"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="play"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="press"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="print"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="profile"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="proposal"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="radio_checked"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="radio_default"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="ratsmitglied_gruppen"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="refresh"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="research"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="reservation"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="response"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="search"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="shrink"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="sign"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="sessionsdurchfuehrung"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="sitzungsdurchfuehrung"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="sort"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="status_blue"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="status_green"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="status_orange"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="status_red"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="status_undefined"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="support"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="upload"></pd-icon>
    `;

export const Basic: StoryObj = {
    render: basic,
};

///////////////////////////////////////////////////////////////////////////

const size = args =>
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

const sizeArgs = {
    icons: 'parlament',
};

const sizeArgTypes: ArgTypes = {
    icons: { control: { type: 'select' }, options: Object.keys(iconMap) },
};

export const Size: StoryObj = {
    render: size,
    args: sizeArgs,
    argTypes: sizeArgTypes,
};

// ///////////////////////////////////////////////////////////////////////////

const color = args =>
    `
    <pd-icon class="mt-3 ml-3" size="3" name="${args.icons}" style="fill: ${args.color}" size="large"></pd-icon>
    <pd-icon class="mt-3" size="3" name="${args.icons}" style="fill: red"></pd-icon>
    <pd-icon class="mt-3" size="3" name="${args.icons}" style="fill: blue"></pd-icon>
    <pd-icon class="mt-3" size="3" name="${args.icons}" style="fill: lime"></pd-icon>
    `;

const colorArgs = {
    ...sizeArgs,
    color: '#0b7285',
};

const colorArgTypes: ArgTypes = {
    ...sizeArgTypes,
    color: { control: { type: 'color' } },
};

export const Color: StoryObj = {
    render: color,
    args: colorArgs,
    argTypes: colorArgTypes,
};

// // ///////////////////////////////////////////////////////////////////////////

const rotate = args => `
    <div class="m-3">
        <h3>${args.rotate}deg</h3>
        <pd-icon name="${args.icons}" size="3" rotate="${args.rotate}"></pd-icon>
    </div>
    <div class="m-3">
        <h3>45deg</h3>
        <pd-icon name="${args.icons}" size="3" rotate="45"></pd-icon>
    </div>
    <div class="m-3">
        <h3>180deg</h3>
        <pd-icon name="${args.icons}" size="3" rotate="180"></pd-icon>
    </div>
    <div class="m-3">
        <h3>295deg</h3>
        <pd-icon name="${args.icons}" size="3" rotate="295"></pd-icon>
    </div>`;

const rotateArgs = {
    icons: 'parlament',
    rotate: 0,
};

const rotateArgTypes: ArgTypes = {
    icons: { control: { type: 'select' }, options: Object.keys(iconMap) },
    rotate: { control: { type: 'number' } },
};

export const Rotate: StoryObj = {
    render: rotate,
    args: rotateArgs,
    argTypes: rotateArgTypes,
};

// // ///////////////////////////////////////////////////////////////////////////

const flip = args => `
    <div class="m-3">
        <h3>${args.flip}</h3>
        <pd-icon name="${args.icons}" size="3" flip="${args.flip}"></pd-icon>
    </div>
    <div class="m-3">
        <h3>x</h3>
        <pd-icon name="${args.icons}" size="3" flip="x"></pd-icon>
    </div>
    <div class="m-3">
        <h3>y</h3>
        <pd-icon name="${args.icons}" size="3" flip="y"></pd-icon>
    </div>
    <div class="m-3">
        <h3>xy</h3>
        <pd-icon name="${args.icons}" size="3" flip="xy"></pd-icon>
    </div>`;

const flipArgs = {
    icons: 'parlament',
    flip: 'x',
};

const flipArgTypes: ArgTypes = {
    icons: { control: { type: 'select' }, options: Object.keys(iconMap) },
    flip: { control: { type: 'select' }, options: ['none', 'x', 'y', 'xy'] },
};

export const Flip: StoryObj = {
    render: flip,
    args: flipArgs,
    argTypes: flipArgTypes,
};

// // ///////////////////////////////////////////////////////////////////////////

const spin = args => `
    <div class="m-3">
        <h3>${args.speed}ms ${!args.direction ? '(cw)' : '(ccw)'}</h3>
        <pd-icon name="${args.icons}" size="3" spin="${args.speed}" spin-reverse="${args.direction}"></pd-icon>
    </div>
    <div class="m-3">
        <h3>500ms</h3>
        <pd-icon name="${args.icons}" size="3" spin="500"></pd-icon>
    </div>
    <div class="m-3">
        <h3>1000ms</h3>
        <pd-icon name="${args.icons}" size="3" spin="1000"></pd-icon>
    </div>
    <div class="m-3">
        <h3>5000ms</h3>
        <pd-icon name="${args.icons}" size="3" spin="5000"></pd-icon>
    </div>
    <div class="m-3">
        <h3>5000ms (ccw)</h3>
        <pd-icon name="${args.icons}" size="3" spin="5000" spin-reverse></pd-icon>
    </div>`;

const spinArgs = {
    icons: 'parlament',
    direction: false,
    speed: 1000,
};

const spinArgTypes: ArgTypes = {
    icons: { control: { type: 'select' }, options: Object.keys(iconMap) },
};

export const Spin: StoryObj = {
    render: spin,
    args: spinArgs,
    argTypes: spinArgTypes,
};
