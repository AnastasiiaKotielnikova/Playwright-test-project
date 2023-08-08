import {test} from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { Navbar } from '../../page-objects/components/Navbar'
import { PaymentPage } from '../../page-objects/PaymentPage'

test.describe("New Payment", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let paymentPage: PaymentPage
    let navbar: Navbar
    //Login
    test.beforeEach(async ({page}) => {
        // await page.goto('http://zero.webappsecurity.com/index.html')
        // await page.click('#signin_button')
        // await page.type('#user_login', 'username')
        // await page.type('#user_password', 'password')
        // await page.click('text=Sign in')
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        paymentPage = new PaymentPage(page)
        navbar = new Navbar(page)

        await homePage.visit()
        await homePage.clickOnSignIn()
        await loginPage.login("username", "password")
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    })

    test("Should send new payment", async ({page}) => {
        // await page.click('#pay_bills_tab')
        await navbar.clickOnTab('Pay Bills')
        // await page.selectOption('#sp_payee', 'apple')
        // await page.click('#sp_get_payee_details')
        // await page.waitForSelector('#sp_payee_details')
        // await page.selectOption('#sp_account', '6')
        // await page.type('#sp_amount', '5000')
        // await page.type('#sp_date', '2023-07-27')
        // await page.type('#sp_description', 'some random message')
        // await page.click('#pay_saved_payees')
        await paymentPage.createPayment()
        await paymentPage.assertSuccessMessage()

        // const message = await page.locator('#alert_content > span')
        // await expect(message).toBeVisible()
        // await expect(message).toContainText('The payment was successfully submitted.')
    })
})