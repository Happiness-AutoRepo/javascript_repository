
var CapitaloneData = require('../TestData/CapitaloneData.json');

var UserSignIn = function(){

this.userNameError = $('#us-login-auth-error-user p:nth-child(1)');
this.passwordError = $('#us-login-auth-error-pass p:nth-child(2)');
this.signInButton = $('#no-acct-submit');
this.username = $('#no-acct-uid');
this.password = $('#no-acct-pw');
this.rememberMeCheckbox= element(by.ngClick('ctrl.handleRemember(ctrl.remember)'));
this.forgotUsername=$('.login-auth-help');
this.signInHelpLogo=$('.status-icon-med');

this.signInLastName=$('#lastname');
this.signInSSN=$('#fullSSN1');

var DoBnums = CapitaloneData.customers[1].DoB.split("/");
this.signInDoBmonth=$('#form_dob_month').element(by.css('option[value="'+DoBnums[0]+'"]'));
this.signInDoBday=$('#form_dob_day').element(by.cssContainingText('option', DoBnums[1]));   
this.signInDoByear=$('#form_dob_year').element(by.cssContainingText('option', DoBnums[2]));

this.errorMsg=$('.error-msg-invalid');
this.findMeButton=$('#find-me-button');

}

module.exports = new UserSignIn();