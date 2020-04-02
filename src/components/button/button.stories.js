import { withKnobs, select, text, radios } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import notes from './readme.md';

export default {
    title: 'Button',
    decorators: [withActions('click', 'click'), withKnobs()],
    parameters: { notes },
};

export const states = () => {
    const disabled = radios('disabled', { yes: 'disabled', no: '' }, '');
    const size = radios('size', { large: 'large', normal: 'normal', small: 'small' }, 'normal');
    return `
        <pd-button ${disabled} size=${size}>Primary</pd-button>
        <pd-button ${disabled} size=${size} color="success">Success</pd-button>
        <pd-button ${disabled} size=${size} color="danger">Danger</pd-button>
        <pd-button ${disabled} size=${size} color="warning">Warning</pd-button>
        <pd-button ${disabled} size=${size} color="info">Info</pd-button>
        <pd-button ${disabled} size=${size} color="light">Light</pd-button>
        <pd-button ${disabled} size=${size} color="dark">Dark</pd-button>
    `;
};

export const outline = () => {
    const disabled = radios('disabled', { yes: 'disabled', no: '' }, '');
    const size = radios('size', { large: 'large', normal: 'normal', small: 'small' }, 'normal');
    return `
        <pd-button outline ${disabled} size=${size}>Primary</pd-button>
        <pd-button outline ${disabled} size=${size} color="success">Success</pd-button>
        <pd-button outline ${disabled} size=${size} color="danger">Danger</pd-button>
        <pd-button outline ${disabled} size=${size} color="warning">Warning</pd-button>
        <pd-button outline ${disabled} size=${size} color="info">Info</pd-button>
        <pd-button outline ${disabled} size=${size} color="light">Light</pd-button>
        <pd-button outline ${disabled} size=${size} color="dark">Dark</pd-button>
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
      <pd-button href="${href}" target="_blank">external link</pd-button>
  `;
};

export const group = () => {
    const disabled = radios('disabled', { yes: 'disabled', no: '' }, '');
    const size = radios('size', { large: 'large', normal: 'normal', small: 'small' }, 'normal');
    return `
        <pd-button-group>
            <pd-button ${disabled} size=${size}>Primary</pd-button>
            <pd-button ${disabled} size=${size}>Success</pd-button>
            <pd-button ${disabled} size=${size}>Danger</pd-button>
        <pd-button-group>
    `;
};
