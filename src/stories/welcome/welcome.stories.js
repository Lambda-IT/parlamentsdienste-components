import { withLinks } from '@storybook/addon-links';

export default {
    title: 'Introduction|Welcome',
    decorators: [withLinks],
};

export const welcome = () => `
<div class="text-center m-5">
    <h1>Welcome to the Parlamentsdienst Design System</h1>
    <p>Here you'll find all the core components and documentation you need to create a webapp.<p/>
    
    <div>
        <pd-button data-sb-story="get-started" class="mt-3">Get started</pd-button>
        <a href="https://github.com/Lambda-IT/parlamentsdienste-components" target="_blank"><pd-button outline>GITHUB</pd-button></a>
    </div>
    <div class="m-2">
        <pd-button href="https://stenciljs.com/docs/overview">Framework integration</pd-button>
    </div>

    <p class="mt-3"><strong>Read more</strong>
    <ul>
        <li>Web Components: <a href="https://developer.mozilla.org/en/docs/Web/Web_Components" target="_blank">Mozilla Developer - Web Components</a></li>
        <li>Building Web Components with StencilJS: <a href="https://stenciljs.com/" target="_blank">StencilJS</a></li>
        <li>Visual styleguide with Storybook: <a href="https://storybook.js.org/" target="_blank">Storybook</a></li>
    </ul>
</div>
`;

export const getStarted = () => `
    ...
`;
