// global-setup.js
import { chromium } from '@playwright/test';
import { env } from './env.js';

export default async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(env.baseURL);
  await page.fill('#username', env.username);
  await page.fill('#password', env.password);
  await page.click('#loginBtn');

  await page.context().storageState({ path: 'flipkart_auth.json' });
  await browser.close();
};
