let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['JSexecutor.spec.js'],
    framework: 'jasmine',
    directConnect: 'true',
    capabilities: {
        'browserName': 'chrome'
    },   
    // multiCapabilities: [
    //     {'browserName': 'firefox'},
    //     {'browserName': 'chrome'}
    // ],    

    jasminNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function(){
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(10000);
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailureSummary: true,
            displayFailureSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));

        this.jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: "report/screenshots",
            preserveDirectory: false,                 // overrides the reports
            screenshotSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'Report.html'
        }).getJasmine2Reporter());
    }
  };