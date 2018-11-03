
var Home = function (){
    
    this.pageLogo = $('.site-header__logo');
    this.primaryNavElements=$$(".site-header__primary-nav button");
    this.primaryNav=[
        "Credit Cards",
        "Checking & Savings",
        "Auto Loans",
        "Business",
        "Commercial"],
        
    this.searchButton=$('#navtest-b-l1-search');
    this.searchBox=$('.site-search__text-input');
    this.supportButton=$('#navtest-b-l1-support');
    this.result=$('#support-searchResultsCount p');

    this.creditCardsSection=$('#card');
    this.ventureCardLink=$('#navtest-b-l2-featcard-title-venturetravelrewards');
    this.cardVentureLogo=$$('.site-L2__feat-card-card-art').get(0);
    this.cardVentureHeading=$$('.site-L2__feat-card-heading').get(0);
    this.cardSavorLink=$('#navtest-b-l2-featcard-title-savorrewards');

    this.homeBanner = $$('#full-bleed');
    this.bannerButton= $$('.c1-button.blue');
    this.cardPic=$('#card-art');
    this.creditwiseSignUpButton=$('#landingpage-signup-button');

    this.feedbackButtons=$('.usabilla_live_button_container');
    this.ratingIframe=by.css(".usabilla_scroller_area iframe");
    this.star5=$('.rating_5 label');
    this.ratingDropdown=by.css('.usabilla_ui_form select');
    this.submitButton=$('.submit');

    this.logo=$('a[aria-label="Capital One"]');
    this.footerMainProducts=$$('.site-footer__row-products button');
    this.careersLink=element(by.linkText('Careers & Jobs'));
    this.feedbackButton=by.xpath("//iframe[@title='Usabilla Feedback Button']");
    this.feedbackForm=by.xpath("//iframe[@title='Usabilla Feedback Form Frame']");
    this.feedbackStar5=element(by.xpath("//label[@for='star5']"));
    this.feedbackType=element(by.name('feedback_type'));
    this.feedbackCompliment=element(by.xpath('//*[@value="compliment"]'));
    this.feedbackText=element.all(by.xpath('//textarea[@name="feedback"]')).last();
    this.feedbackCustomerNo=element.all(by.xpath('//*[@value="No"]')).last();
    this.feedbackFormClose=$('a.close');
    this.linkPrivacy=$$('.site-footer__center-content>a').get(0);
    this.linkSecurity=$$('.site-footer__center-content>a').get(1);
    this.linkTerms=$$('.site-footer__center-content>a').get(2);
    this.callUsLink=element(by.linkText('Call Us'));
    this.contactNumber=element(by.xpath("//*[@class='component'][2]/ul[6]"));1

}

module.exports = new Home();