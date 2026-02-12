import { test, expect } from '@playwright/test';


test("get session info", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.pause();
    await context.storageState({ path: 'flipkart_auth.json' }); 
})

test("cookies and session", async ({ browser }) => {
    const context = await browser.newContext({storageState: 'flipkart_auth.json'});
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.pause();
    //steps
})