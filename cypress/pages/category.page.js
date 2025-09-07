class CategoryPage {
  selectors = {
    laptopsCategory: '.list-group-item',
    laptopsCategoryText: 'Laptops',
    productLink: '.hrefch',
  }

  openLaptops() {
    // Set intercept to wait for Demoblaze to load laptops
    cy.intercept('POST', '**/bycat').as('bycat')
    cy.contains(this.selectors.laptopsCategory, this.selectors.laptopsCategoryText).click()
    return cy.wait('@bycat').its('response.statusCode').should('eq', 200)
  }

  openFirstProduct() {
    return cy.get(this.selectors.productLink).should('be.visible').first().click()
  }
}

export default CategoryPage
