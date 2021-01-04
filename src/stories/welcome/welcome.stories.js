import { withLinks } from '@storybook/addon-links';

export default {
    title: 'Introduction/Welcome',
    decorators: [withLinks],
};

export const welcome = () => `
<div class="m-5 welcome">
    <h1>Welcome to the Parlamentsdienst Design System</h1>
    
    <p>Here you'll find all the core components and documentation you need to create a webapp.<p/>
    
    <p>These Web-components were created using StencilJS and Storybook. For more information about how to use and integrate them into a web application, read the following links and documentation.</p>
    
    <div class="mt-3">
        <a href="https://github.com/Lambda-IT/parlamentsdienste-components" target="_blank"><pd-button>GITHUB 🔑</pd-button></a>
        <a href="https://stenciljs.com/docs/overview"><pd-button outline>Framework integration</pd-button></a>
    </div>
    <div class="m-2">
        
    </div>

    <p class="mt-3"><strong>Read more</strong>
    <ul>
        <li>Web Components: <a href="https://developer.mozilla.org/en/docs/Web/Web_Components" target="_blank">Mozilla Developer - Web Components</a></li>
        <li>Building Web Components with StencilJS: <a href="https://stenciljs.com/" target="_blank">StencilJS</a></li>
        <li>Visual styleguide with Storybook: <a href="https://storybook.js.org/" target="_blank">Storybook</a></li>
    </ul>
</div>
<style>
    .welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    ul {
        list-style-type: none;
    }
</style>
`;
