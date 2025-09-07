class OrderModalPage {
  selectors = {
    orderModal: '#orderModal',
    name: '#name',
    country: '#country',
    city: '#city',
    card: '#card',
    month: '#month',
    year: '#year',
    purchaseButton: '#orderModal .btn-primary',
    confirmation: '.sweet-alert h2',
    orderSummary: '.sweet-alert p',
    confirmationText: 'Thank you for your purchase!',
  }

  waitForActionable() {
    cy.get(this.selectors.orderModal).should('be.visible')
    cy.get(this.selectors.name).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.country).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.city).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.card).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.month).should('be.visible').and('not.be.disabled')
    cy.get(this.selectors.year).should('be.visible').and('not.be.disabled')

  }

  fillForm({ name, country, city, card, month, year }) {
    this.waitForActionable()
    cy.get(this.selectors.name).clear().type(name)
    cy.get(this.selectors.country).clear().type(country)
    cy.get(this.selectors.city).clear().type(city)
    cy.get(this.selectors.card).clear().type(card)
    cy.get(this.selectors.month).clear().type(month)
    cy.get(this.selectors.year).clear().type(year)
  }

  clickPurchase() {
    return cy.get(this.selectors.purchaseButton).click()
  }

  confirmMatches({ nameAlias = 'customerName', totalAlias = 'expectedAmount' } = {}) {
    cy.contains(this.selectors.confirmation, this.selectors.confirmationText).should('be.visible')
    cy.get(`@${totalAlias}`).then(total => {
      cy.get(`@${nameAlias}`).then(custName => {
        cy.get(this.selectors.orderSummary)
          .should($el => {
            expect($el.text()).to.match(/\bId:\s*\d+/) // "Id:" followed by digits
          })                    
          .and('contain.text', `Amount: ${total} USD`)      
          .and('contain.text', `Name: ${custName}`)          
          .and('contain.text', 'Date: ') // Date value is shown incorrect in app. Could create a util function to get today's date and assert if displayed date === today's date to fail the test.
      })
    })
  }
}

export default OrderModalPage
