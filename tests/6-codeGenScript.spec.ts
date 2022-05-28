import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // Go to https://the-internet.herokuapp.com/login
    await page.goto('https://the-internet.herokuapp.com/login');

    // Click input[name="username"]
    await page.locator('input[name="username"]').click();

    // Fill input[name="username"]
    await page.locator('input[name="username"]').fill('tomsmith');

    // Press Tab
    await page.locator('input[name="username"]').press('Tab');

    // Fill input[name="password"]
    await page.locator('input[name="password"]').fill('SuperSecretPassword!');

    // Click button:has-text("Login")
    await page.locator('button:has-text("Login")').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

});