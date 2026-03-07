import { test, expect } from "@playwright/test";

import { PageObjectManager } from '../pages/PageObjectManager';

import testdata from '../testdata/testdata.json'
// import { LoginPage } from "../pageobject/LoginPage";
// import { Homepage } from "../pageobject/HomePage";
// import { NewCustPage } from "../pageobject/NewCustPage";

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

test("add new customer", async({page})=>{

    const data = testdata['@TC04'];
    const pom = new PageObjectManager(page);

    await pom.getLoginPage().launchApplication('https://demo.guru99.com/V4/');
    await pom.getLoginPage().userLogin(data.username, data.password);
    await pom.getHomepage().navigateToNewCust();
    await page.pause()
    await pom.getNewCustPage().addNewCustomer();




})