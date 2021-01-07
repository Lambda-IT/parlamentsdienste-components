module.exports = {
    addons: [
        '@storybook/addon-notes/register-panel',
        '@storybook/addon-controls',
        '@storybook/addon-actions',
        '@storybook/addon-viewport',
    ],

    stories: ['../src/stories/welcome/welcome.stories.js', '../src/**/*.(stories|story).(js|ts|tsx)'],
};
