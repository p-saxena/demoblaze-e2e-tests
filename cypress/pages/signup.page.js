class SignupPage {
  selectors = {
    signupModal: '#signInModal',
    usernameInput: '#sign-username',
    passwordInput: '#sign-password',
    signupButton: '.modal-footer .btn-primary',
    successfulSignupText: 'Sign up successful.',
  }
  
  getSignupModal() {
    return cy.get(this.selectors.signupModal)
  }

  waitForActionable() {
    this.getSignupModal().should('be.visible')
    cy.get(this.selectors.usernameInput).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.passwordInput).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.signupButton).should('be.visible').and('not.be.disabled')
  }

  typeUsername(value) {
    return cy.get(this.selectors.usernameInput).type(value, { delay: 0 })
  }

  typePassword(value) {
    return cy.get(this.selectors.passwordInput).type(value)
  }

  submit() {
    return cy.get(this.selectors.signupButton).click()
  }

  signUp(username, password) {
    this.waitForActionable()
    cy.once('window:alert', (message) =>
      expect(message).to.equal(this.selectors.successfulSignupText),
    )
    return this.getSignupModal().within(() => {
      this.typeUsername(username)
      this.typePassword(password)
      this.submit()
    })
  }
}

export default SignupPage
