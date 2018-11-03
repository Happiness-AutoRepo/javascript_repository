var Base = require('../Utilities/Base.js');
var Slick = require('../Pages/Eyup.page.js'); //Eyup
var OEMPage = require('../Pages/OEM.page.js'); //Murat
var homePage = require('../Pages/home.page.js'); //Dilek
var BusinessPage = require('../Pages/forBusiness.page.js') //Ryailya
var PrivacyRightsPage = require('../Pages/PrivacyRights.page.js'); //Hatice
var searchPage = require('../Pages/search.page.js'); //Syed


describe('Eyup - Slick', () => {

    beforeEach(function () {
        Base.navigateToHome();
    });
    it('should show 4 slick on the main page', () => {
        expect(Slick.slickDots.count()).toEqual(4);
    });
    it('should show 4 links related slicks ', () => {
        Slick.slickTrackLinks.getText().then(function (text) {
            console.log(text);
        })
        expect(Slick.slickTrackLinks.count()).toEqual(4);
    });
    it('should all dots contains `Learn More` links', () => {
        Slick.slickDots.count().then(function (count) {
            for (let i = 0; i < count; i++) {
                Slick.slickDots.get(i).click();
                browser.sleep(2000);
                expect(Slick.slickTrackLinks.get(i).getText()).toContain('Learn More');
            }
        })
    });
    it('should stay at the same page when click Learn More...', () => {
        Slick.slickDots.count().then(function (count) {
            for (let i = 0; i < count; i++) {
                Slick.slickDots.get(i).click();
                browser.sleep(2000);
                expect(Slick.slickTrackLinks.get(i).getAttribute('target')).toEqual('_self');
                //There is a bug - Expected '_blank' to equal '_self'.
            }
        });
    });
    it('should show 22 global website', () => {
        Slick.globalIcon.click();
        Slick.globalWebsites.getText().then(function (text) {
            console.log(text);
        })
        expect(Slick.globalWebsites.count()).toEqual(22);
    })
    it('should correct the infos in the table', () => {
        Slick.slickDots.get(3).click();
        browser.sleep(1000);
        Slick.slickTrackLinks.get(3).click();
        //TABLE 
        for (let i = 0; i < Slick.arr.length; i++) {
            expect(Slick.cells.get(i + 1).getText()).toEqual(Slick.arr[i]);
        }
    });
});

describe('Murat - OEM Design', () => {
    beforeEach(function () {
        Base.navigateToHome();
        OEMPage.HomePage.click();
    });

    it('should enter OEM Page', () => {
        expect(browser.getTitle()).toEqual("Sandisk - OEM Design Solutions");
    });
    //----------------------------------------------------------------------------------
    it('should show sub-page links whether they work', () => {
        browser.waitForAngularEnabled(false);
        OEMPage.subPageLinks.getText().then(function (link) {
            //console.log(link);
            for (i = 0; i < link.length; i++) {
                OEMPage.subPageLinks.get(i).click();

                browser.getCurrentUrl().then(function (url) {
                    console.log(url);
                });
            };
        });
    });
    //------------------------------------------------------------------------------------------
    it('should find where to buy Sandisk Stores', () => {
        OEMPage.regionCountry('Europe', 'France');

        OEMPage.numberOfStore.getText().then((result) => {
            console.log(result);
        });
        OEMPage.storeList.getText(9).then(function (companyListArray) {
            let listArray = companyListArray;
            console.log("Store Names:")
            for (i = 0; i < listArray.length; i++) {
                console.log((i + 1) + ". " + listArray[i]);
            }
        });
    });
    //--------------------------------------------------------------------------------

    it('should start the conversation for Inquary via email', () => {
        OEMPage.emailButton.click();
        browser.executeScript('arguments[0].scrollIntoView();', element(by.css('.form.parbase'))).then(function () {
            browser.sleep(2000);
            OEMPage.firstName.sendKeys('mrt');
            OEMPage.lastName.sendKeys('oz');
            OEMPage.email.sendKeys('mrt12345@hotmail.com');
            OEMPage.region.sendKeys('NY');
            OEMPage.country.click();
            OEMPage.country.all(by.cssContainingText('option', 'United Sta')).click();
            OEMPage.job.sendKeys('Tester');
        });
        OEMPage.dataCenter.click();
        OEMPage.questionComment.sendKeys('Can I use your web page for my homework project? Thanks');
        OEMPage.startButton.isDisplayed().then(function (text) {
            console.log("Test passed:" + text);
        });
    });
    //---------------------------------------------------------------------------------------

    it('should have display required fields messages in the form', () => {
        OEMPage.emailButton.click();
        browser.sleep(3000);
        OEMPage.firstName.sendKeys('mrt');
        OEMPage.region.sendKeys('NY');
        OEMPage.startButton.click();
        browser.sleep(3000);
        OEMPage.formRequiredFields.each(function (item) {
            item.getText().then(function (text) {
                console.log(text);
            });

        });

    });
});

describe('Dilek - Main Page', () => {
    beforeAll(function () {
        Base.navigateToHome();
        homePage.forHomeButton.get(0).click();
    });
    // 0-1
    it('should display for home button', () => {
        expect(homePage.forHomeButton.get(0).isDisplayed()).toBe(true);
        expect(homePage.forHomeButton.get(0).getText()).toEqual('FOR HOME');
        expect(homePage.forHomeButton.get(0).isEnabled()).toBe(true);
    });
    //2
    it('should display the device species and options  ', () => {
        homePage.table2.each(function (item) {
            item.getText().then(function (textArray) {
                console.log(textArray);

            });
        });
    });
    //3           
    it('should match the device species and options list with expected list,should not match the last index item ', () => {
        homePage.table2.each(function (item) {
            item.getText().then(function (textArray) {
                homePage.deviceArr.push(textArray);
            });
        }).then(function () {
            console.log(homePage.deviceArr);
            for (var i = 0; i < homePage.expectedArr.length; i++) {
                if (homePage.deviceArr[i] == homePage.expectedArr[i]) {
                    console.log((i + 1) + " " + 'element are equal');
                } else {
                    console.log((i + 1) + " " + 'element are not equal');
                };
            };
        });
    });
    //4
    it('should be displayed the Product Type options : ', () => {
        homePage.optionproductType.each(function (item) {
            item.getText().then(function (textArray) {
                console.log(textArray);
            });
        });
    });
    //5      
    it('should be displayed HOST TYPE list : ', () => {
        homePage.optionproductType.get(0).click();
        homePage.hostType.each(function (item) {
            item.getText().then(function (textArray) {
                console.log(textArray);
            });
        });
    });
    //6  
    it('should be displayed host type list as an array and should not match the list with expected array', () => {
        homePage.optionproductType.get(0).click();
        homePage.hostType.each(function (item) {
            item.getText().then(function (textArray) {
                homePage.hostArray.push(textArray);
            })
        }).then(function () {
            console.log(homePage.hostArray);
            for (var i = 0; i < homePage.expectedArray.length; i++) {
                if (homePage.hostArray[i] == homePage.expectedArray[i]) {
                    console.log((i + 1) + " " + 'elements are equal');
                } else {
                    console.log((i + 1) + " " + 'elements are not equal');
                };
            };
        });
        expect(homePage.hostArray).not.toEqual(homePage.expectedArray);
    });
});

describe('Hatice - Privacy Rights Page Links', () => {
    //Navigate to Sandisk.com
    it('should navigate to sandisk.com', () => {
        Base.navigateToHome();
    });
    //2st test case - From homepage scroll down & find element Privacy Rights and click on it & verify the link
    it('should scroll down to an element and click on it', () => {
        browser.executeScript("arguments[0].scrollIntoView();", element(by.linkText("Your CA Privacy Rights"))).
        then(function () {
            browser.sleep(3000);
            element(by.linkText("Your CA Privacy Rights")).click();
            browser.sleep(2000);
            expect(browser.getCurrentUrl()).toBe('https://www.sandisk.com/about/legal/privacy#carights');
        })
    });
    //3rd Test Case - Should click and navigate to one of collection link
    it('should click and navigate on Collection link', () => {
        PrivacyRightsPage.linkButton.click();
        browser.sleep(3000);
        expect(PrivacyRightsPage.linkButton.isDisplayed()).toBe(true);
        expect(PrivacyRightsPage.linkButton.getText()).toEqual('Children');
        browser.sleep(3000);
        expect(PrivacyRightsPage.linkButton.isDisplayed()).toBe(true);
    });
    //4th Test Case - negative test case
    it('should confirm if text of the link does not contain any other title & and print the text of title(Collection and Use of Personal Property)', () => {
        PrivacyRightsPage.thirdPartyLink.getText().then(function (text) {
            if (text == "First-Party Websites and Services") {
                console.log("Test Failed");
            } else {
                console.log("Test Passed");
            }
            browser.sleep(2000);
            PrivacyRightsPage.paragrapghList.getText().then(function (items) {
                console.log(items);
            })
        })
    });

    it('should navigate to non angular page and give an error', () => {
        browser.sleep(2000);
        PrivacyRightsPage.contactPage.click();
    })
});

describe('Syed - Sandisk Search Test Suite', function () {
    beforeEach(function () {
        browser.get('https://www.sandisk.com');
    });
    it('should verify the search icon changes color when you hover on it', function () {
        searchPage.scrollTo(75, 365);
        browser.sleep(2000);

        var colorBeforeHover = searchPage.searchIcon.getCssValue('color').then(function (colorValue) {
            return colorValue;
        });

        colorBeforeHover.then(function (colorValueBeforeHover) {
            searchPage.moveMouseToElem(searchPage.searchIcon);
            browser.sleep(2000);

            searchPage.searchIcon.getCssValue('color').then(function (colorValueWhenHover) {
                expect(colorValueBeforeHover).not.toEqual(colorValueWhenHover);
            });
        });

    });

    it('should confirm the placeholder text', function () {
        searchPage.scrollTo(75, 365);

        expect(searchPage.searchBox.getAttribute('placeholder')).toEqual('What can we help you find?');
    });

    it('should check the search box changes border color when gets focus', function () {
        searchPage.scrollTo(75, 365);

        searchPage.searchBox.getCssValue('border-top-color').then(function (colorValueBeforeFocus) {
            browser.sleep(3000);
            searchPage.searchBox.sendKeys(protractor.Key.ENTER);
            browser.sleep(3000);

            searchPage.searchBox.getCssValue('border-top-color').then(function (colorValueAfterFocus) {
                expect(colorValueBeforeFocus).not.toEqual(colorValueAfterFocus);
            });
        });
    });

    it('should verify the search functionality is working', function () {
        var keyword = 'iXpand'
        searchPage.search(keyword);
        searchPage.highlightElement(searchPage.resultsHeading, 3000);

        expect(browser.getTitle()).toEqual('SanDisk Search Results');
        expect(searchPage.resultsHeading.getText()).toEqual('SEARCH RESULTS');
    });

    it('should verify 10 search results are displayed per page', function () {
        var keyword = 'iXpand'
        searchPage.search(keyword);

        searchPage.scrollTo(75, 365);
        searchPage.highlightElement(searchPage.searchResultsCount, 2000);

        searchPage.searchResultsCount.getText().then(function (text) {
            var count = Number(text.substr(-2));
            //verify the search result total is 10
            expect(count).toEqual(10);
            //verify the search result total is displayed on the page
            expect(searchPage.searchResultsCount.isDisplayed()).toBe(true);
        });

        //loop over each search result
        searchPage.searchResults.each(function (result) {
            searchPage.moveMouseToElem(result);
            searchPage.highlightElement(result, 500);
        });

        expect(searchPage.searchResults.count()).toEqual(10);
    });

    it('should return results with keyword in bold characters', function () {
        var keyword = 'SanDisk';
        searchPage.search(keyword);

        //Get all the Html elements that have the search keyword as text
        var htmlElems = searchPage.getElemsWithKeyword(keyword);

        htmlElems.each(function (el) {
            el.getText().then(function (elText) {

                //Only those elements whose entire text is the search keyword
                if (elText == keyword) {
                    searchPage.moveMouseToElem(el);
                    searchPage.addBorder(el);
                    expect(el.getCssValue('font-weight')).toEqual('700');
                }
            });
        });
        browser.sleep(2000);
    });

    it('should suggest related suggestions after typing 3 letters', function () {
        var obj = {
            ixp: 'ixpand',
            sky: 'skyhawk',
            San: 'sandisk',
        }

        for (let propName in obj) {

            for (let i = 0; i < propName.length; i++) {
                //type each letter after a 1 second delay
                searchPage.searchBox.sendKeys(propName[i]);
                browser.sleep(1000);

                if (i < 2) {
                    //should be no suggestions for 2 or less letters
                    expect(searchPage.suggestions.isPresent()).toBe(false);
                } else {
                    expect(searchPage.suggestions.isPresent()).toBe(true);
                }
            }

            //loop over all suggestions
            searchPage.suggestions.each(function (suggestion) {
                searchPage.moveMouseToElem(suggestion);
                searchPage.highlightElement(suggestion, 500);

                suggestion.getText().then(function (suggestionText) {
                    expect(suggestionText.toLowerCase()).toContain(obj[propName]);
                });
            });

            browser.sleep(2000);
            searchPage.searchBox.clear();
        }
    });

    it('should show appropriate message if no search results are returned', function () {
        var keyword = 'dfgdgfgfh';
        searchPage.search(keyword);

        searchPage.scrollTo(75, 617);

        var para = searchPage.getElementWithKeyword(keyword);

        searchPage.highlightElement(para, 3000);
        expect(para.getText()).toEqual(`Your search - ${keyword} - did not match any documents.`);
    });

});

fdescribe('Ryailya - Login', () => {
    beforeEach(function () {
        browser.get('https://www.sandisk.com');
    });
    it('should navigate to home page', () => {
        Base.navigateToHome();
    });
    it('should navigate to for business page', () => {
        BusinessPage.businessButtonLocator;
    });
    it('should display the elements as Data center...', () => {
        BusinessPage.solutionsButtonLocator.getText().then(function (text) {
            console.log(text);
        });
    });
    it('should navigate to Online Request,Global Sales Contacts,Customer Care', () => {
        BusinessPage.businessButtonLocator.click();
        browser.sleep(2000)
        expect(BusinessPage.connectWithSolutionsExpert.getText()).toEqual('Connect with a Solutions Expert')
    });
});