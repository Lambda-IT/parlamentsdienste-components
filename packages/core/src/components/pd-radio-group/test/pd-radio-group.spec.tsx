import { newSpecPage } from '@stencil/core/testing';
import { PdRadioGroup } from '../pd-radio-group';

describe('pd-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdRadioGroup],
      html: `<pd-radio-group></pd-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-radio-group>
    `);
  });
});
