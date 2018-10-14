describe('by.options test', () => {
    
    it('should print all dropdown options', () => {
        
        browser.get("https://juliemr.github.io/protractor-demo/");

        let allOptions = element.all(by.options("value for (key, value) in operators"));
        
        allOptions.each(option => {
            option.getText().then((result) => {
                console.log(result);
            }).catch((err) => {
                    
            });
        })

        let thirdOption = allOptions.get(2);
        thirdOption.getText().then((result) => {
            console.log('================')
            console.log(result);
        }).catch((err) => {
            
        });

    });
});