import { test } from '@playwright/test';
import {loadTestData} from '../utils/loadTestData.js';

let data;
test.beforeEach(async ({ }, testInfo) => {
    const path = testInfo.titlePath[0].split(".")[0].trim();//extracting path from test title ex: HandleTestdata01 from "HandleTestdata01-TC01-Valid User"
    const testid = testInfo.title.split("-")[0].trim();//extracting test id from test title ex: TC01 from "TC01-Valid User"
    data = await loadTestData(path, testid);//loading test data based on path and test id

});

test("TC01-Valid User", { tag: ["@Smoke"] }, async ({ page }) => {
    console.log(data);
    //playwroght steps
});

test("TC02-Invalid User", async ({ page }) => {
    for (let record of data) {
        console.log(record);
        //playwroght steps
    }
})


