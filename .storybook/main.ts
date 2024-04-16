import { StorybookConfig } from '@storybook/html-vite';
import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    staticDirs: [{ from: '../dist/parlamentsdienstecore/assets-fonts', to: '/assets/fonts' }],
};
export default config;
