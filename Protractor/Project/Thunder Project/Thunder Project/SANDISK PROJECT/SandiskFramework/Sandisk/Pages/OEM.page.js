
var OEMPage=function(){
   this.HomePage=element(by.css('ul.nav.navbar-nav li:nth-of-type(3)'));
   this.emailButton=element(by.css('.reveal-btn>div>img'));
   this.firstName= element(by.name('firstName'));
   this.lastName=element(by.name('lastName'));
   this.email=element(by.name('email'));
   this.region=element(by.name('region'));
   this.country=element(by.name('country'));
   this.job= element(by.name('jobFunction'));
   this.dataCenter=element(by.css('.validate.requiredSelection label:nth-of-type(6)'));
   this.questionComment=element(by.name('mktoPersonNotes'));
   this.startButton=$(".btn.bg-red");
   this.subPageLinks=element.all(by.css('.nav.navbar-nav')).get(1).all(by.tagName('li'));
   this.formRequiredFields=element.all(by.css('.error-message.show'));
   this.regionCountry=function(sRegion,sCountry){
       this.sRegion=sRegion;
       this.sCountry=sCountry;
       element(by.id('region')).all(by.cssContainingText('option',this.sRegion)).click();
       element(by.id('country-box')).all(by.cssContainingText('option',this.sCountry)).click();
   };
   this.numberOfStore=element(by.binding("resellers[selectedCountry.id][selectedType.id].length || '0'"));
   this.storeList=element.all(by.binding("decodeHtml(reseller.name)"));

};

module.exports=new OEMPage();