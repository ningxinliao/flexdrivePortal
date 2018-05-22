const Login = require('../../pages/authentication/Login.page.js');
const login = new Login();
const ForgetPassword = require('../../pages/authentication/ForgetPassword.page.js');
const forgetPassword = new ForgetPassword();
var assert = require('chai').assert;

describe('ForgetPassword Page', function() {
  const email = 'ningxin.liao@mutualmobile.com';
  const password = 'flexmobile123';
  const wrongEmail = 'wrongEmail@mm.com';
  const wrongPassword = 'wrongPassword';
  const loginPageUrl = 'https://flexdrive.qa.f1.flexdrive.com/login';

  beforeEach(function() {
    browser.url(loginPageUrl);
  });

  it('should be able to cancel the reset password process', function () {
    login.tapForgetPassword();
    browser.pause(1000);
    forgetPassword.tapCancel();
    browser.pause(1000);
    assert.equal(browser.getUrl(),loginPageUrl);
  })

  it('should let user reset password', function() {
    login.tapForgetPassword();
    browser.pause(1000);
    login.enterEmail(email);
    browser.pause(1000);
    forgetPassword.tapContinue();
    browser.pause(1000);
    assert.equal(forgetPassword.RESET_CONFIRMATION_MSG.getText(), 'Enter the code that was sent by email, then set and confirm your new password.')
  })

})