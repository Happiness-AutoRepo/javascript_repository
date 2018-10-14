describe('Testing Adding locator', () => {
    
    by.addLocator('ngClick', function(toState,parentelement) {
        //Below line tells to look for the element in the parent element if not in then the entire document.
     	var using = parentelement || document ;
     	var prefixes = ['ng-click'];
 	    for (var p = 0; p < prefixes.length; ++p) {
 	        var selector = '*[' + prefixes[p] + '="' + toState + '"]';
 	        var inputs = using.querySelectorAll(selector);
 	        if (inputs.length) {
                return inputs;    
            }
        }     
    });


    it('should locate element using custom locator', () => {
        
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        browser.sleep(3000);

        element(by.id('username')).sendKeys('angular');
        element(by.id('password')).sendKeys('password');
        element(by.model('model[options.key]')).sendKeys('Eagle');
        //This is our custom locator that  we created.
        element(by.ngClick('Auth.login()')).click();
        
        browser.sleep(3000);
        expect(element(by.linkText('Logout')).isDisplayed()).toBe(true);
    });


});