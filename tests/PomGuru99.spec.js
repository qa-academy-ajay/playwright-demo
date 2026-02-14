import { test, expect } from "@playwright/test";

import { PageObjectManager } from '../guru99_pages/PageObjectManager';

import testdata from '../testdata/testdata_guru99.json'

test("add new customer", async({page})=>{

    const data = testdata['@TC02'];
    const pom = new PageObjectManager(page);

   for(const dataset of data ){
    console.log(dataset.username, dataset.password)
    //  await pom.getLoginPage().launchApplication('https://demo.guru99.com/V4/');
    // await pom.getLoginPage().userLogin(dataset.username, dataset.password);

    // await pom.getHomepage().navigateToNewCust();
    // await page.pause()
    // await pom.getNewCustPage().addNewCustomer();
   }




})