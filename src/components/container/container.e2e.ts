import { newE2EPage } from '@stencil/core/testing';

describe('pd-container', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-container></pd-container>');

        const element = await page.find('pd-container');
        expect(element).toHaveClass('hydrated');
    });
});
