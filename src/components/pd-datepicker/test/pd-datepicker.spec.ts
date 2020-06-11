import { Datepicker } from '../pd-datepicker';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-datepicker', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Datepicker],
            html: `<pd-datepicker></pd-datepicker>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-datepicker>
            <mock:shadow-root>
                <div class="wrapper">
                    <pd-input data-input></pd-input>
                </div>
            </mock:shadow-root>
          </pd-datepicker>
        `);
    });
});
