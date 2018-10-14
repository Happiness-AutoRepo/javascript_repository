describe('Working with explicit waits', () => {
    
    let until = protractor.ExpectedConditions;
    
    it('should wait for an element to be visible', () => {
        
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
        browser.wait(until.visibilityOf($$('.homeslider-description .btn').get(2)), 14000).then((result) => {
            $$('.homeslider-description .btn').get(2).click();
            browser.sleep(5000);
        }).catch((err) => {
            
        });
    });
});