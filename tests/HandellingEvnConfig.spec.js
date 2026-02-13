import { test, expect } from '../fixtures/test-fixtures.js';
import  {env} from '../config/env';

test("How to handle env config", async({page, loginPage})=>{
    // console.log(env)
    await loginPage.launchApplication(env.baseURL);

})