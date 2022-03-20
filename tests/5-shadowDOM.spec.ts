import { test, expect } from '@playwright/test';

test.describe('Example to demonstrate handling of Shadow DOM in Playwright', () => {

    test('Input a text in the input box and after search validate one of the book title', async ({ page }) => {
        await page.goto('https://books-pwakit.appspot.com/')
        await page.locator('#input').fill('Science')
        await page.keyboard.press('Enter')
        await expect(page.locator('text=What is Science?')).toBeVisible()
    })
})