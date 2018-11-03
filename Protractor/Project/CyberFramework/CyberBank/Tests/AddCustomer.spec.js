require('../Utilities/CustomLocators.js');
var HomePage =  require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');
var Base = require('../Utilities/Base.js');
var AddCustomerPage = require('../Pages/AddCustomerPage.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');
var using = require('jasmine-data-provider');

var Excel = require('exceljs');
var wb = new Excel.Workbook();
var sh;
var filePath = "../TestData/CustomerList.xlsx";
var sheetName = "Sheet1";
var accountNumbers = [];

var SelectHelper = require("../Utilities/Select.helper.js");
var customerSelectBox = new SelectHelper(by.id('userSelect'));
var currencySelectBox = new SelectHelper(by.id('currency'));



describe('Add Customer', () => {
    
    describe('Adding a Customer', () => {
        beforeAll(function(){

            wb.xlsx.readFile(filePath).then(() => {
                sh = wb.getWorksheet(sheetName);
            });

            Base.navigateToHome();
            HomePage.managerLoginButton.click();
            AddCustomerPage.goToAddCustomer();
        });


        it('should display form for Adding Customer', () => {
            expect(AddCustomerPage.customerForm.isDisplayed()).toBe(true);
            expect(AddCustomerPage.formLabels.count()).toEqual(3);
        });

        it('should list all the labels', () => {
            expect(AddCustomerPage.formLabels.get(0).getText()).toEqual('First Name :');
            expect(AddCustomerPage.formLabels.get(1).getText()).toEqual('Last Name :');
            expect(AddCustomerPage.formLabels.get(2).getText()).toEqual('Post Code :');
        });

        it('should require firstname', () => {
            expect(AddCustomerPage.formRequiredFields.get(0)
            .getAttribute('required')).toEqual('true');
        });

        it('should require lastname', () => {
            expect(AddCustomerPage.formRequiredFields.get(1)
            .getAttribute('required')).toEqual('true');
        });

        it('should require postcode', () => {
            expect(AddCustomerPage.formRequiredFields.get(2)
            .getAttribute('required')).toEqual('true');
        });


        xit('should add customer', () => {
            
            for(i=0; i<BankData.customers.length; i++ ){                
                AddCustomerPage.firstNameInputBox.sendKeys(BankData.customers[i].fName);
                AddCustomerPage.lastNameInputBox.sendKeys(BankData.customers[i].lName);
                AddCustomerPage.postalCodeInputBox.sendKeys(BankData.customers[i].pCode);
                AddCustomerPage.formAddCustomerButton.click();
                expect(browser.switchTo().alert().getText()).
                toContain('Customer added successfully with customer id :');
                browser.switchTo().alert().accept();
            }
        });

        it('should verify that the customer was created', () => {
            
            // BankManagerPage.customersButton.click();
            // expect(Customers.getLastRowValue(1).getText()).toEqual(BankData.customers[i].fName);
            // expect(Customers.getLastRowValue(2).getText()).toEqual(BankData.customers[i].lName);
            // expect(Customers.getLastRowValue(3).getText()).toEqual(BankData.customers[i].pCode);
        });

        // Excel starts from here
        it('should add a new customer from Excel', () => {
            
            AddCustomerPage.firstNameInputBox.sendKeys(sh.getRow(2).getCell(1).value);
            AddCustomerPage.lastNameInputBox.sendKeys(sh.getRow(2).getCell(2).value);
            AddCustomerPage.postalCodeInputBox.sendKeys(sh.getRow(2).getCell(3).value);
            AddCustomerPage.formAddCustomerButton.click();

            expect(browser.switchTo().alert().getText()).toContain('Customer added successfully');
            browser.switchTo().alert().accept();
        });

        it('should display newly created account', () => {
            BankManagerPage.openAccountButton.click();
            name = sh.getRow(2).getCell(1).value + " " + sh.getRow(2).getCell(2).value;
            expect(customerSelectBox.getOptions().getText()).toContain(name);
        });

        it('should open an Account for a new customer', () => {
            firstName = sh.getRow(2).getCell(1).value;

            customerSelectBox.selectByPartialText(firstName);
            currencySelectBox.selectByValue('Dollar');
            AddCustomerPage.processButton.click();

            browser.switchTo().alert().getText().then((result) => {
                expect(result).toContain('Account created successfully');
                myArr = result.split(" ");
                myArr = myArr[myArr.length - 1].substr(1);
                myArr = parseInt(myArr);
                accountNumbers.push(myArr);
                browser.sleep(6000);
                browser.switchTo().alert().accept();
            });
        });

        it('should write account numbers to Excel', () => {
            sh.getRow(2).getCell(4).value = accountNumbers[0];
            wb.xlsx.writeFile(filePath);
        });
    });
});