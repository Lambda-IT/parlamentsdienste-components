import { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    staticDirs: [
        {
            from: '../node_modules/@parlamentsdienste/pdcomponents-core/dist/parlamentsdienstecore/assets',
            to: '/assets',
        },
        {
            from: '../node_modules/@parlamentsdienste/pdcomponents-core/dist/parlamentsdienstecore',
            to: '/assets',
        },
    ],
};
export default config;
