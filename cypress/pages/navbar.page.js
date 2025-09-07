class Navbar {
  selectors = {
    signUpLink: '#signin2',
    loginLink: '#login2',
    logoutLink: '#logout2',
    cartLink: '#cartur',
    welcomeUser: '#nameofuser',
  }

  openSignUp() {
    return cy.get(this.selectors.signUpLink).click()
  }

  openLogin(){
    return cy.get(this.selectors.loginLink).click()
  }

  openCart() {
    cy.intercept('POST', '**/viewcart').as('viewCart')
    cy.get(this.selectors.cartLink).click()
    return cy.wait('@viewCart').its('response.statusCode').should('eq', 200)
  }

  getWelcomeUser() {
    return cy.get(this.selectors.welcomeUser)
  }

  getLogoutLink() {
    return cy.get(this.selectors.logoutLink)
  }

}

export default Navbar