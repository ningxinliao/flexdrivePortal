const Authentication = require('./Authentication.page.js');
const authentication = new Authentication();
var assert = require('chai').assert;

describe('Authentication Page', function() {
  const email = 'ningxin.liao@mutualmobile.com';
  const password = 'flexmobile123';
  const wrongEmail = 'wrongEmail@mm.com';
  const wrongPassword = 'wrongPassword';

  beforeEach(function() {
    browser.url('https://flexdrive.qa.f1.flexdrive.com/login');
  });

  it('should let you login with valid credentials', function() {
    authentication.enterEmail(email);
    authentication.enterPassword(password);
    authentication.tapSubmit();
    browser.pause(3000);
    assert.equal(browser.getUrl(),'https://flexdrive.qa.f1.flexdrive.com/');
  })

  it('should not log user in when enter wrong password', function() {
    authentication.enterEmail(email);
    authentication.enterPassword(wrongPassword);
    authentication.tapSubmit();
    browser.pause(3000);
    assert.equal(browser.getUrl(),'https://flexdrive.qa.f1.flexdrive.com/login');
  })

  it('should throw an error message when enter wrong password', function() {
    authentication.enterEmail(email);
    authentication.enterPassword(wrongPassword);
    authentication.tapSubmit();
    authentication.LOGIN_FAILED_MSG.waitForVisible();
    assert.equal(authentication.LOGIN_FAILED_MSG.getText(),'Login Failed\nPlease try again.');
  })

  it('should not log user in when enter wrong email', function() {
    authentication.enterEmail(wrongEmail);
    authentication.enterPassword(password);
    authentication.tapSubmit();
    browser.pause(3000);
    assert.equal(browser.getUrl(),'https://flexdrive.qa.f1.flexdrive.com/login');
  })

  it('should throw an error message when enter wrong email', function() {
    authentication.enterEmail(wrongEmail);
    authentication.enterPassword(password);
    authentication.tapSubmit();
    authentication.LOGIN_FAILED_MSG.waitForVisible();
    assert.equal(authentication.LOGIN_FAILED_MSG.getText(),'Login Failed\nPlease try again.');
  })

  it('should allow multiple failed attempts at login', function() {
    for (i = 0; i < 5; i++) {
      authentication.login(email, wrongPassword);
      browser.pause(1000);
      assert.equal(browser.getUrl(),'https://flexdrive.qa.f1.flexdrive.com/login');
      authentication.LOGIN_FAILED_MSG.waitForVisible();
      assert.equal(authentication.LOGIN_FAILED_MSG.getText(), 'Login Failed\nPlease try again.')
    }
  })

  it('should allow error message to be dismissed', function() {
    authentication.enterEmail(wrongEmail);
    authentication.enterPassword(password);
    authentication.tapSubmit();
    authentication.LOGIN_FAILED_MSG.waitForVisible();
    authentication.tapDismissErrorMsg();
    browser.pause(1000);
    assert.equal(authentication.LOGIN_FAILED_MSG['type'], 'NoSuchElement');
  })

  it ('should disable the sign in button when email field is empty', function () {
    authentication.enterPassword(password);
    assert.isFalse(authentication.SIGN_IN_BUTTON.isEnabled());
  })

  it ('should disable the sign in button when password field is empty', function () {
    authentication.enterEmail(email);
    assert.isFalse(authentication.SIGN_IN_BUTTON.isEnabled());
  })

  it ('should enable the sign in button when email & password field is filled out', function () {
    authentication.enterEmail(email);
    authentication.enterPassword(password);
    assert.isTrue(authentication.SIGN_IN_BUTTON.isEnabled());
  })

  it('should keep user logged in upon refreshing page', function () {
    authentication.login(email, password);
    browser.pause(1000);
    browser.refresh();
    assert.equal(browser.getUrl(), 'https://flexdrive.qa.f1.flexdrive.com/');
  })

  it('should be able to cancel the reset password process', function () {
    authentication.tapForgetPassword();
    browser.pause(1000);
    authentication.tapCancel();
    browser.pause(1000);
    assert.equal(browser.getUrl(),'https://flexdrive.qa.f1.flexdrive.com/login');
  })

  it('should let user reset password', function() {
    authentication.tapForgetPassword();
    browser.pause(1000);
    authentication.enterEmail(email);
    browser.pause(1000);
    authentication.tapContinue();
    browser.pause(1000);
    assert.equal(authentication.RESET_CONFIRMATION_MSG.getText(), 'Enter the code that was sent by email, then set and confirm your new password.')
  })
  
})
