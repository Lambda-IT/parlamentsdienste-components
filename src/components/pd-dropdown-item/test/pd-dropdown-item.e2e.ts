import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-item', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-dropdown-item></pd-dropdown-item>');

        const element = await page.find('pd-dropdown-item');
        expect(element).toHaveClass('hydrated');
    });
});
