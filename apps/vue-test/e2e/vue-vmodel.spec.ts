import { expect, test } from '@playwright/test';

test('pd-input', async ({ page }) => {
    await page.goto('/');
    const input = await page.locator('[data-test="pd-input"] input');

    let inputValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('input changed:')) {
            const valueHandle = msg.args()[1];
            inputValue = await valueHandle.jsonValue();
        }
    });

    await input.fill('Playwright test value');
    await page.waitForTimeout(500);

    expect(inputValue).toBe('Playwright test value');
});

test('pd-dropdown', async ({ page }) => {
    await page.goto('/');
    const dropdown = await page.locator('[data-test="pd-dropdown"] button');

    let dropdownValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('dropdown changed:')) {
            const valueHandle = msg.args()[1];
            dropdownValue = await valueHandle.jsonValue();
        }
    });

    await dropdown.click();
    const option = await page.locator('pd-dropdown-item').nth(2); // Select second item
    await option.click();
    await page.waitForTimeout(500);

    expect((dropdownValue as { label: string }).label).toBe('Pa.Iv. Semadeni. Fakultatives');
});

test('pd-combobox selectable', async ({ page }) => {
    await page.goto('/');
    const combobox = await page.locator('[data-test="pd-combobox-selectable"] input');

    let comboboxSelectableValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('comboboxSelectable changed:')) {
            const valueHandle = msg.args()[1];
            comboboxSelectableValue = await valueHandle.jsonValue();
        }
    });

    await combobox.fill('Mitt');
    await page.waitForTimeout(500);
    const option = await page.locator('[data-test="pd-combobox-selectable"] pd-dropdown-item').nth(0); // Select first item
    await option.click();
    await page.waitForTimeout(500);

    expect((comboboxSelectableValue as { label: string }).label).toBe('Mitteilungen und Verschiedenes');
});

test('pd-combobox multiselect', async ({ page }) => {
    await page.goto('/');
    const combobox = await page.locator('[data-test="pd-combobox-multiselect"] [data-test="pd-combobox-input"]');

    let comboboxMultiselectValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('comboboxMultiselect changed:')) {
            const valueHandle = msg.args()[1];
            comboboxMultiselectValue = await valueHandle.jsonValue();
        }
    });

    await combobox.click();
    const option1 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(1); // deselect first item
    const option2 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(3); // select third item
    const option3 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(4); // select fourth item
    await option1.click();
    await option2.click();
    await option3.click();
    await page.waitForTimeout(500);

    const arr = comboboxMultiselectValue as Array<{ label: string }>;
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).toBeGreaterThanOrEqual(2);
    expect(arr[0].label).toBe('Pa.Iv. Semadeni. Fakultatives');
    expect(arr[1].label).toBe('Obligatorisches');
    expect(arr[2].label).toBe('Anfrage');
});

test('pd-datepicker', async ({ page }) => {
    await page.goto('/');
    const dateInput = await page.locator('[data-test="pd-datepicker"] [data-test="pd-datepicker-input"]');

    let dateValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('date changed:')) {
            const valueHandle = msg.args()[1];
            dateValue = await valueHandle.jsonValue();
        }
    });

    await dateInput.click();
    await page.waitForTimeout(500);
    const day = await page.locator('.flatpickr-day[aria-label="July 16, 2025"]');
    await day.click();
    await page.waitForTimeout(500);

    expect(dateValue).toBe('2025-07-16');
});

test('pd-checkbox', async ({ page }) => {
    await page.goto('/');
    const checkbox = await page.locator('[data-test="pd-checkbox"]');

    let checkboxValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('checkbox changed:')) {
            const valueHandle = msg.args()[1];
            checkboxValue = await valueHandle.jsonValue();
        }
    });

    await checkbox.click();
    await page.waitForTimeout(200);
    expect(checkboxValue).toBe(false);
    await checkbox.click();
    await page.waitForTimeout(200);
    expect(checkboxValue).toBe(true);
});

test('pd-radio-group', async ({ page }) => {
    await page.goto('/');
    const radio1 = await page.locator('[data-test="pd-radio-1"]');
    const radio2 = await page.locator('[data-test="pd-radio-2"]');
    const radio3 = await page.locator('[data-test="pd-radio-3"]');

    let radioValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('radio changed:')) {
            const valueHandle = msg.args()[1];
            radioValue = await valueHandle.jsonValue();
        }
    });

    await radio1.click();
    await page.waitForTimeout(200);
    expect(radioValue).toBe('1');
    await radio2.click();
    await page.waitForTimeout(200);
    expect(radioValue).toBe('2');
    await radio3.click();
    await page.waitForTimeout(200);
    expect(radioValue).toBe('3');
});

test('pd-slider', async ({ page }) => {
    await page.goto('/');
    const slider = await page.locator('[data-test="pd-slider"] input[type="range"]');

    let sliderValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('slider changed:')) {
            const valueHandle = msg.args()[1];
            sliderValue = await valueHandle.jsonValue();
        }
    });

    await slider.fill('70');
    await page.waitForTimeout(200);
    expect(sliderValue).toBe(70);
    await slider.fill('30');
    await page.waitForTimeout(200);
    expect(sliderValue).toBe(30);
});

test('pd-textarea', async ({ page }) => {
    await page.goto('/');
    const textarea = await page.locator('[data-test="pd-textarea"] textarea');

    let textareaValue: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('textarea changed:')) {
            const valueHandle = msg.args()[1];
            textareaValue = await valueHandle.jsonValue();
        }
    });

    await textarea.fill('Playwright textarea value');
    await page.waitForTimeout(200);
    expect(textareaValue).toBe('Playwright textarea value');
    await textarea.fill('Another value');
    await page.waitForTimeout(200);
    expect(textareaValue).toBe('Another value');
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

    await button.click();
    await page.waitForTimeout(500);

    expect(buttonClicked).toBe(true);
    expect(await input.isDisabled()).toBe(true);
});
