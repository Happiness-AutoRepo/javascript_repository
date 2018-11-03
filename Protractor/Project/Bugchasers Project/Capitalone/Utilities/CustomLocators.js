

require ('../Utilities/CustomLocators.js');

var customLocators = function() {

		
	by.addLocator('ngClick', function(toState,parentelement) {
	
		
		 var using = parentelement || document ;
		 var prefixes = ['ng-click'];
	      for (var p = 0; p < prefixes.length; ++p) {
	          var selector = '*[' + prefixes[p] + '="' + toState + '"]';
	          var inputs = using.querySelectorAll(selector);
	          if (inputs.length) {
	              return inputs;
	          }
	      }		
		
});
}

module.exports = new customLocators();


// fit('should take a Screenshot',()=>{
// 	browser.executeScript("arguments[0].scrollIntoView();",$("#footer-go-title"));
// 	browser.sleep(1000);
// 	$('#footer-go-section li:nth-child(4) a').click();
// 	browser.sleep(1000);
// 	$('.c1-button').click();
// 	browser.sleep(1000);

// 	browser.executeScript("arguments[0].scrollIntoView();",$("#section-row-press-alexa h2"));
// 	browser.sleep(1000);

// 	var fs=require('fs');
// 	browser.takeScreenshot().then(function(png){
// 		var stream = fs.createWriteStream('CybertekScreenshot'+Date.now()+'.png')
// 		stream.write(new Buffer(png,'base64'));
// 		stream.end();
// 	});

// 	element(by.ngClick('goToNextSlideAlexa()')).click();
// 	browser.sleep(1000);
// });