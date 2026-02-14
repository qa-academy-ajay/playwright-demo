import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://shop.qaautomationlabs.com/index.php');
    await page.getByRole('textbox', { name: 'Email' }).fill('demo@demo.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('demo');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Shop Now' }).nth(2).click();
    await page.getByText('Formal', { exact: true }).click();
    await page.getByText('$101 - $').click();
    await page.getByText('Medium').click();
    await expect(page.locator('#product-list')).toContainText('$200');//validation
    await page.getByRole('button', { name: ' Add to Cart' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: 'Proceed To Checkout' }).click();
    await page.getByRole('textbox', { name: 'Enter First Name' }).fill('aman');
    await page.getByRole('textbox', { name: 'Enter Last Name' }).fill('kr');
    await page.getByRole('textbox', { name: 'example@email.com' }).fill('aahhha@gmail.com');
    await page.getByPlaceholder('9876543210').fill('4353434646');
    await page.getByRole('textbox', { name: 'Enter Address' }).fill('ashjkjfgkdf');
    await page.getByRole('textbox', { name: 'Enter State' }).fill('jhj');
    await page.getByRole('textbox', { name: 'Enter City' }).fill('hkjh');
    await page.getByPlaceholder('Enter Pin Code').fill('67867');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'Place Order' }).click();
    await page.getByRole('heading', { name: '🎉 Thank You for Your Order!' }).click();
});