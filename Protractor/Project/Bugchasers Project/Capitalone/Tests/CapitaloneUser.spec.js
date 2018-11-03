
require('../Utilities/CustomLocators.js');

var Base = require('../Utilities/Base.js');
var CreditCards = require('../Pages/CreditCards.page.js');
var UserSignIn = require('../Pages/UserSignIn.page.js');
var Home = require('../Pages/Home.page.js');
var CapitaloneData = require('../TestData/CapitaloneData.json');

describe('Capitalone', () => {
    var EC = protractor.ExpectedConditions;
    var browserHandles = [];
    
    beforeEach(function(){
        Base.navigateToHomePage(); 
    });

    describe('Sign in feature', () => {

        it('should show the error when clicked sign in without username data', () => {
            UserSignIn.signInButton.click();
            expect(UserSignIn.userNameError.getText()).toEqual('Oops!');
        });

        it('should have blue border line when clicked, "red" when no data entered and sign in clicked', () => {
            
            UserSignIn.username.getCssValue('border').then((x)=>{
            UserSignIn.signInButton.click();
            UserSignIn.username.getCssValue('border').then((y)=>{ 
            UserSignIn.password.click();
            UserSignIn.password.getCssValue('border').then((z)=>{
                expect(x).not.toEqual(y);
                expect(y).not.toEqual(z);
                });
            });
        });
        });
            
        it('should show the error when clicked sign in without password data', () => {
            UserSignIn.username.sendKeys(CapitaloneData.customers[0].username);
            UserSignIn.signInButton.click();
            expect(UserSignIn.passwordError.getText()).toEqual('Please enter required information');
        });

        it('should show error message after entering wrong username and password', () => {
            UserSignIn.username.sendKeys(CapitaloneData.customers[0].username);
            UserSignIn.password.sendKeys(CapitaloneData.customers[0].password);
            UserSignIn.signInButton.click();
            browser.sleep(2000);
            expect(browser.getTitle()).toEqual('Sign In');
        });

        it('should be able to click "Remember me" button', () => {
            UserSignIn.rememberMeCheckbox.click();
            browser.sleep(1000);
        });

        it('should navigate to the Sign In Help page', () => {
            UserSignIn.forgotUsername.click();
            browser.sleep(1000);
            expect(UserSignIn.signInHelpLogo.isDisplayed()).toBe(true);
        });

        it('Should not enable the find me button if any field left empty', () => {
            UserSignIn.forgotUsername.click();
            browser.sleep(1000);
            expect(UserSignIn.findMeButton.isEnabled()).toBe(false);
        });
            
        it('should search to find the user in sign in help page', () => {
            UserSignIn.forgotUsername.click();
            browser.sleep(1000);
            UserSignIn.signInLastName.sendKeys(CapitaloneData.customers[1].lName);
            UserSignIn.signInSSN.sendKeys(CapitaloneData.customers[1].SSN);
            
            UserSignIn.signInDoBmonth.click();
            UserSignIn.signInDoBday.click();
            UserSignIn.signInDoByear.click();
            UserSignIn.findMeButton.click();
            browser.sleep(1000);
            expect(UserSignIn.findMeButton.isEnabled()).toBe(false);
        });      
        
    });

    describe('A new credit card', () => {

        it('should navigate to Savor Card page when Savor Card heading is clicked', () => {
            browser.actions().mouseMove(Home.creditCardsSection).perform();
            Home.cardSavorLink.click();
            expect(CreditCards.savorHomePageHeadline.getText()).toEqual('Savor® Rewards from Capital One®');
        });
    
        it('should navigate to Savor Card apply page when "Apply Now" button is clicked', () => {
            Base.navigateToCreditCard();
            Home.cardSavorLink.click();
            browser.wait(EC.visibilityOf(CreditCards.savorApplyButton),10000).then(()=>{
                CreditCards.savorApplyButton.click();
            });
            browser.getAllWindowHandles().then((handles)=>{
                browserHandles=handles;
                browser.switchTo().window(browserHandles[1]).then(()=>{
                    expect(CreditCards.savorPageSavorImg.isDisplayed()).toBe(true);
                });
            });

            browser.wait(EC.visibilityOf($('.card-logo-mc')),10000).then(()=>{
                expect($('.card-logo-mc').isDisplayed()).toEqual(true);
                browser.close().then(function(){
                    browser.switchTo().window(browserHandles[0]);
                    browser.sleep(1000);
                });
            })    
        });

        it('Should bring up the submitting window after Filling the application form', () => {
            Base.navigateToCreditCard();
            Home.cardSavorLink.click();
            CreditCards.savorApplyButton.click();
            browser.getAllWindowHandles().then((handles)=>{
                browser.switchTo().window(handles[1]).then(()=>{
                    browser.wait(EC.visibilityOf(CreditCards.savorFormFirstName),14000).then(()=>{
                        CreditCards.savorFormFirstName.sendKeys(CapitaloneData.customers[0].fName);
                    });

                    CreditCards.savorFormLastName.sendKeys(CapitaloneData.customers[0].lName);
                    CreditCards.savorFormDoB.sendKeys(CapitaloneData.customers[0].DoB);
                    CreditCards.savorFormSSN.sendKeys(CapitaloneData.customers[0].SSN);
                    CreditCards.savorFormCitizenship.click();
                    CreditCards.savorFormResident.click();
                    CreditCards.savorFormCitizenCountry.sendKeys(CapitaloneData.customers[0].citizenCountry);
                    browser.sleep(1000);
                    
                    browser.wait(EC.visibilityOf(element(by.xpath("//*[text()='Contact Information']"))),10000).then(()=>{
                        browser.executeScript('arguments[0].scrollIntoView();',element(by.xpath("//*[text()='Contact Information']")));
                    })
                    
                    CreditCards.savorFormAddress.sendKeys(CapitaloneData.customers[0].address);
                    CreditCards.savorFormEmail.sendKeys(CapitaloneData.customers[0].email);
                    CreditCards.savorFormPhone.sendKeys(CapitaloneData.customers[0].phoneNumber);
                    
                    browser.wait(EC.visibilityOf(element(by.xpath("//*[text()='Financial Information']"))),10000).then(()=>{
                        browser.executeScript('arguments[0].scrollIntoView();',element(by.xpath("//*[text()='Financial Information']")));
                    })
                    
                    CreditCards.savorFormEmploymentOptions.click();
                    browser.sleep(1000);
                    browser.wait(EC.visibilityOf(CreditCards.savorFormEmploymentStatus),10000).then(()=>{
                        CreditCards.savorFormEmploymentStatus.click();
                    });

                    CreditCards.savorFormAnnualIncome.sendKeys(CapitaloneData.customers[0].income);
                    CreditCards.savorFormMonthlyRent.sendKeys(CapitaloneData.customers[0].rent);
                    CreditCards.savorFormAccountOptions.click();
                    CreditCards.savorFormBankAccount.sendKeys(CapitaloneData.customers[0].bankAccounts[0]);
                    browser.sleep(1000);
                    CreditCards.savorFormMonthlyBill.sendKeys(CapitaloneData.customers[0].monthlyCardBill);
                    CreditCards.savorFormElectronicSign.click();
                    browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
                    CreditCards.savorFormContinueButton.click();
                    browser.sleep(2000);      
                    browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
                    browser.wait(EC.visibilityOf(CreditCards.savorFormContinueButton),10000).then(()=>{
                        CreditCards.savorFormContinueButton.click();
                    });   
                    expect(CreditCards.savorFormSubmitBUtton.getText()).toEqual("Submit Application");
                    browser.sleep(1000);
                    browser.close().then(function(handles){
                        browser.switchTo().window(handles[0]);
                }); 
                browser.sleep(1000);      
            });

        });
        
        });

        it('should have the banner as a background picture on the home page', () => {
            expect(Home.homeBanner.first().isDisplayed()).toBe(true);
        });

        it('should navigate to new page after home banner button is clicked ', () => {
            browser.waitForAngularEnabled(false);
            Home.bannerButton.first().getText().then((result)=>{
                browser.sleep(1000);
                if(result=="Find Out How"){
                    Home.bannerButton.first().click();
                    expect(element(by.linkText('Open Account')).isPresent()).toBe(true);
                } else if (result=="Learn More"){
                    Home.bannerButton.first().click();
                    expect(Home.cardPic.isDisplayed()).toBe(true);
                } else if (result=="Get The New Savor Card"){
                    Home.bannerButton.first().click();
                    expect(Home.cardPic.isDisplayed()).toBe(true);
                } else if (result=="Get Started Now"){
                    Home.bannerButton.first().click();
                    browser.getAllWindowHandles().then((handles)=>{
                        browserHandles=handles;
                        browser.switchTo().window(browserHandles[1]).then(()=>{
                            browser.wait(EC.visibilityOf(Home.creditwiseSignUpButton),14000).then(()=>{
                                expect(Home.creditwiseSignUpButton.isPresent()).toBe(true);           
                        });
                    }); 
                    browser.close().then(function(){
                        browser.switchTo().window(browserHandles[0]);
                        browser.sleep(1000);
                    });
                });
            };
            });              
        });

        it('should navigate to venture card home page and move the slider bar', () => {

            browser.actions().mouseMove(Home.creditCardsSection).perform();
            Home.ventureCardLink.click();
            browser.executeScript("arguments[0].scrollIntoView();", CreditCards.ventureSliderDisplay);
            browser.sleep(1000);
            browser.wait(EC.visibilityOf(CreditCards.ventureSlider),10000).then(()=>{
                browser.actions().dragAndDrop(CreditCards.ventureSlider,{x:-100, y:0}).perform();  
                browser.sleep(1000);
            })
        });

        it('should show the correct value in miles rewards box', () => {
            browser.actions().mouseMove(Home.creditCardsSection).perform();
            Home.ventureCardLink.click();
            browser.executeScript("arguments[0].scrollIntoView();", $('#rowVentureSliderBannerTest'));
            CreditCards.ventureMonthlySpend.clear();
            browser.sleep(1000);

            browser.wait(EC.visibilityOf(CreditCards.ventureMonthlySpend),10000).then(()=>{
                CreditCards.ventureMonthlySpend.sendKeys('100000');
                expect(CreditCards.ventureAnnualReward.getText()).toEqual('240,000');
                browser.sleep(1000);
            });
            
        });

        it('should bring up the platinum card when clicked', () => {
            browser.actions().mouseMove(Home.creditCardsSection).perform();
            Home.ventureCardLink.click();
            browser.wait(EC.visibilityOf(CreditCards.ventureReadReview),14000).then(function(){
                CreditCards.ventureReadReview.click();
            });
            browser.wait(EC.visibilityOf(CreditCards.ventureProducts),14000).then(function(){
                browser.actions().mouseMove(CreditCards.ventureProducts).perform();
            });  
            
            browser.wait(EC.visibilityOf(CreditCards.venturePlatinumCard),14000).then(function(){
                CreditCards.venturePlatinumCard.click();
            }); 
            expect(CreditCards.ventureHeader.getText()).toEqual('Platinum');
        });

        it('should filter the results', () => {
            browser.get('https://www.capitalone.com/credit-cards/reviews/?prodid=platinum');
            browser.wait(EC.visibilityOf(CreditCards.platinumSearchBox),10000).then(()=>{
                CreditCards.platinumSearchBox.sendKeys('money').sendKeys(protractor.Key.ENTER);
            }); 

            var unfilteredResult = CreditCards.platinumSearchResult.first().getText();

            browser.executeScript("arguments[0].scrollIntoView();", CreditCards.platinumFilter.get(1));
            browser.sleep(1000);
            CreditCards.platinumFilter.get(1).click();
            browser.wait(EC.visibilityOf($("#cardAgeWrapper .star-row:nth-child(3) input")),10000).then(()=>{
                $("#cardAgeWrapper .star-row:nth-child(3) input").click();  
            });          
            browser.executeScript("arguments[0].scrollIntoView();", $("#apply-now-link"));
            browser.sleep(1000);
            expect(CreditCards.platinumSearchResult.first().getText()).not.toEqual(unfilteredResult);
        });  
        
    });

});