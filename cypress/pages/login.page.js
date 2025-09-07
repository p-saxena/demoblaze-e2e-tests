class LoginPage {
  selectors = {
    loginModal: '#logInModal',
    usernameInput: '#loginusername',
    passwordInput: '#loginpassword',
    loginButton: '.modal-footer .btn-primary',
  }

  getLoginModal() {
    return cy.get(this.selectors.loginModal)
  }
  
  waitForActionable() {
    this.getLoginModal().should('be.visible')
    cy.get(this.selectors.usernameInput).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.passwordInput).should('be.visible').and('not.be.disabled')
    this.getLoginModal().find(this.selectors.loginButton).should('be.visible').and('not.be.disabled')
  }

  typeUsername(value) {
    cy.get(this.selectors.usernameInput).clear().type(value, { delay: 0 })
  }

  typePassword(value) {
    cy.get(this.selectors.passwordInput).clear().type(value)
  }

  clickLoginButton() {
    cy.get(this.selectors.loginButton).click()
  }
  
  login(username, password) {
    this.waitForActionable()
    this.getLoginModal().within(() => {
      this.typeUsername(username)
      this.typePassword(password)
      this.clickLoginButton()
    })
  }
}

export default LoginPage
