describe('Implicit wait', () => {
    
    it('should wait implicitly', () => {
        
        browser.waitForAngularEnabled(false);
        browser.get('https://www.target.com/');
        element(by.linkText('Categories2')).click();
    });
});