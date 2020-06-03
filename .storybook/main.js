module.exports = {
    addons: [
        '@storybook/addon-notes/register-panel',
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-links/register',
    ],

    stories: ['../src/stories/welcome/welcome.stories.js', '../src/**/*.(stories|story).(js|ts|tsx)'],
};
