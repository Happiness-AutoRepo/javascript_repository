describe('Practicing with JavaScript Executor', () => {
    
    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.executeScript("window.location='https://google.com/';");
    });

    it('should get title/url/domain of the page', () => {
        
        browser.executeScript("return document.title").then(result =>{
            console.log(result);
        });

        browser.executeScript("return document.URL").then(result =>{
            console.log(result);
        });

        browser.executeScript("return document.domain").then(result =>{
            console.log(result);
        });
    });

    it('should type', () => {
        browser.executeScript("document.getElementsByName('q')[0].value='kindle'");
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(2000);
        browser.executeScript("window.scrollBy(0,600)");
        browser.sleep(2000);
    });
});