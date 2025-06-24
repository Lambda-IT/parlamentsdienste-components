import { newE2EPage } from '@stencil/core/testing';

describe('pd-checkbox', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-checkbox></pd-checkbox>');

        const element = await page.find('pd-checkbox');
        expect(element).toHaveClass('hydrated');
    });
});
