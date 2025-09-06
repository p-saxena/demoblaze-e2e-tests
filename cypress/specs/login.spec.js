import Navbar from '../pages/navbar.js'
import LoginPage from '../pages/login.page.js'

describe('Login: ', () => {
  before(() => cy.visit('/'))

  it('existing user should be able to login to the DemoBlaze online store', () => {
    const navbar = new Navbar()
    const loginPage = new LoginPage()
    cy.fixture('user').then(({ existingUser }) => {
      navbar.openLoginPage()
      loginPage.login(existingUser.username, existingUser.password)
      navbar.getWelcomeUser().should('contain', existingUser.username)
      navbar.getLogoutLink().should('be.visible')
    })
  })
})
