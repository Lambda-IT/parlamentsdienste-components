import { expect, test } from '@playwright/test';

test('pd-input', async ({ page }) => {
    await page.goto('/');
    const input = await page.locator('[data-test="pd-input"] input');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            // msg.args()[1] is the actual object logged
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    await input.fill('Playwright test value');
    await page.waitForTimeout(500);

    expect(formValue.input).toBe('Playwright test value');
});

test('pd-dropdown', async ({ page }) => {
    await page.goto('/');
    const dropdown = await page.locator('[data-test="pd-dropdown"] button');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    // Open dropdown and select a new item
    await dropdown.click();

    const option = await page.locator('pd-dropdown-item').nth(2); // Select second item
    await option.click();
    await page.waitForTimeout(500);

    expect(formValue.dropdown.label).toBe('Pa.Iv. Semadeni. Fakultatives');
});

test('pd-combobox selectable', async ({ page }) => {
    await page.goto('/');
    const combobox = await page.locator('[data-test="pd-combobox-selectable"] input');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    await combobox.fill('Mitt');
    await page.waitForTimeout(500);

    const option = await page.locator('[data-test="pd-combobox-selectable"] pd-dropdown-item').nth(0); // Select first item
    await option.click();
    await page.waitForTimeout(500);

    expect(formValue.comboboxSelectable.label).toBe('Mitteilungen und Verschiedenes');
});

test('pd-combobox multiselect', async ({ page }) => {
    await page.goto('/');
    const combobox = await page.locator('[data-test="pd-combobox-multiselect"] [data-test="pd-combobox-input"]');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    // Open combobox and select multiple items
    await combobox.click();
    // await page.waitForTimeout(500);

    // first item is emptyitem
    const option1 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(1); // deselect first item
    const option2 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(3); // select third item
    const option3 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(4); // select fourth item
    await option1.click();
    await option2.click();
    await option3.click();
    await page.waitForTimeout(500);

    // The comboboxMultiselect value should be an array of selected items
    expect(Array.isArray(formValue.comboboxMultiselect)).toBe(true);
    expect(formValue.comboboxMultiselect.length).toBeGreaterThanOrEqual(2);
    expect(formValue.comboboxMultiselect[0].label).toBe('Pa.Iv. Semadeni. Fakultatives');
    expect(formValue.comboboxMultiselect[1].label).toBe('Obligatorisches');
    expect(formValue.comboboxMultiselect[2].label).toBe('Anfrage');
});

test('pd-datepicker', async ({ page }) => {
    await page.goto('/');
    const dateInput = await page.locator('[data-test="pd-datepicker"] [data-test="pd-datepicker-input"]');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    // Open datepicker
    await dateInput.click();
    await page.waitForTimeout(500);

    // Select July 16, 2025
    const day = await page.locator('.flatpickr-day[aria-label="July 16, 2025"]');
    await day.click();
    await page.waitForTimeout(500);

    // The date prop should have dateStr: "2025-07-16"
    expect(formValue.date).toBeDefined();
    expect(formValue.date.dateStr).toBe('2025-07-16');
});

test('pd-checkbox', async ({ page }) => {
    await page.goto('/');
    const checkbox = await page.locator('[data-test="pd-checkbox"]');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    // Toggle checkbox
    await checkbox.click();
    await page.waitForTimeout(200);

    // The checkbox value should be toggled
    expect(formValue.checkbox).toBe(false);
    // Toggle again
    await checkbox.click();
    await page.waitForTimeout(200);
    expect(formValue.checkbox).toBe(true);
});

test('pd-radio-group', async ({ page }) => {
    await page.goto('/');
    const radio1 = await page.locator('[data-test="pd-radio-1"]');
    const radio2 = await page.locator('[data-test="pd-radio-2"]');
    const radio3 = await page.locator('[data-test="pd-radio-3"]');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    // Select radio 1
    await radio1.click();
    await page.waitForTimeout(200);
    expect(formValue.radio).toBe('1');

    // Select radio 2
    await radio2.click();
    await page.waitForTimeout(200);
    expect(formValue.radio).toBe('2');

    // Select radio 3
    await radio3.click();
    await page.waitForTimeout(200);
    expect(formValue.radio).toBe('3');
});

test('pd-slider', async ({ page }) => {
    await page.goto('/');
    const slider = await page.locator('[data-test="pd-slider"] input[type="range"]');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    // Change slider value
    await slider.fill('70');
    await page.waitForTimeout(200);
    expect(formValue.slider).toBe(70);

    await slider.fill('30');
    await page.waitForTimeout(200);
    expect(formValue.slider).toBe(30);
});

test('pd-textarea', async ({ page }) => {
    await page.goto('/');
    const textarea = await page.locator('[data-test="pd-textarea"] textarea');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    // Change textarea value
    await textarea.fill('Playwright textarea value');
    await page.waitForTimeout(200);
    expect(formValue.textarea).toBe('Playwright textarea value');

    await textarea.fill('Another value');
    await page.waitForTimeout(200);
    expect(formValue.textarea).toBe('Another value');
});

test('pd-button', async ({ page }) => {
    await page.goto('/');
    const button = await page.locator('[data-test="pd-button"]');
    const input = await page.locator('[data-test="pd-input"] input');

    let buttonClicked = false;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().includes('Button clicked')) {
            buttonClicked = true;
        }
    });

    // Click the button
    await button.click();
    await page.waitForTimeout(500);

    // Check that the button was clicked and input is disabled
    expect(buttonClicked).toBe(true);
    expect(await input.isDisabled()).toBe(true);
});
