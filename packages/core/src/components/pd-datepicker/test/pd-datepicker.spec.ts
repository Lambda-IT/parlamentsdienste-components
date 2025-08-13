import { newSpecPage } from '@stencil/core/testing';
import { Datepicker } from '../pd-datepicker';

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
                            <input class="pd-datepicker-input" data-input data-test="pd-datepicker-input" size="1">
                            <pd-icon class="calendar-icon pd-datepicker-icon" data-toggle name="calendar" size="2.4"></pd-icon>
                        </div>
                    </label>
                </mock:shadow-root>
            </pd-datepicker>
        `);
    });
});
