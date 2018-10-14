describe('each method examples', () => {
    
    it('each method #1', () => {
        
        browser.waitForAngularEnabled(false);
        browser.get("https://www.bhtp.com/");

        $("#top-nav-down").all(by.tagName("li")).each((element, index) => {
            element.getText().then((result) => {
                console.log(`${index}: ${result}`);
            }).catch((err) => {
                console.log(error);
            });
        })
    });

    fit('each method #2', () => {

        browser.waitForAngularEnabled(false);
        browser.get("https://www.staples.com");
        $$(".section-menu div[data-analyticstype = 'HEADER']").each(function(element) {

            element.getText().then((result) => {
                if(result != "") {
                    console.log(result);
                }
            }).catch((err) => {
                console.log(err);
            });
        })
    });
});