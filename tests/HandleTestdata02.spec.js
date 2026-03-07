import { test } from '@playwright/test';
const testdata = require('../testdata/testdata.json');


test.only("TC02-how to handle test data for data driven test", { tag: [ "@Smoke"] }, async ({ page }) => {
    const testid = test.info().title.split("-")[0].trim();
    const records = testdata[testid];
    for (const record of records) {
        console.log(record.firstname);
        //playwroght steps
    }

})

test("TC03-how to handle test data for indivisual test", { tag: "@TC03" }, async ({ page }) => {
    const testid = test.info().title.split("-")[0].trim();
    console.log(testdata[testid].firstname);
    console.log(testdata[testid].lastname);
    // console.log(testdata[test.info().tags])
    //step 

})


