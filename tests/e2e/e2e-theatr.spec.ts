import {test, expect} from '@playwright/test'


test.describe.parallel("Results", () => {

    test("Places on Balcony", async({page}) => {
        await page.goto('https://my.laphil.com/en/syos2/package/1183')
        await page.click('#Balcony')
        await page.click('.syos-level-selector__button')
    
        const message = await page.locator('.syos-enhanced-notice__message')
        await expect(message).toContainText("We couldn't find 2 seats together. Please try again with a different quantity or in a different section.") 

        await page.screenshot({ path: 'res1.png' });
    })

    test("Places on Terrace", async({page}) => {
        await page.goto('https://my.laphil.com/en/syos2/package/1183')
        await page.click('#Terrace')
        await page.click('.syos-level-selector__button')

        const message = await page.locator('.syos-enhanced-notice__message')
        await expect(message).toContainText("We couldn't find 2 seats together. Please try again with a different quantity or in a different section.") 

        await page.screenshot({ path: 'res2.png' });

    })

    test("Places on TerrE", async({page}) => {
        await page.goto('https://my.laphil.com/en/syos2/package/1183')
        await page.click('#TerrE')
        await page.click('.syos-level-selector__button')

         const places1 = await page.locator('#seat-47-B-6')
        await expect(places1).toBeChecked()
        const places2 = await page.locator('#seat-49-B-6')
        await expect(places2).toBeVisible()

        await page.screenshot({ path: 'res3.png' });

    })

})
