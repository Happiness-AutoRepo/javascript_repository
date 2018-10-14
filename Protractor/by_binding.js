describe('by.binding test', () => {
    
    it('should find elements using ng-binding', () => {
        
        browser.get("https://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys(5);
        element(by.model("second")).sendKeys(5);
        element(by.id("gobutton")).click();

        // searches by the name of variable that it was bound to. Comes from the page source
        // by.exactBinding is also available
        element(by.binding("latest")).getText().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    });
});