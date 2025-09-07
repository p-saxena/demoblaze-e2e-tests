class ProductDetailsPage {
  selectors = {
    addToCartLinkText: 'Add to cart',
    addProductConfirmationText: 'Product added.',
  }

  addToCartAndVerifyAlert() {
    cy.then(() => {
      cy.once('window:alert', (msg) => {
        expect(msg).to.equal(this.selectors.addProductConfirmationText)
      })
    })
    return cy.contains('a', this.selectors.addToCartLinkText).click()
  }
}

export default ProductDetailsPage
