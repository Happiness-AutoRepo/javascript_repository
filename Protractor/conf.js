exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['protractorLocators.js'],
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
    }
  };