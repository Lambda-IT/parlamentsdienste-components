import { newE2EPage } from '@stencil/core/testing';

describe('pd-panel', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-panel></pd-panel>');

        const element = await page.find('pd-panel');
        expect(element).toHaveClass('hydrated');
    });
});
