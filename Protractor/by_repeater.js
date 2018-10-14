describe('by.repeater test', () => {
    
    it('should find elements using ng-repeater', () => {
        
        browser.get("https://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys(5);
        element(by.model("second")).sendKeys(5);
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys(5);
        element(by.model("second")).sendKeys(5);
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys(5);
        element(by.model("second")).sendKeys(5);
        element(by.id("gobutton")).click();

        // by.exactRepeater is also available
        element.all(by.repeater("result in memory")).count().then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });

        element.all(by.repeater("result in memory")).each(element => {
            element.getText().then((result) => {
                console.log(result);
            }).catch((err) => {
                
            });
        })
    });

    fit('should use row and column methods', () => {
        
        browser.get("https://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys(5);
        element(by.model("second")).sendKeys(5);
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys(5);
        element(by.model("second")).sendKeys(5);
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys(5);
        element(by.model("second")).sendKeys(5);
        element(by.id("gobutton")).click();

        // searching for the first row only
        element.all(by.repeater("result in memory").row(0)).getText().then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });

        // searching for the timestamp within the first row only ("result.timestamp" comes from page source based on binding)
        element.all(by.repeater("result in memory").row(0).column("result.timestamp")).getText().then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });

    });
});