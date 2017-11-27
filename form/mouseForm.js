/**
 * Created by Aleksandr Kuzmin on 27.11.2017.
 */
var mouseForm = function() {
    var url = 'http://way2automation.com/way2auto_jquery/menu.php',
        EC = protractor.ExpectedConditions,
        logo = element (by.xpath('//img[@src="images/logo.png"]')),
        buttonMenu = element (by.xpath('//ul[@class="boxed_style block"]//a[@href="menu.php"]')),
        tabMenu = element (by.xpath('//*[@id="ui-id-2"]')),
        buttonSubMenu = element (by.xpath('//*[@id="ui-id-2"]/ul')),
        buttonInputAlert = element (by.xpath('//a[@href="#example-1-tab-2"]')),
        buttonLogIn = element (by.xpath('//a[text()="Signin"]')),
        loginForm = element (by.xpath('//div[@id="login"]//input[@name="username"]')),
        passForm = element (by.xpath('//div[@id="login"]//input[@name="password"]')),
        buttonSubmit = element (by.xpath('//div[@id="login"]//input[@type="submit"]'));


    this.getSite = function () {
        browser.driver.manage().window().maximize();
        browser.get(url);
    };

    this.auth = function () {
        buttonLogIn.click();
        loginForm.sendKeys('Egoist73');
        passForm.sendKeys('Alex1992');
        buttonSubmit.click();
        browser.wait(EC.visibilityOf(buttonMenu), 15000, 'Элемент подтверждающий авторизацию на страницу не найден :(');
        buttonMenu.click();
        browser.wait(EC.visibilityOf(buttonInputAlert), 15000, 'Элемент подтверждающий переход на страницу не найден :(');
    };

    this.mouseMove = function () {
        buttonInputAlert.click();
        browser.switchTo().frame(1);
        browser.actions().mouseMove(tabMenu).perform();
        browser.wait(EC.visibilityOf(buttonSubMenu), 15000, 'Элемент подтверждающий переход на страницу не найден :(');
    };

};
module.exports = mouseForm;