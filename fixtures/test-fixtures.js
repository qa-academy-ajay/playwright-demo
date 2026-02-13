import { test as base } from '@playwright/test';
import { LoginPage } from '../pageobject/LoginPage';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});

export { expect } from '@playwright/test';
