describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('Under construction')
  })
})
