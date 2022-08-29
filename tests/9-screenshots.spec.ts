import { test, expect } from '@playwright/test';

test.describe('Example to demonstrate File Upload in Playwright', () => {

    test('Capture screenshot of the visible window', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        await page.screenshot({ path: 'screenshot/visibleWindow.png' });
    })

    test('Capture screenshot of the entire scrollable webpage', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        await page.screenshot({ path: 'screenshot/fullPage.png', fullPage: true });
    })

    test('Capture screenshot of an element', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown')
        await page.locator('#dropdown').screenshot({ path: 'screenshot/elementScreenshot.png' });
    })

    test('Automatically Capture screenshot when Test Fails ', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login')
        await expect(page.locator('#username')).toBeVisible({ timeout: 2000 })
        await page.fill('#username', 'tomsmith')
        await page.fill('#password', 'wrong-password')
        await page.click('button[type="submit"]')
        await expect(page.locator('div#flash')).toContainText('You logged into a secure area!')
    })
})