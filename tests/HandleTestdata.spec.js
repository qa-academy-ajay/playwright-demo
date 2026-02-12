import { test } from '@playwright/test';
const testdata = require('../testdata/testdata.json');
const config = require('../testdata/config.json');


test.only("how to handle test data for data driven test", { tag: ["@TC02", "@Smoke"] }, async ({ page }) => {
    const testname = test.info().tags[0];
    const records = testdata[testname];
    for (const record of records) {
        console.log(record.firstname);
        //playwroght steps
    }

})

test("how to handle test data for indivisual test", { tag: "@TC03" }, async ({ page }) => {
    const testname = test.info().tags;
    console.log(testdata[testname].firstname);
    console.log(testdata[testname].lastname);
    // console.log(testdata[test.info().tags])
    //step 

})