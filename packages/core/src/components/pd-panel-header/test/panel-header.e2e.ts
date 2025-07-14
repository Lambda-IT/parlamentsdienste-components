import { newE2EPage } from '@stencil/core/testing';

describe('pd-panel-header', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-panel-header></pd-panel-header>');

        const element = await page.find('pd-panel-header');
        expect(element).toHaveClass('hydrated');
    });
});
