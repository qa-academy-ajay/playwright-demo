const { test, expect } = require('@playwright/test');

test('Example: Wait for element enabled using waitForSelector() in Playwright.', async ({ page }) => {
    await page.goto('http://only-testing-blog.blogspot.com/2014/01/textbox.html');
    await page.waitForSelector('#submitButton:enabled', { timeout: 15000 });
    const button = page.locator('#submitButton');
    const isEnabled = await button.isEnabled();
    if (isEnabled) {
        console.log('Button is Enabled');
    } else {
        console.log('Button is disabled');
    }
});

test('Example: Wait for element to be enabled in Playwright by Polling for Element State.', async ({ page }) => {
    await page.goto('http://only-testing-blog.blogspot.com/2014/01/textbox.html');
    async function waitForEnabled(element, timeout = 30000) {
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            if (await element.isEnabled()) {
                return true;
            }
            await page.waitForTimeout(100);
        }
        throw new Error(`Element not enabled within ${timeout}ms`);
    }
    const button = page.locator('#submitButton');
    await waitForEnabled(button);
    if (button) {
        console.log('Button is Enabled');
    } else {
        console.log('Button is disabled');
    }
});

