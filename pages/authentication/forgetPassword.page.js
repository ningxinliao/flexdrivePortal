class ForgetPassword {
    // get page objects
    get PASSWORD_RESET_EMAIL_FIELD () { return $('//*[text() = "E-mail address"]'); }
    get CANCEL_BUTTON () { return $('//*[text() = "Cancel"]'); }
    get CONTINUE_BUTTON () { return $('//*[text() = "Continue"]'); }
    get RESEND_BUTTON () { return $('//*[text()="Resend it"]'); }
    get RESET_CONFIRMATION_MSG () { return $('p.margin-bottom-none'); }

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

module.exports = ForgetPassword;