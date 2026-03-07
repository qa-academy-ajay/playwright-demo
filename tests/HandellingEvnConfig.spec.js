import { test, expect } from '../fixtures/test-fixtures.js';
const config = require('../config/globalConfig');

test("How to handle env config", async({page, loginPage})=>{
    console.log(config)
})