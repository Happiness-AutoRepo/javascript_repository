var Base = function(){
    this.homeUrl = 'https://www.sandisk.com/';
    this.navigateToHome = function(){
        //browser.waitForAngularEnabled(false);
        browser.driver.manage().window().setSize(950,1100);
        browser.get(this.homeUrl);
    };
}
module.exports = new Base();