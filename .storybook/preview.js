import { configure, addParameters } from '@storybook/html';

addParameters({
    backgrounds: [
        { name: 'white', value: '#ffffff' },
        { name: 'blue-whale', value: '#033840' },
        { name: 'wild-sand', value: '#f5f5f5', default: true },
    ],
});

configure(require.context('../src/components', true, /\.stories\.js$/), module);
