import { expect, test } from '@playwright/test';


test('Handle simple alert dialog in playwright', async ({ page }) => {
  await page.goto('https://only-testing-blog.blogspot.com/2025/04/alert-dialogs.html');
  page.on("dialog", async (dialog) => {
    //Verify alert type.
    expect(dialog.type()).toContain("alert");
    //Verify alert message text.
    console.log(dialog.message())
    expect(dialog.message()).toContain("This is an Alert box!");
    //Accept alert.
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  });