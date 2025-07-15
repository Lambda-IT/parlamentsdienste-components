import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../../utils/eventListeners';

const defaultArgs = {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    placement: 'bottom',
};

type TooltipArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    placement: {
        control: { type: 'select' },
        options: ['left', 'right', 'left-start', 'right-start', 'top', 'bottom'],
    },
};

const meta: Meta<TooltipArgs> = {
    title: 'Interactions/Tooltip & Popover',
};

export default meta;

const events = ['click'];
addEventlisteners('pd-button', events, { eventType: 'PointerEvent' });

///////////////////////////////////////////////////////////////////////////

const tooltip = args => {
    const wrapper = document.createElement('div');
    const buttonTooltip = document.createElement('pd-button');
    buttonTooltip.innerHTML = 'Tooltip';
    buttonTooltip.classList.add('m-3');

    wrapper.appendChild(buttonTooltip);

    // @ts-ignore
    tippy(buttonTooltip, {
        content: args.text,
        allowHTML: true,
        placement: args.placement,
    });

    return wrapper;
};

export const Tooltip: StoryObj = {
    render: tooltip,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

///////////////////////////////////////////////////////////////////////////

const popOverArgs = {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    header: 'Popover Header',
    placement: 'bottom',
};

const popover = args => {
    const wrapper = document.createElement('div');
    const buttonHeader = document.createElement('pd-button');
    buttonHeader.innerHTML = 'Popover with Header';
    buttonHeader.classList.add('m-3');

    const buttonBody = document.createElement('pd-button');
    buttonBody.innerHTML = 'Popover';
    buttonBody.classList.add('m-3');

    wrapper.appendChild(buttonHeader);
    wrapper.appendChild(buttonBody);

    // @ts-ignore
    tippy(buttonHeader, {
        content: `<div class="popover" role="tooltip"><h3 class="popover-header">${args.header}</h3><div class="popover-body">${args.text}</div></div>`,
        allowHTML: true,
        theme: 'pd-popover-header',
        placement: args.placement,
    });

    // @ts-ignore
    tippy(buttonBody, {
        content: `<div class="popover" role="tooltip"><div class="popover-body">${args.text}</div></div>`,
        allowHTML: true,
        theme: 'pd-popover',
        placement: args.placement,
    });

    return wrapper;
};

export const Popover: StoryObj = {
    render: popover,
    args: popOverArgs,
    argTypes: defaultArgTypes,
};
