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
                    <label class="pd-datepicker-label">
                        <div class="wrapper">
                            <pd-input class="pd-datepicker-input" data-input></pd-input>
                            <pd-icon class="pd-datepicker-icon" name="calendar" size="2.4"></pd-icon>
                        </div>
                    </label>
                </mock:shadow-root>
            </pd-datepicker>
        `);
    });
});
