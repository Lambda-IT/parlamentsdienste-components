import notes from './readme.md';

export default {
    title: 'vuejs|directives',
    parameters: { notes },
};

export const modelDirective = () => `
<div class="text-center m-5">
    <h1>v-model-pd Directive</h1>
    <p>Webcomponents don't work with v-model out of the box therefore we provide a custom directive which allows the same behaviour.<p/>
    </div>
  `;
