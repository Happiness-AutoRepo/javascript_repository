describe('Multiple windows test', () => {
    
    let browserHandles = [];

    beforeAll(function() {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/");
        element(by.linkText('Multiple Windows')).click();
        element(by.linkText('Click Here')).click();
    });
    
    it('should switch to a new window', () => {
        browser.getAllWindowHandles().then((result) => {
            browserHandles = result;
            browser.switchTo().window(browserHandles[1]).then((result) => {
                browser.sleep(3000);
                expect(browser.getCurrentUrl()).toContain('windows/new');
            }).catch((err) => {
                
            });
        }).catch((err) => {
            
        });
    });

    it('should go back to the previous window', () => {
        browser.close().then((result) => {
            browser.switchTo().window(browserHandles[0]);
            browser.sleep(3000);
            expect(element(by.linkText('Click Here')).isDisplayed()).toBe(true);
        }).catch((err) => {
            
        });
    });
});