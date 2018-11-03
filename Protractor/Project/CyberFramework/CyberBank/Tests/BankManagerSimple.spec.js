require("../Utilities/CustomLocators.js");
var HomePage = require("../Pages/Home.page.js");
var BankManagerPage = require("../Pages/BankManager.page.js");
var AddCustomerPage = require("../Pages/AddCustomerPage.page.js");
var Base = require("../Utilities/Base.js");
var BankData = require('../TestData/BankData.json');

describe('Bank manager', () => {

    describe('Manager login', () => {
    
        beforeEach(function(){
            Base.navigateToHome();
        });
    
        it('should have a correct page title', () => {
            expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
        });
    
        it('should display home button', () => {
            expect(HomePage.homeButton.isDisplayed()).toBe(true);
            expect(HomePage.homeButton.getText()).toEqual("Home");
        });
    
        it('should display page header', () => {
            expect(HomePage.pageHeader.isDisplayed()).toBe(true);
            expect(HomePage.pageHeader.getText()).toEqual(BankData.appData.bankName);
        });
    
        it('should display login option for Bank Manager', () => {
            expect(HomePage.managerLoginButton.isDisplayed()).toBe(true);
            expect(HomePage.managerLoginButton.getText()).toEqual("Bank Manager Login");
        });
    
        it('should stay at the homepage when the Home button is clicked', () => {
            $("button.home").click();
            expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
            expect(HomePage.managerLoginButton.getText()).toEqual("Bank Manager Login");
        });
    
        it('should login as a Bank Manager', () => {
            HomePage.managerLoginButton.click();
            expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
        });
    
        it('should display options for manager', () => {
            HomePage.managerLoginButton.click();
            expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.openAccountButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.customersButton.isDisplayed()).toBe(true);
        });
    
        it('should go back to home page when home button is clicked', () => {
            HomePage.managerLoginButton.click();
            expect(browser.getCurrentUrl()).toEqual("http://www.way2automation.com/angularjs-protractor/banking/#/manager");
            BankManagerPage.homeButton.click();
            expect(browser.getCurrentUrl()).toEqual("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        });
    });
    
    describe('Adding a customer', () => {
        
        beforeAll(function() {
            Base.navigateToHome();
            HomePage.managerLoginButton.click();
            AddCustomerPage.goToAddCustomer();
        });

        it('should display the form for adding a customer', () => {
            
            expect(AddCustomerPage.customerForm.isDisplayed()).toBe(true);
            expect(AddCustomerPage.formLabels.count()).toEqual(3);
        });

        it('should list all the labels', () => {
            expect(AddCustomerPage.formLabels.get(0).getText()).toEqual("First Name :");
            expect(AddCustomerPage.formLabels.get(1).getText()).toEqual("Last Name :");
            expect(AddCustomerPage.formLabels.get(2).getText()).toEqual("Post Code :");

            let array = [];
            AddCustomerPage.formLabels.each((element) => {

                element.getText().then((result) => {
                    array.push(result);
                    console.log(array);
                });
            });
            console.log("=========");
            AddCustomerPage.formLabels.count().then((result) => {
                console.log(result);
            });

            AddCustomerPage.formLabels.each((element) => {

                element.getText().then((result) => {
                    console.log(result);
                });
            });
        });

        it('should require first name', () => {
            expect(AddCustomerPage.formRequiredFields.get(0).getAttribute("required")).toEqual('true');
        });

        it('should require last name', () => {
            expect(AddCustomerPage.formRequiredFields.get(1).getAttribute("required")).toEqual('true');
        });

        it('should require postal code', () => {
            expect(AddCustomerPage.formRequiredFields.get(2).getAttribute("required")).toEqual('true');
        });

        it('should add a customer', () => {
            
            AddCustomerPage.firstNameInputBox.sendKeys(BankData.customers[0].fName);
            AddCustomerPage.lastNameInputBox.sendKeys("Bezos");
            AddCustomerPage.postalCodeInputBox.sendKeys("22433");
            AddCustomerPage.formAddCustomerButton.click();

            expect(browser.switchTo().alert().getText()).toContain("Customer added successfully with customer id");
            browser.switchTo().alert().accept();
        });
    });
});

