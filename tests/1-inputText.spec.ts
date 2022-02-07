import { test, expect } from '@playwright/test';

test('Example to demonstrate text input and basic assertions', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login')

  await expect(page.locator('#username')).toBeVisible({ timeout: 2000 })

  await page.fill('#username', 'tomsmith')

  await page.fill('#password', 'SuperSecretPassword!')

  await page.click('button[type="submit"]')

  await expect(page.locator('div#flash')).toContainText('You logged into a secure area!')

  await page.click('a[href="/logout"]')

  await expect(page.locator("#username")).toBeVisible({ timeout: 2000 })

  await expect(page.locator('div#flash')).toContainText('You logged out of the secure area!')
})


