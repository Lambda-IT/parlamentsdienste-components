import { newE2EPage } from '@stencil/core/testing';

describe('pd-navbar', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-navbar></pd-navbar>');

        const element = await page.find('pd-navbar');
        expect(element).toHaveClass('hydrated');
    });
});
