class Login {
  // get page objects
  get EMAIL_TEXTFIELD () { return $('//input[@id="email"]'); }
  get PASSWORD_TEXTFIELD () { return $('//input[@id="password"]'); }
  get SIGN_IN_BUTTON () { return $('//button[text()="Sign in"]'); }
  get LOGIN_FAILED_MSG () { return $('div.F1Message__flashMessageContent'); }
  get DISMISS_ERROR_MSG () { return $('a.F1Message__flashMessageClose'); }
  get FORGOT_PASSWORD_BUTTON () { return $('//*[text()="Forgot your password?"]'); }


  enterEmail(text) {
    this.EMAIL_TEXTFIELD.setValue(text);
  }

  enterPassword(text) {
    this.PASSWORD_TEXTFIELD.setValue(text);
  }

  tapSubmit() {
    this.SIGN_IN_BUTTON.click();
  }

  login (email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.tapSubmit();
  }

  tapDismissErrorMsg() {
    this.DISMISS_ERROR_MSG.click();
  }

  tapForgetPassword() {
    this.FORGOT_PASSWORD_BUTTON.click();
  }

}

module.exports = Login;