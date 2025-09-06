class Navbar {
  selectors = {
    loginLink: '#login2',
    logoutLink: '#logout2',
    cartLink: '#cartur',
    welcomeUser: '#nameofuser',
  }

  openLoginPage(){
    cy.get(this.selectors.loginLink).click()
  }

  openCartPage() {
    cy.get(this.selectors.cartLink).click()
  }

  getWelcomeUser() {
    return cy.get(this.selectors.welcomeUser)
  }

  getLogoutLink() {
    return cy.get(this.selectors.logoutLink)
  }

}

export default Navbar