const LoginComponent = function () {

    this.loginButton      = element(by.css('div.small-button-container'))

    this.emailField        = element(by.xpath('//input[@type="email"]'))
    this.numberField       = element(by.xpath('//input[@type="tel"]'))
    this.passwordField     = element(by.xpath('//input[@type="password"]'))

    this.termsCheckbox     = element(by.xpath('(//*[@class="input__label"])[1]'))
    this.agreementCheckbox = element(by.xpath('(//*[@class="input__label"])[2]'))
    
    this.emailValidation   = element(by.xpath('(//*[@class="validation-alert__content"])[1]'))
    this.termsValidation   = element(by.xpath('(//*[@class="validation-alert__content"])[2]'))
    this.telValidation    = element(by.xpath('(//*[@class="validation-alert__content"])[1]'))
    this.passValidation   = element(by.xpath('(//*[@class="validation-alert__content"])[1]'))

    this.nextButon         = element(by.xpath('(//*[@type="submit"])'))
    this.backButon         = element(by.xpath('(//*/span)[1]'))
}
module.exports = new LoginComponent()