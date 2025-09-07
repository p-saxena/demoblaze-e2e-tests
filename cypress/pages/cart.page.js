class CartPage {
  selectors = {
    tableTitleText: 'Products',
    tableRows: '#tbodyid tr',
    totalAmount: '#totalp',
    placeOrderButtonText: 'Place Order',
  }
  
  getRows() { return cy.get(this.selectors.tableRows) }

  verifyItemIsAddedToCart(expected = 1) {
    cy.url().should('include', 'cart.html')
    cy.contains('h2', this.selectors.tableTitleText).should('be.visible')
    this.getRows().should('have.length', expected)
  }


  getDisplayedTotal() {
    return cy.get(this.selectors.totalAmount)
      .invoke('text')
      .then(total => Number((total || '').trim()))
  }

  placeOrder() {
    return cy.contains('button', this.selectors.placeOrderButtonText).click()
  }
}

export default CartPage
