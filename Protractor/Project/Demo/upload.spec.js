describe('Testing file upload', () => {
    
    let path = require('path');

    it('should upload a file', () => {
        browser.get('http://nervgh.github.io/pages/angular-file-upload/examples/simple/');
        $$("input[type='file']").get(0).sendKeys("C:/Users/Marat Metoff/Desktop/Courses/JavaScript SDET/Code/Protractor/Project/Demo/Documents/Text.docx");
        $('.btn-success').click();
        browser.sleep(5000);
    });

    fit('should upload a picture', () => {
        browser.waitForAngularEnabled(false);
        browser.get("https://fineuploader.com/demos.html");
        browser.sleep(2000);
        $$('input[type="file"]').get(0).sendKeys(__dirname + "/Documents/pic.jpg");
        browser.sleep(2000);
        expect($('.qq-thumbnail-selector').isDisplayed()).toBe(true);
    });
});