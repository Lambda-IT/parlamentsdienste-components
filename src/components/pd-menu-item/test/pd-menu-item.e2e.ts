import { newE2EPage } from '@stencil/core/testing';

describe('menu-item', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-menu-item></pd-menu-item>');

        const element = await page.find('pd-menu-item');
        expect(element).toHaveClass('hydrated');
    });
});
