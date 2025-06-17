/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    staticDirs: [
        {
            from: '../node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/assets/fonts',
            to: '/assets/fonts',
        },
        {
            from: '../node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/assets-icon',
            to: '/assets-icon',
        },
        // { from: '../dist/parlamentsdienstecore/assets-animation', to: '/assets/assets-animation' },
    ],
};
export default config;
