var BusinessPage=function(){
    this.businessButtonLocator =$$('.navbar-nav a').get(1);
    this.solutionsButtonLocator=element.all(by.css("ul[class='nav navbar-nav']"));
    // element.all(by.css('.nav.navbar-nav'));   
    this.connectWithSolutionsExpert=$$('.btn.bg-red').get(0);//a[@class="btn.bg-red"]
    this.onlineRequestButton=element.all(by.css('div.svg img')).get(6)////div[@class='svg']/img
};
module.exports=new BusinessPage();