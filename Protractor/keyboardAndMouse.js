describe('keyboard and mouse test', () => {
    
    it('should clear the input box', () => {
        
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

        let username = element(by.id("username"));

        username.sendKeys("Word");
        browser.sleep(3000);
        username.clear();
        browser.sleep(3000);
        username.sendKeys("Second word");
        browser.sleep(3000);
    });

    it('should use keyboard buttons', () => {
        
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

        let username = element(by.id("username"));

        username.sendKeys("Word");
        browser.sleep(3000);
        username.sendKeys(protractor.Key.BACK_SPACE).sendKeys(protractor.Key.TAB);
        browser.sleep(3000);
        username.sendKeys("Second word");
        browser.sleep(3000);
    });

    it('should get an attribute', () => {

        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

        $("#formly_1_input_username_0_description").getAttribute("class").then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });
    })

    it('should get an attribute from Staples.com', () => {
        
        browser.ignoreSynchronization = true;
        browser.get("https://staples.com");

        $('#staples-logo-hdr').getAttribute('title').then(function(titleAttribute){
            console.log(titleAttribute);
        })
    });

    it('should get CSS value', () => {
        
        browser.get("https://flow.microsoft.com/en-us/");

        // extracts color value from css
        $('#home-video-button').getCssValue('color').then(function(color){    
            console.log(color);
        })

        // extracts font-size value from css
        $('#home-video-button').getCssValue('font-size').then(function(color){    
            console.log(color);
        })
    });

    it('should get location', () => {
        
        browser.get("https://flow.microsoft.com/en-us/");

        // extracts location from css
        $('#home-video-button').getLocation().then(function(location){    
            
            let x = location.x;
            let y = location.y;

            console.log("x coordinate: " + x + "\ny coordinate: " + y);
        })
    });

    it('should be able to hover over', () => {
        
        browser.waitForAngularEnabled(false);
        browser.get("http://the-internet.herokuapp.com");
        element(by.linkText("Hovers")).click();
        browser.sleep(2000);
        element(by.linkText("View profile")).isDisplayed().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

        browser.actions().mouseMove($(".figure>img")).perform();
        browser.sleep(2000);
        element(by.linkText("View profile")).isDisplayed().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(error);
        });
    });

    //3rd party drag and drop
    it('should drag and drop', () => {
        
        let dragAndDrop = require("html-dnd").code;

        browser.ignoreSynchronization = true;
        browser.get("http://the-internet.herokuapp.com/drag_and_drop");

        browser.sleep(3000);
        browser.executeScript(dragAndDrop, element(by.id("column-a")), element(by.id("column-b")), 0,0);
        browser.sleep(3000);
    }); 
    
    //scrolling down to an element
    it('should scroll down', () => {
        
        browser.get("https://bhtp.com");
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", element(by.linkText("START A CLAIM"))).then((result) => {
            browser.sleep(2000);
            element(by.linkText("START A CLAIM")).click();
        }).catch((err) => {
            
        });
    });

     //scrolling down to the end of the page
     it('should scroll down', () => {
        
        browser.get("https://bhtp.com");
        browser.sleep(3000);

        browser.executeScript("window.scrollTo(0, document.body.scrollHeight)").then((result) => {
            browser.sleep(2000);
            element(by.linkText("START A CLAIM")).click();
        }).catch((err) => {
            
        });
    });

    //javascript click
    fit('should scroll down', () => {
        
        browser.get("https://bhtp.com");
        browser.sleep(3000);

        browser.executeScript("window.scrollTo(0, document.body.scrollHeight)").then((result) => {
            browser.sleep(2000);
            browser.executeScript("arguments[0].click();", element(by.linkText("START A CLAIM")));
            browser.sleep(2000);
        }).catch((err) => {
            
        });
    });
        
});