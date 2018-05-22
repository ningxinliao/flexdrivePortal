class Authentication {
  // get page objects
  get EMAIL_TEXTFIELD () { return $('//input[@id="email"]'); }
  get PASSWORD_TEXTFIELD () { return $('//input[@id="password"]'); }
  get SIGN_IN_BUTTON () { return $('//button[text()="Sign in"]'); }
  get LOGIN_FAILED_MSG () { return $('div.F1Message__flashMessageContent'); }
  get DISMISS_ERROR_MSG () { return $('a.F1Message__flashMessageClose'); }
  get FORGOT_PASSWORD_BUTTON () { return $('//*[text()="Forgot your password?"]'); }
  get PASSWORD_RESET_EMAIL_FIELD () { return $('//*[text() = "E-mail address"]'); }
  get CANCEL_BUTTON () { return $('//*[text() = "Cancel"]'); }
  get CONTINUE_BUTTON () { return $('//*[text() = "Continue"]'); }
  get RESEND_BUTTON () { return $('//*[text()="Resend it"]'); }
  get RESET_CONFIRMATION_MSG () { return $('p.margin-bottom-none'); }

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

  enterPasswordResetEmail(text) {
    this.PASSWORD_RESET_EMAIL_FIELD.setValue(text);
  }

  tapCancel() {
    this.CANCEL_BUTTON.click();
  }

  tapContinue() {
    this.CONTINUE_BUTTON.click();
  }


}

module.exports = Authentication;