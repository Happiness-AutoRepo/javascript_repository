var searchPage = function() {
    this.searchIcon = $('.btn-search');
    this.searchBox = element(by.model('q'));
    this.resultsHeading = $('.light h1');
    this.searchResults = element.all(by.repeater('(url, resultObj) in searchResp.highlighting'));
    this.searchResultsCount = $('.divizer h2');
    this.paras = $$('.search-result-item :nth-child(3)');
    this.suggestions = $$('#ui-id-1 li');

    this.getElemsWithKeyword = function(keyword) {
        return this.paras.all(by.cssContainingText('*', keyword));
    }

    this.getElementWithKeyword = function(keyword) {
        return element(by.cssContainingText('p', keyword));
    }
    
    this.search = function(keyword) {
        this.searchBox.sendKeys(keyword);
        browser.sleep(2000);
        this.searchIcon.click();
    }
    
    this.addBorder = function (el) {
        browser.executeScript("arguments[0].style.border = '2px solid red'", el);
    }

    this.removeBorder = function (el) {
        browser.executeScript("arguments[0].style.border = ''", el);
    }

    this.highlightElement = function(el, duration) {
        this.addBorder(el);
        browser.sleep(duration);
        this.removeBorder(el); 
    }

    this.scrollTo = function(x, y) {
        browser.executeScript('window.scroll({left: arguments[0], top: arguments[1], behavior: "smooth"})',x,y);
    }

    this.moveMouseToElem = function(elem) {
         browser.actions().mouseMove(elem).perform();
    }

};

module.exports = new searchPage();