import { iconMap } from './../../utils/icons';
import notes from './readme.md';

export default {
    title: 'Typography/Icon',
    parameters: {
        notes,
    },
};

export const basic = () =>
    `
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="add"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="alert_danger"></pd-icon>
    <pd-icon style="background-color:#fff" class="mt-3" size="2.5" name="alert_info"></pd-icon>
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
    icons: { control: { type: 'select', options: Object.keys(iconMap) } },
};

///////////////////////////////////////////////////////////////////////////

const ColorStory = (args) =>
    `
    <pd-icon class="mt-3 ml-3" size="3" name="${args.icons}" style="fill: ${args.color}" size="large"></pd-icon>
    <pd-icon class="mt-3" size="3" name="${args.icons}" style="fill: red"></pd-icon>
    <pd-icon class="mt-3" size="3" name="${args.icons}" style="fill: blue"></pd-icon>
    <pd-icon class="mt-3" size="3" name="${args.icons}" style="fill: lime"></pd-icon>
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

const RotateStory = (args) => `
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

export const Rotate = RotateStory.bind({});

Rotate.args = {
    icons: 'parlament',
    rotate: 0,
};

Rotate.argTypes = {
    icons: { control: { type: 'select', options: Object.keys(iconMap) } },
    rotate: { control: { type: 'number' } },
};

// ///////////////////////////////////////////////////////////////////////////

const FlipStory = (args) => `
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

export const Flip = FlipStory.bind({});

Flip.args = {
    icons: 'parlament',
    flip: 'x',
};

Flip.argTypes = {
    icons: { control: { type: 'select', options: Object.keys(iconMap) } },
    flip: { control: { type: 'select', options: ['none', 'x', 'y', 'xy'] } },
};

// ///////////////////////////////////////////////////////////////////////////

const SpinStory = (args) => `
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

export const Spin = SpinStory.bind({});

Spin.args = {
    icons: 'parlament',
    direction: false,
    speed: 1000,
};

Spin.argTypes = {
    icons: { control: { type: 'select', options: Object.keys(iconMap) } },
    direction: { control: { type: 'boolean' } },
    speed: { control: { type: 'number' } },
};
