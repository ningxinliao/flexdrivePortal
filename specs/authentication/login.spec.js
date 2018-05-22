const Login = require('../../pages/authentication/Login.page.js');
const login = new Login();
var assert = require('chai').assert;

describe('Login Page', function() {
  const email = 'ningxin.liao@mutualmobile.com';
  const password = 'flexmobile123';
  const wrongEmail = 'wrongEmail@mm.com';
  const wrongPassword = 'wrongPassword';
  const loginPageUrl = 'https://flexdrive.qa.f1.flexdrive.com/login';

  beforeEach(function() {
    browser.url(loginPageUrl);
  });

  it('should let you login with valid credentials', function() {
    login.enterEmail(email);
    login.enterPassword(password);
    login.tapSubmit();
    browser.pause(3000);
    assert.equal(browser.getUrl(),'https://flexdrive.qa.f1.flexdrive.com/');
  })

  it('should not log user in when enter wrong password', function() {
    login.enterEmail(email);
    login.enterPassword(wrongPassword);
    login.tapSubmit();
    browser.pause(3000);
    assert.equal(browser.getUrl(),loginPageUrl);
  })

  it('should throw an error message when enter wrong password', function() {
    login.enterEmail(email);
    login.enterPassword(wrongPassword);
    login.tapSubmit();
    login.LOGIN_FAILED_MSG.waitForVisible();
    assert.equal(login.LOGIN_FAILED_MSG.getText(),'Login Failed\nPlease try again.');
  })

  it('should not log user in when enter wrong email', function() {
    login.enterEmail(wrongEmail);
    login.enterPassword(password);
    login.tapSubmit();
    browser.pause(3000);
    assert.equal(browser.getUrl(),loginPageUrl);
  })

  it('should throw an error message when enter wrong email', function() {
    login.enterEmail(wrongEmail);
    login.enterPassword(password);
    login.tapSubmit();
    login.LOGIN_FAILED_MSG.waitForVisible();
    assert.equal(login.LOGIN_FAILED_MSG.getText(),'Login Failed\nPlease try again.');
  })

  it('should allow multiple failed attempts at login', function() {
    for (i = 0; i < 5; i++) {
      login.login(email, wrongPassword);
      browser.pause(1000);
      assert.equal(browser.getUrl(),loginPageUrl);
      login.LOGIN_FAILED_MSG.waitForVisible();
      assert.equal(login.LOGIN_FAILED_MSG.getText(), 'Login Failed\nPlease try again.')
    }
  })

  it('should allow error message to be dismissed', function() {
    login.enterEmail(wrongEmail);
    login.enterPassword(password);
    login.tapSubmit();
    login.LOGIN_FAILED_MSG.waitForVisible();
    login.tapDismissErrorMsg();
    browser.pause(1000);
    assert.equal(login.LOGIN_FAILED_MSG['type'], 'NoSuchElement');
  })

  it ('should disable the sign in button when email field is empty', function () {
    login.enterPassword(password);
    assert.isFalse(login.SIGN_IN_BUTTON.isEnabled());
  })

  it ('should disable the sign in button when password field is empty', function () {
    login.enterEmail(email);
    assert.isFalse(login.SIGN_IN_BUTTON.isEnabled());
  })

  it ('should enable the sign in button when email & password field is filled out', function () {
    login.enterEmail(email);
    login.enterPassword(password);
    assert.isTrue(login.SIGN_IN_BUTTON.isEnabled());
  })

  it('should keep user logged in upon refreshing page', function () {
    login.login(email, password);
    browser.pause(1000);
    browser.refresh();
    assert.equal(browser.getUrl(), 'https://flexdrive.qa.f1.flexdrive.com/');
  })
  
})
