import { newE2EPage } from '@stencil/core/testing';

describe('pd-list-item-expandable', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-list-item-expandable></pd-list-item-expandable>');

        const element = await page.find('pd-list-item-expandable');
        expect(element).toHaveClass('hydrated');
    });
});
