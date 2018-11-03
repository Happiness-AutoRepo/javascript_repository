let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
   
    directConnect : true,
  
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                //'--start-fullscreen',
                'incognito'
            ],           
        }
    },
  
    //specs: ['../Tests/CapitaloneHome.spec.js'], 

 suites:{ 
     smoke: ['../Tests/CareersJobs.spec.js'],
     regression: ['../Tests/*.spec.js']
 },

onPrepare: function () {
    
    browser.driver.manage().window().setSize(1200,1000);
    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true,
        showstack: false
    }));
      
    jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: '../report/screenshots',
        preserveDirectory: false,
        screenshotsSubfolder: 'images',
        jsonsSubfolder: 'jsons',
        docName: 'Capitalone-Report.html'
    }).getJasmine2Reporter());
  
},
    
    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 100000,    
        print: function() {}
        
    }
};