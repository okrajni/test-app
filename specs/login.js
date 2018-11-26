const LoginComponent = require('../page_objects/login.component')

describe('login flow for AnyMind app', function() {

  beforeEach(async function () {
    await browser.get("")
  })

  afterEach(async function () {
    await browser.executeScript('window.sessionStorage.clear()')
    await browser.executeScript('window.localStorage.clear()')
  })

  it('login with invalid data', async function () {
    await LoginComponent.loginButton.click()
    await LoginComponent.emailField.sendKeys('test@.mail')
    await LoginComponent.nextButon.click()
    expect(await LoginComponent.emailValidation.isDisplayed()).toBe(true)
    expect(await LoginComponent.termsValidation.isDisplayed()).toBe(true)
    await LoginComponent.emailField.clear()
    await LoginComponent.emailField.sendKeys('test@mail.mail')
    await LoginComponent.termsCheckbox.click()
    await LoginComponent.nextButon.click()
    await LoginComponent.numberField.sendKeys('78466617')
    await LoginComponent.nextButon.click()
    expect(await LoginComponent.telValidation.isDisplayed()).toBe(true)
    await LoginComponent.numberField.clear()
    await LoginComponent.numberField.sendKeys('784666178')
    await LoginComponent.nextButon.click()
    await LoginComponent.passwordField.sendKeys('123wrong_=)')
    await LoginComponent.nextButon.click()
    expect(await LoginComponent.passValidation.isDisplayed()).toBe(true)
  })
})