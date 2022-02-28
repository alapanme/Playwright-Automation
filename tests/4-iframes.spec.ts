import { test, expect } from '@playwright/test';

test.describe('Example to demonstrate testing of simple and nested iframes in Playwright', () => {

    test('Simple iframe - Input text in the text editor which is inside an iframe', async ({ page }) => {
        await page.goto('http://the-internet.herokuapp.com/iframe')
        const textarea = await page.frameLocator('#mce_0_ifr').locator('#tinymce')
        await textarea.fill('Testersdock.com')
        await expect(textarea).toHaveText('Testersdock.com')
    })

    test('Nested iframe - Assert texts from each iframes', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/nested_frames')

        const topframe = await page.frameLocator('[name="frame-top"]')
        const leftframebody = await topframe.frameLocator('[name="frame-left"]').locator('body')
        await expect(leftframebody).toHaveText('LEFT')

        const middleframebody = await topframe.frameLocator('[name="frame-middle"]').locator('body')
        await expect(middleframebody).toHaveText('MIDDLE')

        const rightframebody = await topframe.frameLocator('[name="frame-right"]').locator('body')
        await expect(rightframebody).toHaveText('RIGHT')

        const bottomframebody = await page.frameLocator('[name="frame-bottom"]').locator('body')
        await expect(bottomframebody).toHaveText('BOTTOM')
    })
})