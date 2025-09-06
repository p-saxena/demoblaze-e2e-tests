class LoginPage {
  selectors = {
    loginModal: '#logInModal',
    usernameInput: '#loginusername',
    passwordInput: '#loginpassword',
    loginButton: '#logInModal .modal-footer .btn-primary',
    loginLink: '#login2',
  }

  open() {
    return cy.get(this.selectors.loginLink).click()
  }

  getLoginModal() {
    return cy.get(this.selectors.loginModal)
  }
  
  waitForActionable() {
    this.getLoginModal().should('be.visible')
    cy.get(this.selectors.usernameInput).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.passwordInput).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.loginButton).should('be.visible').and('not.be.disabled')
  }

  typeUsername(value) {
    return cy.get(this.selectors.usernameInput).type(value)
  }

  typePassword(value) {
    return cy.get(this.selectors.passwordInput).type(value)
  }

  clickLoginButton() {
    return cy.get(this.selectors.loginButton).click()
  }
  
  login(username, password) {
    this.waitForActionable()
    this.getLoginModal().within(() => {
      cy.get(this.selectors.usernameInput).click()
      this.typeUsername(username)
      this.typePassword(password)
    })
    this.clickLoginButton()
  }
}

export default LoginPage
