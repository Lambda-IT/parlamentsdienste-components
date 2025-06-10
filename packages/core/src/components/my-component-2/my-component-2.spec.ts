import { newSpecPage } from '@stencil/core/testing';
import { MyComponent2 } from './my-component-2';

describe('my-component', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [MyComponent2],
            html: '<my-component></my-component>',
        });
        expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
    });

    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [MyComponent2],
            html: `<my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>`,
        });
        expect(root).toEqualHtml(`
      <my-component first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-component>
    `);
    });
});
