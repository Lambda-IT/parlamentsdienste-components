import { newE2EPage } from '@stencil/core/testing';

describe('pd-label', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-label></pd-label>');

        const element = await page.find('pd-label');
        expect(element).toHaveClass('hydrated');
    });
});
