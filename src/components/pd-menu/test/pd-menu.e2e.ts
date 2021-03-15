import { newE2EPage } from '@stencil/core/testing';

describe('pd-menu', () => {
    it('should render', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-menu></pd-menu>');

        const element = await page.find('pd-menu');
        expect(element).toHaveClass('hydrated');
    });
});
