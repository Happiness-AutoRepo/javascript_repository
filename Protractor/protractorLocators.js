describe('Protractor locators', () => {

    function add(a, b) {
        
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }

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

    it('should be able to locate the button on Upwork website', () => {

        browser.get("https://www.upwork.com/");
        element(by.buttonText("Get Started")).click();
        
        browser.sleep(5000);
    });

    it('should be able to locate the button on Netflix website', () => {
        
        browser.ignoreSynchronization = true;
        browser.get("https://www.netflix.com/");
        element(by.buttonText("JOIN FREE FOR A MONTH")).click();

        browser.sleep(5000);
    });

    it('should be able to locate the button on Netflix using partial button text', () => {
        
        browser.ignoreSynchronization = true;
        browser.get("https://www.netflix.com/");
        element(by.partialButtonText("FOR A MONTH")).click();

        browser.sleep(5000);
    });

    it('should be able to locate the text using CSS containing text', () => {
        
        browser.get("https://transferwise.com/us/");
        element(by.cssContainingText('.text-inverse','Bye')).getText().then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });
        browser.sleep(5000);
    });

    it('should be able to locate elements using by.model', () => {
        
        browser.get("https://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys("55");
        element(by.model("second")).sendKeys("55");
        element(by.id("gobutton")).click();

        browser.sleep(5000);
    });

    fit('should be able to locate elements using by.model', () => {
        
        browser.get("https://juliemr.github.io/protractor-demo/");

        add(55, 56);
        add(5, 5);
        add(5, 6);
        add(551, 564);
        add(525, 156);
        
        // approaching drop-down menu by finding the select and option elements and chaining them together
        // element(by.model("operator")).element(by.css("option:nth-of-type(4)")).click();

        // element(by.css("")) can be replaced by $(""); element.all(by.css("")) can be replaced with $$("")
        element(by.model("operator")).$("option:nth-of-type(4)").click();

        // .all returns all elements located by a locator - returns an array
        element.all(by.repeater("result in memory")).getText().then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });

        browser.sleep(5000);
    });
});