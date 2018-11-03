
var Home = require('../Pages/Home.page.js');

var Base = function(){
    
    this.homeUrl='https://www.capitalone.com/';

    this.navigateToHomePage=function(){
        browser.get(this.homeUrl);
        browser.sleep(1000);
    }

    this.navigateToCreditCard = function(){
        browser.waitForAngularEnabled(false);
        browser.actions().mouseMove(Home.creditCardsSection).perform();
    }


    this.navigateToHome=function(){
        browser.get(this.homeUrl);
    };
    
    this.careersUrl='https://www.capitalonecareers.com/';

    this.navigateToCareers=function(){
        browser.get(this.careersUrl);
    }
    this.scrollDown=function(element){
        browser.executeScript('arguments[0].scrollIntoView();',element);
    }

};

module.exports= new Base();