import { test, expect } from "@playwright/test";

import { PageObjectManager } from '../pageobject/PageObjectManager';
import testdata from '../testdata/testdata.json'

test.only("Order Product", async ({ page }) => {
    const data = testdata['Order Product'];
    const pageObjectManager = new PageObjectManager(page);
    await pageObjectManager.getLoginPage().launchApplication('https://rahulshettyacademy.com/client/');
    await pageObjectManager.getLoginPage().userLogin(data.username, data.password);
    await pageObjectManager.getDashboardPage().selectProduct(data.product_name);
    await pageObjectManager.getCartPage().reviewCart(data.product_name);
    await pageObjectManager.getCheckoutPage().placeOrder();
    const generatedOrder = await pageObjectManager.getConfirmationPage().verifyOrder();
    await pageObjectManager.getOrderHistoryPage().verifyOrderHistory(data.product_name, generatedOrder);
})