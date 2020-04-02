import { configure, addParameters } from '@storybook/html';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
    backgrounds: [
        { name: 'white', value: '#ffffff' },
        { name: 'blue-whale', value: '#033840' },
        { name: 'wild-sand', value: '#f5f5f5', default: true },
    ],
    viewport: {
        viewports: MINIMAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    },
});

configure(require.context('../src/components', true, /\.stories\.js$/), module);
