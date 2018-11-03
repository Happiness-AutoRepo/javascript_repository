
require('../Utilities/CustomLocators.js');

var Base = require('../Utilities/Base.js');
var Home = require('../Pages/Home.page.js');


describe('Capitalone', () => {
    var EC = protractor.ExpectedConditions;
    var browserHandles = [];
    
    beforeEach(function(){
        Base.navigateToHomePage(); 
    });

    describe('Home Page', () => {

        it('should have CapitalOne logo in the home page', () => {
            browser.wait(EC.visibilityOf(Home.pageLogo),10000).then(()=>{
                expect(Home.pageLogo.isDisplayed()).toBe(true);
            })
                
        });
    
        it('should have the primary navigation titles', () => {
            for(i=0; i<Home.primaryNav.length; i++){
            expect(Home.primaryNavElements.get(i).getText()).toEqual(Home.primaryNav[i]);
            };
        });
            
        it('should have search box when search is clicked', () => {
            Home.searchButton.click();
            browser.sleep(2000);
            expect(Home.searchBox.isDisplayed()).toBe(true);
        });

        it('should search a place in location feature', () => {
            browser.waitForAngularEnabled(false);
            $('#navtest-b-l1-locations').click();
            browser.sleep(1000);
            $('#searchInput').sendKeys('Brooklyn');
            browser.sleep(1000);
            $('#searchInput').sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER);;
            //$('#searchInput').sendKeys(protractor.Key.ENTER);
            browser.sleep(2000);
            $('.logo').click();
            browser.wait(EC.visibilityOf(Home.pageLogo),10000).then(()=>{
                expect(Home.pageLogo.isDisplayed()).toBe(true);
            })
        });

        it('should display Venture Card logo and heading when hovering on Credit Cards', ()=>{
            browser.actions().mouseMove(Home.creditCardsSection).perform();
            expect(Home.cardVentureLogo.isDisplayed()).toBe(true);
            expect(Home.cardVentureHeading.getText()).toEqual('Venture® Travel Rewards');  
        });      
    
        it('should search the given value and show the result', ()=>{
            Home.searchButton.click();
            Home.searchBox.sendKeys('money').sendKeys(protractor.Key.ENTER);
            browser.wait(EC.visibilityOf(Home.result),10000).then(()=>{
                expect(Home.result.getText()).toContain('You searched for "money"');
            })
        });
    
        it('should navigate to support page when Support is clicked', () => {
            Home.supportButton.click();
            expect(browser.getCurrentUrl()).toEqual('https://www.capitalone.com/support-center/');
        });

        it('should check iframe feedback window', () => {
            browser.waitForAngularEnabled(false);
            Home.feedbackButtons.click();
            browser.sleep(1000); 
            browser.switchTo().frame(browser.driver.findElement(Home.ratingIframe));
            Home.star5.click();

            element.all(Home.ratingDropdown).first().$("option[value='compliment']").click();
            expect(Home.submitButton.getText()).toEqual('Submit');
            browser.sleep(1000);    
        });

    });

    });