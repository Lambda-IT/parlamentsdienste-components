import { newE2EPage } from '@stencil/core/testing';

describe('pd-modal', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-modal></pd-modal>');

        const element = await page.find('pd-modal');
        expect(element).toHaveClass('hydrated');
    });
});
