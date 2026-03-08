import { test as base, expect } from '@playwright/test';

// Import your page objects
import { LoginPage } from '../pages_rahulshettyacademy/LoginPage';
import { DashboardPage } from '../pages_rahulshettyacademy/DashboardPage';
import { CartPage } from '../pages_rahulshettyacademy/CartPage';
import { CheckoutPage } from '../pages_rahulshettyacademy/CheckoutPage';
import { ConfirmationPage } from '../pages_rahulshettyacademy/ConfirmationPage';
import { OrderHistoryPage } from '../pages_rahulshettyacademy/OrderHistoryPage';

// Extend the base test with fixtures for page objects
const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  CartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  CheckoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  ConfirmationPage: async ({ page }, use) => {
    await use(new ConfirmationPage(page));
  },
  OrderHistoryPage: async ({ page }, use) => {
    await use(new OrderHistoryPage(page));
  },
});

export { test, expect };
