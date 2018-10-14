describe('Demonstarting Jasmine spec reporter', () => {
    
    it('should check if element is displayed', () => {
        
        browser.get("https://bhtp.com");
        expect(element(by.linkText("GET A QUOTE")).isDisplayed()).toBe(true);
    });
});