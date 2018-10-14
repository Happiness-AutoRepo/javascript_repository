describe('checking visibility', () => {
    
    it('should show if the element is displayed', () => {
        
        browser.get("https://www.bhtp.com");
        element(by.id("cta-button")).isDisplayed().then((result) => {
            console.log(`The element is displayed: ${result}`);
        }).catch((err) => {
            
        });
    });

    it('should show if the element is present', () => {
        
        browser.get("https://www.bhtp.com");
        element(by.id("cta-button")).isPresent().then((result) => {
            console.log(`The element is present: ${result}`);
        }).catch((err) => {
            
        });
    });

    it('should show if the element is enabled', () => {
        
        browser.get("https://www.bhtp.com");
        element(by.id("cta-button")).isEnabled().then((result) => {
            console.log(`The element is enabled: ${result}`);
        }).catch((err) => {
            
        });
    });
});