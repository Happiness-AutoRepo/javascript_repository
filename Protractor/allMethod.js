describe('All method examples', () => {
    
    it('should grab all links from google website', () => {
        
        browser.waitForAngularEnabled(false);
        browser.get("https://www.google.com");

        element.all(by.tagName("a")).getText().then((result) => {
            console.log(result);
            console.log("========================");
            for (let index = 0; index < result.length; index++){
                console.log(result[index]);          
            }
        }).catch((err) => {
            
        });
    });

    it('should grab all "li"s from bbc.com', () => {
        
        browser.ignoreSynchronization = true;
        browser.get("http://www.bbc.com/");

        element.all(by.tagName("li")).getText().then(function(textArray){
            console.log(textArray);
        })
    });

    it('should grab a specific list of "li"s from bbc.com', () => {
        
        browser.ignoreSynchronization = true;
        browser.get("http://www.bbc.com/");

        // shortened element.all via css
        $$("#orb-nav-links li").getText().then(function(textArray){
            console.log(textArray);
        })
        
        // chain locators
        element(by.css("#orb-nav-links")).all(by.tagName("li")).getText().then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });
    });

    it('should return a total count of elements', () => {
        
        browser.get("http://hn.algolia.com");

        // saving count into variable
        var totalResults = $$(".item-title-and-infos>h2>a").count();
        totalResults.then((result) => {
            console.log(`Total number of results: ${result}`);
        }).catch((err) => {
            console.log(err);
        });
    });

    it('should return first and last element', () => {
        
        browser.get("http://hn.algolia.com");

        // saving first and last into variable
        let firstItem = $$(".item-title-and-infos>h2>a").first();
        let lastItem = $$(".item-title-and-infos>h2>a").last();

        firstItem.getText().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    });

    fit('should find the exact element out of many', () => {
        
        browser.get("http://hn.algolia.com");

        var totalResults = $$(".item-title-and-infos>h2>a")

        totalResults.get(5).getText().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    });
});