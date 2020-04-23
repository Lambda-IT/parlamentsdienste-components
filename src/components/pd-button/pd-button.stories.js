import { withKnobs, text, radios } from '@storybook/addon-knobs';
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
    const location = radios('location', { left: 'left', right: 'right' }, 'left');
    return `
        <div>
            <pd-button icon-location="${location}">
                <pd-icon size="small" style="fill: white" slot="icon" name="link"></pd-icon>
                button
            </pd-button>
        </div>
        <div>
            <pd-button  icon-location="${location}" href="http://www.google.ch" target="_blank">
                <pd-icon size="small" style="fill: #0b7285" slot="icon" name="link"></pd-icon>
                external link
            </pd-button>
        </div>
    `;
};

export const link = () => {
    const href = text('href', 'http://www.google.ch');
    const target = text('target', '_blank');
    return `
      <pd-button href="${href}" target="${target}">external link</pd-button>
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
        </pd-button-group>
    `;
};
