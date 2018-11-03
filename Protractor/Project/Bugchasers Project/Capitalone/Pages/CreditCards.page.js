
var CreditCards = function (){

    this.savorApplyButton=$(".c1-button.green");
    this.ventureApplyButton=$(".c1-button.green");

    this.savorHomePageHeadline=element(by.xpath("//*[text()='Savor® Rewards from Capital One®']"));
    this.savorPageSavorImg=$(".card-name-img");

    this.savorFormFirstName=$('#firstName');
    this.savorFormLastName=$('#lastName');
    this.savorFormDoB=$('#dateOfBirth');
    this.savorFormSSN=$('#socialSecurityNumber');
    this.savorFormCitizenship=$('#citizenNo');
    this.savorFormResident=$('#resident');
    this.savorFormCitizenCountry=$('#citizenCountry1');
    this.savorFormAddress=$('#combinedStreetAddress');
    this.savorFormEmail=$('#email');
    this.savorFormPhone=$('#phoneNumber');
    this.savorFormEmploymentOptions=$("#employmentStatus_input");
    this.savorFormEmploymentStatus=$('#employmentStatus_listbox li:nth-child(3)');
    this.savorFormAnnualIncome=$('#annualIncome');
    this.savorFormMonthlyRent=$('#monthlyRentMortgage');
    this.savorFormAccountOptions=$$("#checkingOrSavings_input").first();
    this.savorFormBankAccount=$('#checkingOrSavings_listbox');
    this.savorFormMonthlyBill=$('#intentToSpend');
    this.savorFormElectronicSign=$('.nub-esign');
    this.savorFormContinueButton=$('#continueToSubmit');
    this.savorFormSubmitBUtton=$('#submitApplication');

    this.ventureSliderDisplay=$('#rowVentureSliderBannerTest');
    this.ventureSlider=$('.ch-slider-new-handle');
    this.ventureMonthlySpend=element(by.model('monthlySpend'));
    this.ventureAnnualReward=$('.val.ng-binding');
    this.ventureReadReview=$('.BVRRNumber');
    this.ventureProducts=$('#product-selector');
    this.venturePlatinumCard=$('#platinum-li');
    this.ventureHeader=$('.module-header.non-mobile span');

    this.platinumSearchBox=$('#bv-search-input');
    this.platinumSearchResult=$$('.questionCountFooter');
    this.platinumFilter=$$('#card-filter');
}

module.exports = new CreditCards();

