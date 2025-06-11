/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    staticDirs: [{ from: '../node_modules/@parlamentsdienste-components/core/src/assets/fonts', to: '/assets/fonts' }],
};
export default config;
