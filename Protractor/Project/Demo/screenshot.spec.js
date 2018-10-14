describe('Taking Basic Screenshot', () => {
    
    var fs = require('fs');

    it('should take a screenshot', () => {
        
        browser.waitForAngularEnabled(false);
        browser.get('https://www.staples.com');

        browser.takeScreenshot().then((result) => {
            
            let stream = fs.createWriteStream('Screenshot' + Date.now() + '.png');
            stream.write(new Buffer(result, 'base64'));
            stream.end();
        }).catch((err) => {
            
        });


    });
});