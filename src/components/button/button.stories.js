import { withKnobs, select, text, radios } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import notes from './readme.md';

export default {
    title: 'Button',
    decorators: [withActions('click', 'click'), withKnobs()],
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-button>I'm a button</pd-button>
        <pd-button disabled>I'm a button (disabled)</pd-button>
    `;
};

export const icon = () => {
    const icon = radios('icons', { '😎': '😎', '👍': '👍', '😉': '😉' }, '👍');
    return `
        <pd-button><span slot="icon">${icon}</span><span>I'm a button with an icon</span></pd-button>
    `;
};

export const link = () => {
    const href = text('href', 'http://www.google.ch');
    return `
      <pd-button href="${href}" target="_blank">google link</pd-button>
  `;
};
