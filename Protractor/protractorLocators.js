describe('Protractor locators', () => {

    it('should be able to locate a button using protractor locators', () => {

        browser.get("https://transferwise.com/us/");
        element(by.buttonText("Compare price")).click();
        browser.sleep(5000);
    });

    it('should be able to output a tagName of the button', () => {

        browser.get("https://transferwise.com/us/");
        element(by.buttonText("Compare price")).getTagName().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log("Couldn't get a tag name")
        });
        browser.sleep(5000);
    });

    fit('should be able to locate the button on Upwork website', () => {

        browser.get("https://www.upwork.com/");
        element(by.buttonText("Get Started")).click();
        
        browser.sleep(5000);
    });
});