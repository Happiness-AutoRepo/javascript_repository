var PrivacyRightsPage=function(){
    this.linkButton=element(by.xpath("//a[@href='#children']"));
    this.privacyLinkText=element(by.linkText("Your CA Privacy Rights"));
    this.thirdPartyLink=element(by.xpath("//a[@href='#thirdparty']"));
    this.contactPage=element.all(by.linkText('Contact Us'));
};
module.exports=new PrivacyRightsPage();