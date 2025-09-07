import Navbar  from '../pages/navbar.page'
import SignupPage from '../pages/signup.page'
import LoginPage from '../pages/login.page'
import CategoryPage from '../pages/category.page'
import ProductDetailsPage from '../pages/productDetails.page'
import CartPage from '../pages/cart.page'
import OrderModalPage from '../pages/orderModal.page'

describe('Purchase Laptop: ', () => {
  before(() => cy.visit('/'))
  it('New user should be able to signup, login and buy a laptop', () => {
    const navbar = new Navbar()
    const signupPage = new SignupPage()
    const loginPage = new LoginPage()
    const categoryPage = new CategoryPage()
    const productDetailsPage = new ProductDetailsPage()
    const cartPage = new CartPage()
    const orderModal = new OrderModalPage()

    const username = `qa_${Date.now()}`
    const password = 'DemoUser123!'

    navbar.openSignUp()
    signupPage.signUp(username, password)

    navbar.openLogin()
    loginPage.login(username, password)
    navbar.getWelcomeUser().should('contain', username)

    categoryPage.openLaptops()
    categoryPage.openFirstProduct()

    productDetailsPage.addToCartAndVerifyAlert()

    navbar.openCart()
    cartPage.verifyItemIsAddedToCart()
    cartPage.getDisplayedTotal().as('expectedAmount')

    cartPage.placeOrder()

    cy.fixture('customer').then(({ valid: customer }) => {
      cy.wrap(customer.name).as('customerName')
      orderModal.fillForm(customer)
      orderModal.clickPurchase()
      orderModal.confirmMatches({ nameAlias: 'customerName', totalAlias: 'expectedAmount' })
    })
  })
})
