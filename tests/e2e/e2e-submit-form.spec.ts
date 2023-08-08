import {test} from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { FeedbackPage } from '../../page-objects/FeedbackPage'

test.describe("Feedback Forn", () => {
    let homePage: HomePage
    let feedbackPage: FeedbackPage
    test.beforeEach(async ({page}) => {
        // await page.goto('http://zero.webappsecurity.com/index.html')
        // await page.click('#feedback')
        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)

        homePage.visit()
        homePage.clickOnFeedbackLink()
    })

    //Reset feedback form
    test("Reset feedback form", async ({page}) => {
        // await page.type('#name', 'some name')
        // await page.type('#email', 'some email@email.com')
        // await page.type('#subject', 'some subject')
        // await page.type('#comment', 'some nice comment about the application')
        // await page.click('input[name="clear"]')

        // const nameInput = await page.locator('#name')
        // const commentInput = await page.locator('#comment')
        // await expect(nameInput).toBeEmpty()
        // await expect(commentInput).toBeEmpty()
        await feedbackPage.fillForm("name", "email@email.com", "subject", "my awesome message")
        await feedbackPage.resetForm()
        await feedbackPage.assertReset()
    })

    //Submit feedback form
    test("Submit feedback form", async ({page}) =>{
        // await page.type('#name', 'some name')
        // await page.type('#email', 'some email@email.com')
        // await page.type('#subject', 'some subject')
        // await page.type('#comment', 'some nice comment about the application')
        // await page.click('input[type="submit"]')
        // await page.waitForSelector['#feedback-title']
        await feedbackPage.fillForm("name", "email@email.com", "subject", "my awesome message")
        await feedbackPage.submitForm()
        await feedbackPage.feedbackFormSent()

    })
})