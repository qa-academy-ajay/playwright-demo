import { test, expect } from '@playwright/test';
import { Homepage } from '../demoblaze_Pages/Homepage';
import { ProductPage } from '../demoblaze_Pages/ProductPage';

test("user registration", async({page})=>{
    const homePage = new Homepage(page);
    await homePage.launchApplication("https://www.demoblaze.com/");
    await homePage.userSignup();

})

test.only("order product", async({page})=>{
    //test steps
    const homePage = new Homepage(page);
    const productPage = new ProductPage(page);
    await homePage.launchApplication("https://www.demoblaze.com/");
    await homePage.userLogin();
    await productPage.findProduct('MacBook air');
    await page.pause();

})