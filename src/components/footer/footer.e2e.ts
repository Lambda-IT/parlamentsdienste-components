import { newE2EPage } from '@stencil/core/testing';

describe('pd-footer', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-footer></pd-footer>');

        const element = await page.find('pd-footer');
        expect(element).toHaveClass('hydrated');
    });
});
