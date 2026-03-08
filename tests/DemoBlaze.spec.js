import { test, expect, page} from '@playwright/test';
import { Homepage } from '../pages_demoblaze/Homepage';
import { ProductPage } from '../pages_demoblaze/ProductPage';
import { objectManager } from '../pages_demoblaze/objectManager';

 const pom = new objectManager(page);

test("user registration", async({page})=>{
    // const homePage = new Homepage(page);
    // await homePage.launchApplication("https://www.demoblaze.com/");
    // await homePage.userSignup();

    await pom.getHomepage().launchApplication("https://www.demoblaze.com/")
    await pom.getHomepage().userSignup();

})

test.only("order product", async({page})=>{
    //test steps
    // const homePage = new Homepage(page);
    // const productPage = new ProductPage(page);
    // await homePage.launchApplication("https://www.demoblaze.com/");
    // await homePage.userLogin();
    // await productPage.findProduct('MacBook air');
    // await productPage.addProduct()
    // await page.pause();

   
    await pom.getHomepage().getHomepage().launchApplication("https://www.demoblaze.com/");
    await pom.getHomepage().userLogin();
    await pom.getProductPage().findProduct('MacBook air');
    await pom.getProductPage().addProduct()
    await page.pause();

})