import { test, expect } from '@playwright/test';

test('Working with Checkboxes', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    //Assert that the checkboxes are visible on the webpage
    await expect(page.locator('#checkboxes')).toBeVisible()

    //Assert checkbox1 is un-checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()

    //Assert checkbox2 is checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy()

    //Check checkbox 1
    await page.check('input[type=checkbox]:nth-child(1)')

    //Un-check checkbox 2
    await page.uncheck('input[type=checkbox]:nth-child(3)')

    //Assert checkbox1 is now checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeTruthy()

    //Assert checkbox2 is now un-checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeFalsy()
})


