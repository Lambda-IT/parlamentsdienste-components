import { newE2EPage } from '@stencil/core/testing';

describe('pd-progress-bar', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-progress-bar></pd-progress-bar>');

        const element = await page.find('pd-progress-bar');
        expect(element).toHaveClass('hydrated');
    });
});
