import { newE2EPage } from '@stencil/core/testing';

describe('pd-animation', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-animation></pd-animation>');

        const element = await page.find('pd-animation');
        expect(element).toHaveClass('hydrated');
    });
});
