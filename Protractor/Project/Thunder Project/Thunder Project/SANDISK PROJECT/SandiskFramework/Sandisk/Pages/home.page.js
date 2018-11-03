var basePage = require("../Utilities/Base.js");

var homePage = function () {
    this.forHomeButton = element.all(by.css("div#bs-example-navbar-collapse-1 a"));
    this.table2 = element.all(by.css("ul[class='nav navbar-nav']"));
    this.optionproductType = element.all(by.repeater("family in filters | orderBy:'order'"));
    this.optionFormFactor = element.all(by.repeater("item in list.children"));
    this.hostType = element.all(by.repeater("item in list.children"));
    this.mobileStoragevalues = element.all(by.repeater("capacity in product.capacities"));

    this.deviceArr = [];
    this.expectedArr = ['FOR HOME FOR BUSINESS OEM DESIGN ABOUT SANDISK SUPPORT', 'MOBILE STORAGE\nCARDS & READERS\nUSB FLASH\nSSD\nMP3 PLAYERS\nEXTREME TEAM\nSTORIES\nSHOP NOW', 'ASIA'];

    this.expectedArray = ['MOBILE STORAGECARDS & READERSUSB', 'FLASHSSDMP3', 'PLAYERSEXTREME', 'TEAMSTORIESSHOP NOW'];
    this.hostArray = [];

    this.goToHomepage = function () {
        basePage.forHomeButton.click();
    };
}


module.exports = new homePage();