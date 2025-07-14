import { newE2EPage } from '@stencil/core/testing';

describe('pd-panel-footer', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-panel-footer></pd-panel-footer>');

        const element = await page.find('pd-panel-footer');
        expect(element).toHaveClass('hydrated');
    });
});
