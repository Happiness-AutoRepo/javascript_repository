describe('Practicing I-frames', () => {
    
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });

    it('should switch to iframe', () => {
        
        browser.get("https://the-internet.herokuapp.com/iframe");
        browser.sleep(3000);
        // selenium way of locating the elements
        browser.switchTo().frame(browser.driver.findElement(by.id('mce_0_ifr')));
        $('#tinymce').click();
        $('#tinymce').clear();
        $('#tinymce').sendKeys('Text');
        browser.sleep(3000);
        browser.switchTo().defaultContent();
    });

    fit('should switch to iframe on qaclickacademy', () => {
        
        browser.get("http://qaclickacademy.com");
        browser.sleep(3000);
        expect($$('.pull-left span').get(0).getText()).toEqual('(+1) 323-744-6780');
        expect($$('.pull-left span').get(1).getText()).toEqual('info@qaclickacademy.com');
    });
});