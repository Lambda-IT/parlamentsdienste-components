import { newE2EPage } from '@stencil/core/testing';

describe('pd-modal', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.evaluate(() => {
            const modal = document.createElement('pd-modal');
            modal.config = { title: 'Test Modal', zIndex: '1000', backdropVisible: true };
            modal.innerHTML = `
                <p>Modal Content</p>
                <div slot="footer">
                    <pd-button outline>Cancel</pd-button>
                    <pd-button>Save</pd-button>
                </div>`;
            document.body.appendChild(modal);
        });
        await page.waitForChanges();

        const element = await page.find('pd-modal');
        expect(element).not.toBeNull();
    });
});
