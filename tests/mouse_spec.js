describe ("Test Alerts", function(){
    var common = require('../config/common.js'),
        mouseForm = new common.mouseForm(),
        buttonSubMenu = element (by.xpath('//*[@id="ui-id-2"]/ul'));
        browser.waitForAngularEnabled(false);

    beforeEach(function () {
        mouseForm.getSite();
    });

    // 1.Создание скрина;
    it("Alerts", function () {
        mouseForm.auth();
        mouseForm.mouseMove();
        since("Меню не отображается").
            expect(buttonSubMenu.getAttribute('aria-expanded')).toBe('true');
    });

});