import { newE2EPage } from '@stencil/core/testing';

describe('pd-panel-content', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-panel-content></pd-panel-content>');

        const element = await page.find('pd-panel-content');
        expect(element).toHaveClass('hydrated');
    });
});
