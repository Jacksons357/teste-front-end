describe('Product Modal', () => {
  it('should open when clicking "COMPRAR" and close when clicking the close button', () => {
    cy.visit('http://localhost:5173')

    cy.contains('button', 'COMPRAR').click()
    cy.get('[class*="modal"]').should('be.visible')

    cy.get('[data-testid="close_button"]').click()

    cy.get('[class*="modal"]').should('not.exist')
  })
})
