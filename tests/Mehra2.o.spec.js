import { test, expect } from '@playwright/test';

let username = 'user' + Date.now();
let password = 'Test@123';
let accountNumber = '';

test('new user registration', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.click('text=Register');

  await page.fill('#customer\\.firstName', 'Test');
  await page.fill('#customer\\.lastName', 'User');
  await page.fill('#customer\\.address\\.street', 'Street 1');
  await page.fill('#customer\\.address\\.city', 'Delhi');
  await page.fill('#customer\\.address\\.state', 'DL');
  await page.fill('#customer\\.address\\.zipCode', '110001');
  await page.fill('#customer\\.phoneNumber', '9999999999');
  await page.fill('#customer\\.ssn', '1234');

  await page.fill('#customer\\.username', username);
  await page.fill('#customer\\.password', password);
  await page.fill('#repeatedPassword', password);

  await page.click('input[value="Register"]');

  await expect(page.locator('text=Your account was created successfully')).toBeVisible();
});

