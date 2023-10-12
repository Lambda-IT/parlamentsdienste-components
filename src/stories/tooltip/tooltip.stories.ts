// import notes from './readme.md';

export default {
  title: 'Interactions/Tooltip & Popover',
  parameters: {
    // notes,
    layout: 'centered',
  },
  argTypes: {
    text: { controls: { type: 'string' } },
    header: { controls: { type: 'string' } },
    placement: {
      control: { type: 'select' },
      options: ['left', 'right', 'left-start', 'right-start', 'top', 'bottom'],
    },
  },
};

export const Tooltip = args => {
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

Tooltip.args = {
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  placement: 'bottom',
};

export const Popover = args => {
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

Popover.args = {
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  header: 'Popover Header',
  placement: 'bottom',
};
