import { addons } from '@storybook/addons';

addons.setConfig({
    enableShortcuts: false,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    isToolshown: true,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    sidebar: {
        showRoots: true,
    },
});
